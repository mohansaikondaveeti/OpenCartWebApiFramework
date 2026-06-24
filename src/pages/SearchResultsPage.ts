import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultsPage extends BasePage{

// private Locators:
private readonly searchResults: Locator;


constructor(page:Page){
    super (page);
    this.searchResults = page.locator('div.product-layout');

 };

 //action
 async getProductResultsCount(){
 return await this.searchResults.count();
 }

async selectTheProduct(productName:string){
    //writing Dynamic Locator
    return this.page.getByRole('link', {name: productName, exact:true}).first().click();
 }

}