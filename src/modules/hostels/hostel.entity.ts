import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class Hostel extends Model<Hostel> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  floors: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rooms: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rent: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  deposit: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ownerId: number;

  @BelongsTo(() => User)
  user: User;
}
