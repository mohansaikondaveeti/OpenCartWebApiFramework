import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{

// private Locators:

private readonly logoutLink: Locator;
private readonly headers: Locator;



// Constructor of the class and initialise the Locators
constructor(page:Page){
    super (page);
    this.logoutLink = page.getByRole('link',{name: 'Logout'});
    this.headers = page.getByRole('heading',{level: 2});
 
}

//public page actions (methods)/behaviour



async getHomePageTitle():Promise<string>{
    return await this.page.title();
}

async isLogoutLinkExists():Promise<boolean>{
    return await this.logoutLink.isVisible();
}

async getHomePageHeaders():Promise<String[]>{
   return await this.headers.allInnerTexts();
}

async doSearch(searchKey:string):Promise<void>{
    await this.searchBox.fill(searchKey);
    await this.searchIcon.click();
}

}