import { KindOfProduct } from "../enums/types";
import { Product } from "../product";

export interface Strategy {
    isSelected(kind: KindOfProduct) : boolean;
    updatePrice(product: Product) : Product;
}
