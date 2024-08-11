export interface IResponse {
  status: number;
  message: string;
  data?: any;
}

export interface IPaginationResponse {
  page: number;
  pageSize: number;
  totalItems: number;
  items: any[];
}

export interface IPagMapToModel {
  offset: number;
  limit: number;
}

export interface IAddOrder {
  clientId: number;
  shippingAddressId: number;
  products: number[];
}
