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

    it("should return update price for kind mega coverage", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.MegaCoverage, -1, 80)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Mega Coverage');
        expect(products[0].sellIn).equal(-1);
        expect(products[0].price).equal(80);
    });

    it("should return update price for special full coverage when there are 11 days or greater", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.SpecialFullCoverage, 15, 20)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Special Full Coverage');
        expect(products[0].sellIn).equal(14);
        expect(products[0].price).equal(21);
    });

    it("should return update price for special full coverage when there are 10 days or less", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.SpecialFullCoverage, 10, 49)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Special Full Coverage');
        expect(products[0].sellIn).equal(9);
        expect(products[0].price).equal(50);
    });

    it("should return update price for special full coverage when there are 10 days or less", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.SpecialFullCoverage, 10, 25)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Special Full Coverage');
        expect(products[0].sellIn).equal(9);
        expect(products[0].price).equal(27);
    });

    it("should return update price for special full coverage when there are 5 days or less", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.SpecialFullCoverage, 5, 35)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Special Full Coverage');
        expect(products[0].sellIn).equal(4);
        expect(products[0].price).equal(38);
    });

    it("should return update price for special full coverage when no more days left drops price to 0", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.SpecialFullCoverage, 0, 50)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Special Full Coverage');
        expect(products[0].sellIn).equal(-1);
        expect(products[0].price).equal(0);
    });

    it("should return update price for special full coverage when there are still days of sale", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.SpecialFullCoverage, 2, 50)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Special Full Coverage');
        expect(products[0].sellIn).equal(1);
        expect(products[0].price).equal(50);
    });

    it("should return update price for super sale when sellIn is greater or equal than zero", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.SuperSale, 3, 6)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Super Sale');
        expect(products[0].sellIn).equal(2);
        expect(products[0].price).equal(4);
    });

    it("should return update price for super sale when sellIn is greater or equal than zero", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.SuperSale, 1, 1)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Super Sale');
        expect(products[0].sellIn).equal(0);
        expect(products[0].price).equal(0);
    });

    it("should return update price for super sale when price is equal than zero", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.SuperSale, 1, 0)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Super Sale');
        expect(products[0].sellIn).equal(0);
        expect(products[0].price).equal(0);
    });

    it("should return update price for super sale when price is equal than zero", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.SuperSale, 1, 50)]);
        const products = carInsurance.updatePrice();
        expect(products[0].name).equal('Super Sale');
        expect(products[0].sellIn).equal(0);
        expect(products[0].price).equal(48);
    });

    it("it should throw an error if the product kind is not available for super sale", function () {
        const carInsurance = new CarInsurance([new Product(KindOfProduct.SuperSale, 2, 51)]);
        expect(function () {
            carInsurance.updatePrice();
        }).to.throw('the price of a product is never more than 50 or negative');
    });
});
