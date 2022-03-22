import { $, $$, ExpectedConditions } from 'protractor';
import BasePage from '../basePage';
import {inventory} from './inventoryPageSelectors';

class InventoryPage extends BasePage {
    constructor() {
        super();
        this.inventoryHeader = $(inventory.titleHeader);
        this.inventoryProducts = $$(inventory.productList);
    }

}
export default new InventoryPage();