import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { HOSTEL_REPOSITORY } from 'src/core/constants';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { HostelDto } from './dto/hostel.dto';
import { Hostel } from './hostel.entity';

@Injectable()
export class HostelsService {
  constructor(
    @Inject(HOSTEL_REPOSITORY) private readonly hostelRepository: typeof Hostel,
    private readonly usersService: UsersService,
  ) {}

  async create(hostel: HostelDto): Promise<Hostel> {
    const user = await this.usersService.findOneById(hostel.ownerId);

    if (!user) {
      throw new BadRequestException('Invalid owner Id');
    } else {
      return await this.hostelRepository.create<Hostel>(hostel);
    }
  }

  async findAll(): Promise<Hostel[]> {
    return await this.hostelRepository.findAll<Hostel>({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async findOne(id): Promise<Hostel> {
    return await this.hostelRepository.findOne({
      where: { id },
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async delete(id, ownerId) {
    return await this.hostelRepository.destroy({ where: { id, ownerId } });
  }

  async update(id, data, ownerId) {
    const [numberOfAffectedRows, [updatedPost]] =
      await this.hostelRepository.update(
        { ...data },
        { where: { id, ownerId }, returning: true },
      );

    return { numberOfAffectedRows, updatedPost };
  }
}
