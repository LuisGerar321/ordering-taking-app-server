import sequelize from "./db";
import Client from "./models/clients";
import Product from "./models/product";
import ShippingAddress from "./models/shippingAddresses";

export const seedData = async () => {
  const t = await sequelize.transaction();
  try {
    const [client1] = await Client.findOrCreate({
      where: {
        name: "Gamesa S.A. de C.V.",
        rfc: "GMS010101ABC",
        taxAddress: "Av. Paseo de la Reforma 123, CDMX",
        email: "contacto@gamesa.com.mx",
        phone: "+521234567890",
        contact: "Carlos Fernández",
      },
      transaction: t,
    });

    const [client2] = await Client.findOrCreate({
      where: {
        name: "Coca-Cola FEMSA S.A.B. de C.V.",
        rfc: "CCF020202XYZ",
        taxAddress: "Calle 10 No. 456, Monterrey",
        email: "info@cokecolafemsa.com.mx",
        phone: "+521234567891",
        contact: "Ana Morales",
      },
      transaction: t,
    });

    const [client3] = await Client.findOrCreate({
      where: {
        name: "Bimbo S.A. de C.V.",
        rfc: "BIM030303LMN",
        taxAddress: "Av. del Valle 789, Ciudad de México",
        email: "ventas@bimbo.com.mx",
        phone: "+521234567892",
        contact: "Luis Hernández",
      },
      transaction: t,
    });

    const [client4] = await Client.findOrCreate({
      where: {
        name: "Grupo Modelo S.A. de C.V.",
        rfc: "GMO040404OPQ",
        taxAddress: "Blvd. Manuel Ávila Camacho 101, CDMX",
        email: "contacto@modelogroup.com.mx",
        phone: "+521234567893",
        contact: "María López",
      },
      transaction: t,
    });

    await ShippingAddress.findOrCreate({
      where: {
        clientId: client1.id,
        shotName: "Oficina Central",
        address: "Av. Paseo de la Reforma 123, CDMX",
        postalCode: "06500",
        phone: "+521234567890",
        contact: "Carlos Fernández",
      },
      transaction: t,
    });

    await ShippingAddress.findOrCreate({
      where: {
        clientId: client1.id,
        shotName: "Sede de Producción",
        address: "Av. Santa Fe 200, CDMX",
        postalCode: "05100",
        phone: "+521234567890",
        contact: "Carlos Fernández",
      },
      transaction: t,
    });

    await ShippingAddress.findOrCreate({
      where: {
        clientId: client2.id,
        shotName: "Oficina Central",
        address: "Calle 10 No. 456, Monterrey",
        postalCode: "64000",
        phone: "+521234567891",
        contact: "Ana Morales",
      },
      transaction: t,
    });

    await ShippingAddress.findOrCreate({
      where: {
        clientId: client2.id,
        shotName: "Almacén Principal",
        address: "Avenida de las Américas 123, Monterrey",
        postalCode: "64100",
        phone: "+521234567891",
        contact: "Ana Morales",
      },
      transaction: t,
    });

    await ShippingAddress.findOrCreate({
      where: {
        clientId: client3.id,
        shotName: "Oficina Central",
        address: "Av. del Valle 789, Ciudad de México",
        postalCode: "03100",
        phone: "+521234567892",
        contact: "Luis Hernández",
      },
      transaction: t,
    });

    await ShippingAddress.findOrCreate({
      where: {
        clientId: client4.id,
        shotName: "Planta de Producción",
        address: "Av. Insurgentes Sur 456, Ciudad de México",
        postalCode: "04300",
        phone: "+521234567892",
        contact: "Luis Hernández",
      },
      transaction: t,
    });

    await ShippingAddress.findOrCreate({
      where: {
        clientId: client4.id,
        shotName: "Oficina Central",
        address: "Blvd. Manuel Ávila Camacho 101, CDMX",
        postalCode: "11570",
        phone: "+521234567893",
        contact: "María López",
      },
      transaction: t,
    });

    await ShippingAddress.findOrCreate({
      where: {
        clientId: client4.id,
        shotName: "Centro de Distribución",
        address: "Avenida San Jerónimo 500, CDMX",
        postalCode: "10200",
        phone: "+521234567893",
        contact: "María López",
      },
      transaction: t,
    });

    await Product.findOrCreate({
      where: {
        sku: "P001",
        description: "Large Box",
        unitOfMeasurement: "PIECE",
        imageUrl: "https://m.media-amazon.com/images/I/81uwMTb5PuL.jpg",
        price: "10",
      },
      transaction: t,
    });

    await Product.findOrCreate({
      where: {
        sku: "P002",
        description: "Classic Box",
        unitOfMeasurement: "PIECE",
        imageUrl: "https://m.media-amazon.com/images/I/71j1olgsndL.jpg",
        price: "19",
      },
      transaction: t,
    });

    await Product.findOrCreate({
      where: {
        sku: "P003",
        description: "Pro Box",
        unitOfMeasurement: "LOT",
        imageUrl: "https://5.imimg.com/data5/PS/CH/MY-37381179/packaging-boxes.jpg",
        price: "23",
      },
      transaction: t,
    });

    t.commit();
  } catch (error) {
    t.rollback();
    console.error(error);
  }
};
