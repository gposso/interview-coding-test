import { KindOfProduct } from './enums/types';
import { Strategy } from './interfaces/strategy';
import { Product } from './product';

export class MegaCoverageStrategy implements Strategy {

    isSelected(kind: KindOfProduct) {
        return kind === KindOfProduct.MegaCoverage;
    }

    updatePrice(product: Product): Product {
        return product;
    }

}
