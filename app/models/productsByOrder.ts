import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Order from "./orders";
import Product from "./product";

@Table({ tableName: "ProductsByOrder" })
class ProductsByOrder extends Model<ProductsByOrder> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Order)
  @Column
  orderId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @Column
  quantity: number;
}

export default ProductsByOrder;
