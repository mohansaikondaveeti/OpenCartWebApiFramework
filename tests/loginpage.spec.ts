    import{test, expect} from "../src/fixtures/pagefixtures"
    import { LoginPage } from "../src/pages/LoginPage";
import { CsvHelper } from "../src/utils/CsvHelper";
import { ExcelHelper } from "../src/utils/ExcelHelper";
import { JsonHelper } from "../src/utils/JsonHelper";
   

    test.beforeEach(async ({ loginPage }) => {
   
    await loginPage.goToLoginPage();
   
});

    test("@smoke login page title test", async ({loginPage})=>{
      const pageTitle = await loginPage.getPageTitle();
    expect(pageTitle).toBe('Account Login');
    });

    test("forgot password link exists test", async ({loginPage})=>{
    expect(await loginPage.isForgotPasswordLinkExists()).toBeTruthy();
    });

    test("@smoke User able to Login", async({loginPage, homePage})=>{
        await loginPage.doLogin(process.env.APP_USERNAME!, process.env.PASSWORD!);
      expect.soft(await homePage.isLogoutLinkExists()).toBeTruthy();
      expect.soft(await homePage.getPageTitle()).toBe('My Account');
    });

    //DD_1. sequence mode -- only 1 test is running with test data one by one using testData from fixture

test('login to app using wrong credentials with Data driven test', async ({ loginPage, testData }) => {
    for (let row of testData) {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    }

    });
    
   
    //DD_2: without fixtures, parallel mode. read csv data directly and loop the test method row wise...

    let testData = CsvHelper.readCsv('src/data/loginData.csv');
    for (let row of testData) {
    test(`invalid login test with - ${row.username} - ${row.password}`, async ({ loginPage }) => {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();

    });

};

    //DD_3: without fixtures, parallel mode. read EXCEL data directly and loop the test method row wise...
    //Sheet name is optional if only one exists

    let testDataExcel = ExcelHelper.readExcel('src/data/OpenCartTestData.xlsx', 'login');
    for (let row of testDataExcel) {
    test(`invalid login test with Excel Data- ${row.username} - ${row.password}`, async ({ loginPage }) => {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();

    });
};


 //DD_4: without fixtures, parallel mode. read JSON data directly and loop the test method row wise...
        
    let testDataJSON = JsonHelper.readJson('src/data/loginData.json');
    for (let row of testDataJSON) {
    test(`invalid login test with JSON Data - ${row.username} - ${row.password}`, async ({ loginPage }) => {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();

    });
};


// Common Methods
test('comp logo exists on product page', async ({ basePage }) => {
    expect(await basePage.isLogoVisible()).toBeTruthy();
});

test('footers exist on product page', async ({ basePage }) => {
    expect(await basePage.getPageFootersCount()).toBe(16);
});




  