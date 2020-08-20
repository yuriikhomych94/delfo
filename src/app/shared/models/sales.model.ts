import { ISales } from '../interfaces/sales.interface';

export class Sales implements ISales {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public image?: string
    ) { }
}