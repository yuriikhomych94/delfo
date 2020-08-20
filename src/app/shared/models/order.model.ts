import { IOrder } from '../interfaces/order.interface';

export class Order implements IOrder {
    constructor(
        public id,
        public productName,
        public image,
        public userName,
        public userPhone,
        public userCity,
        public userStreet,
        public userHouse,
        public totalPayment,
        public userComment
    ) { }
}