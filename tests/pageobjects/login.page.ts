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
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        if(username == "invalid")
        {
            await actionMethods.waitForDisplayed(loginPageElements.inputUsername, false)
            await actionMethods.setInputField('setValue', username, loginPageElements.inputUsername)
            await actionMethods.setInputField('setValue', password, loginPageElements.inputPassword)
        }
        else
        {           
            await(await $(loginPageElements.inputUsername).waitForDisplayed())
            await actionMethods.setInputField('setValue', UserLoginCredentials.qa.UserName, await (loginPageElements.inputUsername))
            await actionMethods.setInputField('setValue', UserLoginCredentials.qa.Password, await loginPageElements.inputPassword)            
        }
        await void actionMethods.clickElement('click', 'selector', await loginPageElements.btnSubmit)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('/');
    }
}

export default new LoginPage();
