import { KindOfProduct } from './enums/types';
import { Strategy } from './interfaces/strategy';
import { Product } from './product';

export class MediumCoverageStrategy implements Strategy {

    isSelected(kind: KindOfProduct) {
        return kind === KindOfProduct.MediumCoverage;
    }

    updatePrice(product: Product): Product {
        if (product.price > 50 || product.price < 0) {
            throw new Error('the price of a product is never more than 50 or negative');
        }

        if (product.price > 0) {
            product.price -= 1;
        }

        product.sellIn -= 1;

        if (product.price > 0 && product.sellIn < 0) {
            product.price -= 1;
        }

        return product;
    }
}
