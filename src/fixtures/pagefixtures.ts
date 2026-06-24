import{test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CsvHelper } from '../utils/CsvHelper';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductInfoPage } from '../pages/ProductInfoPage';
import{BasePage} from '../pages/BasePage';

type pageFixtures ={
    loginPage:LoginPage,
    homePage:HomePage,
    searchResultsPage:SearchResultsPage,
    productInfoPage:ProductInfoPage,
    basePage:BasePage,

    testData: Record<string, string>[];
}

export let test = baseTest.extend<pageFixtures>({

    
    basePage: async ({ page }, use) => {
        let basePage = new BasePage(page);
        await use(basePage);
    },


    loginPage: async ({page}, use)=>{
    let loginPage = new LoginPage(page);
    await use(loginPage);
},

    homePage: async ({page}, use)=>{
        let homePage = new HomePage(page);
          await  use(homePage);
        
    },
    
   
    productInfoPage: async ({page}, use)=>{
    let productInfoPage = new ProductInfoPage(page);
    await use(productInfoPage);
},

searchResultsPage: async ({ page }, use) => {
  await use(new SearchResultsPage(page));
},

testData: async({}, use)=>{
let testData =  CsvHelper.readCsv('src/data/loginData.csv');
await use(testData);
}

});

export{expect} from '@playwright/test'