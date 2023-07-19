import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';
import loginPageElements from '../pageElements/loginPageElements.js'
// import { executionConfig } from "../../config/execution.configuration.js"
import { UserLoginCredentials } from "../../config/execution.configuration.js"
// import { config } from "../../wdio.conf.js"
import * as actionMethods from '../../export/actionsMethods.js'
import * as checkMethods from '../../export/checksMethods.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    // public get inputUsername () {
    //     return $('#username');
    // }

    // public get inputPassword () {
    //     return $('#password');
    // }

    // public get btnSubmit () {
    //     return $('button[type="submit"]');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        if(username == "foobar")
        {
            // await(await $(loginPageElements.inputUsername).waitForDisplayed())
            await actionMethods.waitForDisplayed(loginPageElements.inputUsername, false)
            await actionMethods.setInputField('setValue', username, loginPageElements.inputUsername)
            await actionMethods.setInputField('setValue', password, loginPageElements.inputPassword)
            
            // await loginPageElements.inputUsername.setValue(username);
            // await loginPageElements.inputPassword.setValue(password);   
        }
        else
        {
            await(await $(loginPageElements.inputUsername).waitForDisplayed())
        //   await loginPageElements.inputUsername.setValue(UserLoginCredentials.qa.UserName);
        //   await loginPageElements.inputPassword.setValue(UserLoginCredentials.qa.Password);

          await actionMethods.setInputField('setValue', UserLoginCredentials.qa.UserName, await (loginPageElements.inputUsername))
            await actionMethods.setInputField('setValue', UserLoginCredentials.qa.Password, await loginPageElements.inputPassword)
            
        }
        await void actionMethods.clickElement('click', 'selector', await loginPageElements.btnSubmit)
           
        //  await loginPageElements.btnSubmit.click();
    // await this.inputUsername.setValue(username);
    // await this.inputPassword.setValue(password);
    // await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('/');
       
       // return super.open(`${UserLoginCredentials.qa.URL}`);
    }
}

export default new LoginPage();
