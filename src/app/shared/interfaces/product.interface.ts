import { ICategory } from './category.interface';

export interface IProduct {
    id: number;
    category: ICategory;
    nameUA: string;
    nameEN: string;
    description: string;
    price: number;
    weight: string;
    count: number;
    image: string;
    size: number; 
}