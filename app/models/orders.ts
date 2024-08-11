import { Model, Column, Table, PrimaryKey, AutoIncrement, NotNull, AllowNull, DataType, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import Client from "./clients";
import ShippingAddress from "./shippingAddresses";
import Product from "./product";
import ProductsByOrder from "./productsByOrder";

enum EUnitOfMeasurement {
  PIECE = "PIECE",
  LOT = "LOT",
}

@Table({ tableName: "Orders" })
class Order extends Model<Order> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @ForeignKey(() => Client)
  @Column
  clientId: number;

  @BelongsTo(() => Client)
  client: Client;

  @ForeignKey(() => ShippingAddress)
  @Column
  shippingAddressId: number;

  @BelongsTo(() => ShippingAddress)
  shippingAddress: ShippingAddress;

  @BelongsToMany(() => Product, () => ProductsByOrder)
  products: Product[];
}

export default Order;
