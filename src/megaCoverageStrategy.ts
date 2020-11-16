import { KindOfProduct } from './enums/types';
import { Strategy } from './interfaces/strategy';
import { Product } from './product';

export class MegaCoverageStrategy implements Strategy {

    isSelected(kind: KindOfProduct) {
        return kind === KindOfProduct.MegaCoverage;
    }

    updatePrice(product: Product): Product {
        if (product.price !== 80) {
            throw new Error('the price is 80 and it never alters');
        }
        return product;
    }

}
