import { expect } from 'chai';

import { CarInsurance } from '../src/car-insurance';
import { Product } from '../src/product';

describe("Co Test", function () {

  it("should foo", function () {
    const productTest = new Product("foo", 0, 0);
    const carInsurance = new CarInsurance([productTest]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("foo");
  });

});
