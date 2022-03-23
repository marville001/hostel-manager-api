import { Table, Column, Model, DataType } from 'sequelize-typescript';

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
    type: DataType.NUMBER,
    allowNull: false,
  })
  floors: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  rooms: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  price: string;
}
