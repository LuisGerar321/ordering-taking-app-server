import { Model, Column, Table, PrimaryKey, AutoIncrement, AllowNull, HasMany } from "sequelize-typescript";
import ShippingAddress from "./shippingAddresses";
import Order from "./orders";

@Table({ tableName: "Clients" })
class Client extends Model<Client> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  name!: string;

  @Column
  rfc?: string;

  @Column
  taxAddress?: string;

  @Column
  email?: string;

  @Column
  phone?: string;

  @Column
  contact?: string;

  @HasMany(() => ShippingAddress)
  shippingAddresses!: ShippingAddress[];

  @HasMany(() => Order)
  orders: Order[];
}

export default Client;
