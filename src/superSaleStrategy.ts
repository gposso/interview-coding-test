import { KindOfProduct } from './enums/types';
import { Strategy } from './interfaces/strategy';
import { Product } from './product';

export class SuperSaleStrategy implements Strategy {

    isSelected(kind: KindOfProduct) {
        return kind === KindOfProduct.SuperSale;
    }

    updatePrice(product: Product): Product {
        if (product.price > 50 || product.price < 0) {
            throw new Error('the price of a product is never more than 50 or negative');
        }

        product.price -= 2;

        if (product.price < 0 ) {
            product.price = 0;
        }

        product.sellIn -= 1;

        return product;
    }
}
