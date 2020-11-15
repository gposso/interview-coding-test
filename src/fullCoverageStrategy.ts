import { KindOfProduct } from './enums/types';
import { Strategy } from './interfaces/strategy';
import { Product } from './product';

export class FullCoverageStrategy implements Strategy {

    isSelected(kind: KindOfProduct) {
        return kind === KindOfProduct.FullCoverage;
    }

    updatePrice(product: Product): Product {
        if (product.price < 50 ) {
            product.price += 1;
        }

        product.sellIn -= 1;

        if (product.sellIn < 0 && product.price < 50) {
            product.price += 1;
        }

        return product;
    }

}
