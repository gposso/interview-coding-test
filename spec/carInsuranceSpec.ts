import { expect } from 'chai';

import { CarInsurance } from '../src/carInsurance';
import { KindOfProduct } from '../src/enums/types';
import { Product } from '../src/product';

describe("test class CarInsurance", function () {
    it("it should throw an error if the product kind is not available", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.LowCoverage, 2, 0)]);
        expect(function () {
            carInsurance.updatePrice();
        }).to.throw('kind of product not available');
    });

    it("should return update price for kind full coverage when sellIn is greater or equal than zero", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.FullCoverage, 2, 0)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Full Coverage');
        expect(products[0].sellIn).equal(1);
        expect(products[0].price).equal(1);
    });

    it("should return update price for kind full coverage when sellIn is less than zero", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.FullCoverage, -1, 4)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Full Coverage');
        expect(products[0].sellIn).equal(-2);
        expect(products[0].price).equal(6);
    });

    it("should return update price for kind full coverage when price is greater than 50", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.FullCoverage, -27, 50)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Full Coverage');
        expect(products[0].sellIn).equal(-28);
        expect(products[0].price).equal(50);
    });
});
