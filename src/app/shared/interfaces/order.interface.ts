import { IProduct } from './product.interface';

export interface IOrder {
    id: number;
    productName: string;
    image: string;
    userName: string;
    userPhone: string;
    userCity: string;
    userStreet: string;
    userHouse: number;
    totalPayment: string;
    userComment?: string;
}