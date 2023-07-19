import Page from '../pageobjects/page.js'


class loginPageElements extends Page
{
     get inputUsername () {

        return '#username';
    }

    public get inputPassword () {return '#password';
    }

    public get btnSubmit () { return 'button[type="submit"]';
    }

}
export default new loginPageElements();