import { expect } from 'chai';

import { CarInsurance } from '../src/carInsurance';
import { KindOfProduct } from '../src/enums/types';
import { Product } from '../src/product';

describe("Co Test", function () {
    it("should foo", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.FullCoverage, 2, 0)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Full Coverage');
        expect(products[0].sellIn).equal(1);
        expect(products[0].price).equal(1);
    });
});
