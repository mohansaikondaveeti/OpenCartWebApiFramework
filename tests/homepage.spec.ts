 import {test, expect} from '../src/fixtures/pagefixtures';

 

   test.beforeEach(async({loginPage})=>{
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.EMAIL!, process.env.PASSWORD!);
    
})

test('Home Page Title Test', async({homePage})=>{
    const HomePageTitle = await homePage.getPageTitle();
    expect(HomePageTitle).toBe('My Account'); 
})

test('Home Page Headers Test', async({homePage})=>{
   let allHeaders =await homePage.getHomePageHeaders();
   expect(allHeaders).toHaveLength(4);
   expect(allHeaders).toEqual(['My Account','My Orders','My Affiliate Account', 'Newsletter'])
})

test('Logout link exists or not', async({homePage})=>{
   expect(await homePage.isLogoutLinkExists()).toBeTruthy();
})

