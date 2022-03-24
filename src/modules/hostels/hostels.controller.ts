import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Hostel as HostelEntity } from './hostel.entity';
import { HostelsService } from './hostels.service';
import { HostelDto } from './dto/hostel.dto';

@Controller('hostels')
export class HostelsController {
  constructor(private readonly hostelsService: HostelsService) {}

  @Get()
  async findAll() {
    return await this.hostelsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<HostelEntity> {
    const post = await this.hostelsService.findOne(id);

    if (!post) {
      throw new NotFoundException('Hostel Not found');
    }

    return post;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() hostel: HostelDto,
    @Request() req,
  ): Promise<HostelEntity> {
    // create a new post and return the newly created post
    return await this.hostelsService.create(hostel);
  }
@UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() hostel: HostelDto, @Request() req): Promise<HostelEntity> {
        // get the number of row affected and the updated post
        const { numberOfAffectedRows, updatedPost } = await this.hostelsService.update(id, hostel, hostel.ownerId);

        // if the number of row affected is zero, 
        // it means the post doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Hostel doesn\'t exist');
        }

        // return the updated post
        return updatedPost;
    }	

}
