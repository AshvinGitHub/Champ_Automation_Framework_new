/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

import { UserLoginCredentials } from "../../config/execution.configuration.js"
// import dotenv from 'dotenv'
// dotenv.config()

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        console.log(`Url from process. env-------- ${process.env.QA.trim()}`)

        console.log(`use name from credentials file - ${UserLoginCredentials.qa.UserName} `)

        // @ts-ignore
        return browser.url(UserLoginCredentials.qa.URL) 
    }
        /**All reusable web functions */
        async navigateTo(path: string) {
            await browser.url(path)
        }
    }
