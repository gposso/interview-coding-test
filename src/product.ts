import { KindOfProduct } from "./enums/types";

export class Product {
    public name: KindOfProduct;
    public sellIn: number;
    public price: number;

    constructor(name: KindOfProduct, sellIn: number, price: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }
}
