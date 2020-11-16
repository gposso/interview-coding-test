import { CarInsurance } from "../carInsurance";
import { KindOfProduct } from "../enums/types";
import { Product } from "../product";

const productsAtDayZero: Product[] = [
    new Product(KindOfProduct.MediumCoverage, 10, 20),
    new Product(KindOfProduct.FullCoverage, 2, 0),
    new Product(KindOfProduct.LowCoverage, 5, 7),
    new Product(KindOfProduct.MegaCoverage, 0, 80),
    new Product(KindOfProduct.MegaCoverage, -1, 80),
    new Product(KindOfProduct.SpecialFullCoverage, 15, 20),
    new Product(KindOfProduct.SpecialFullCoverage, 10, 49),
    new Product(KindOfProduct.SpecialFullCoverage, 5, 49),
    new Product(KindOfProduct.SuperSale, 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product: Product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
    console.log(`${('-'.repeat(8))} day ${i} ${('-'.repeat(8))}`);
    console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(productPrinter);
    console.log('');
}
