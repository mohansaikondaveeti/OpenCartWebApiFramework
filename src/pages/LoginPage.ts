import { Locator, Page,  } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

// private Locators:
private readonly emailId: Locator;
private readonly password: Locator;
private readonly loginBtn: Locator;
private readonly forgottenPasswordLink: Locator;
// private readonly logo: Locator;
private readonly loginErrorMessage: Locator;

// Constructor of the class and initialise the Locators
constructor(page:Page){
    super (page);
    this.emailId = page.getByRole('textbox',{name: 'E-mail Address'});
    this.password = page.getByRole('textbox',{name: 'password'}); 
    this.loginBtn = page.getByRole('button',{name:'Login'}); 
    this.forgottenPasswordLink = page.getByRole('link', {name: 'Forgotten Password'}).first();
    // this.logo = page.getByAltText('naveenopencart');
    this.loginErrorMessage= page.locator('.alert.alert-danger.alert-dismissible');
}

//public page actions (methods)/behaviour

async goToLoginPage(): Promise<void>{
    await this.page.goto('opencart/index.php?route=account/login');
    
}

async getLoginPageTitle():Promise<string>{
    return await this.page.title();
}

async isForgotPasswordLinkExists():Promise<Boolean>{
    return await this.forgottenPasswordLink.isVisible();
}

async doLogin(username:string, password:string):Promise<void>{
    
    await this.emailId.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
   
}

async isInvalidLoginErrorDisplayed(): Promise<boolean> {
    return await this.loginErrorMessage.isVisible();
}



}