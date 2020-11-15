export class Product {
    public name: string;
    public sellIn: number;
    public price: number;

    constructor(name: string, sellIn: number, price:number) {
      this.name = name;
      this.sellIn = sellIn;
      this.price = price;
    }
  }
