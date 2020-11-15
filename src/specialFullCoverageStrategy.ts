import { KindOfProduct } from './enums/types';
import { Strategy } from './interfaces/strategy';
import { Product } from './product';

export class SpecialFullCoverageStrategy implements Strategy {

    isSelected(kind: KindOfProduct) {
        return kind === KindOfProduct.SpecialFullCoverage;
    }

    updatePrice(product: Product): Product {
        if (product.price < 50) {
            product.price += 1;
        }

        if (product.price < 50 && product.sellIn < 11) {
            product.price += 1;
        }

        if (product.price < 50 && product.sellIn < 6) {
            product.price += 1;
        }

        product.sellIn -= 1;

        if (product.sellIn < 0) {
            product.price = 0;
        }

        return product;
    }
}
