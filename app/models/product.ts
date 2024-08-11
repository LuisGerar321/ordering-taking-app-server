import { Model, Column, Table, PrimaryKey, AutoIncrement, NotNull, AllowNull, DataType, BelongsToMany } from "sequelize-typescript";
import Order from "./orders";
import ProductsByOrder from "./productsByOrder";

enum EUnitOfMeasurement {
  PIECE = "PIECE",
  LOT = "LOT",
}

@Table({ tableName: "Products" })
class Product extends Model<Product> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  sku!: string;

  @Column
  description?: string;

  @Column({
    type: DataType.ENUM(...Object.values(EUnitOfMeasurement)),
  })
  unitOfMeasurement?: EUnitOfMeasurement;

  @Column
  imageUrl?: string;

  @Column
  price?: string;

  @BelongsToMany(() => Order, () => ProductsByOrder)
  orders: Order[];
}

export default Product;
