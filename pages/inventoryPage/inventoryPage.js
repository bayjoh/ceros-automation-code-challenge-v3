import { $, $$, ExpectedConditions } from 'protractor';
import BasePage from '../basePage';
import {inventory} from './inventoryPageSelectors';

class InventoryPage extends BasePage {
    constructor() {
        super();
        this.inventoryHeader = $(inventory.titleHeader);
        this.inventoryProducts = $$(inventory.productList);
        this.cartItemCount = $(inventory.totalCartItem);
        this.addTocart = $$(inventory.addToCartButton);
        this.viewCart = $(inventory.viewCartButton);
        this.sortProductNameInDescOrder = $(inventory.sortNameDescOption);
        this.sortProductPriceInDescOrder = $(inventory.sortPriceDescOption);
        this.sortOption = $(inventory.sortDropDown);
    }

}
export default new InventoryPage();