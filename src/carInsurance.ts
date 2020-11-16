import { Strategy } from './interfaces/strategy';
import { Product } from './product';
import { KindOfProduct } from './enums/types';
import { FullCoverageStrategy } from './fullCoverageStrategy';
import { MegaCoverageStrategy } from './megaCoverageStrategy';
import { SpecialFullCoverageStrategy } from './specialFullCoverageStrategy';
import { SuperSaleStrategy } from './superSaleStrategy';
import { MediumCoverageStrategy } from './mediumCoverageStrategy';
import { LowCoverageStrategy } from './lowCoverageStrategy';

export class CarInsurance {
    private strategies: Strategy[];

    constructor(private _products: Product[]) {
        this.strategies = [
            new FullCoverageStrategy,
            new MegaCoverageStrategy,
            new SpecialFullCoverageStrategy,
            new SuperSaleStrategy,
            new MediumCoverageStrategy,
            new LowCoverageStrategy
        ];
    }

    getUpdatePriceStrategy(kind: KindOfProduct): Strategy | undefined {
        return this.strategies.find(strategy => strategy.isSelected(kind));
    }

    updatePrice(): Product[] {
        for (let i = 0; i < this._products.length; i++) {
            const strategy = this.getUpdatePriceStrategy(this._products[i].name);
            if (strategy === undefined) {
                throw new Error('kind of product not available');
            }
            this._products[i] = strategy.updatePrice(this._products[i]);
        }

        return this._products;
    }
}

