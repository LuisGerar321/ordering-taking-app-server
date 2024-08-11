import { Model, Column, Table, PrimaryKey, AutoIncrement, ForeignKey, AllowNull, BelongsTo, HasMany } from "sequelize-typescript";
import Client from "./clients";
import Order from "./orders";

@Table({ tableName: "ShippingAddresses" })
class ShippingAddress extends Model<ShippingAddress> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @ForeignKey(() => Client)
  @Column
  clientId!: number;

  @Column
  shotName?: string;

  @Column
  address?: string;

  @Column
  postalCode?: string;

  @Column
  phone?: string;

  @Column
  contact?: string;

  @BelongsTo(() => Client)
  client!: Client;

  @HasMany(() => Order)
  orders: Order[];
}

export default ShippingAddress;
