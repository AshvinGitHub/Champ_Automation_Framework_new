/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

import { UserLoginCredentials } from "../../config/execution.configuration.js"

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        //return browser.url(`https://the-internet.herokuapp.com/${path}`)
        console.log(`Url from process. env-------- ${process.env.QA.trim()}`)
        console.log(`path from method-------- ${path}`)
        console.log(`use name - ${UserLoginCredentials.qa.UserName} `)
        // @ts-ignore
        console.log(`URL from Test Config file  - ${browser.options.url}`)
          // @ts-ignore
        console.log(`Test URL from Test Config file  - ${browser.options.testURL}`)

        // console.log(`directory of autoit file  - ${__dirname}\\testdata`)

        // @ts-ignore
        return browser.url(UserLoginCredentials.qa.URL)
        

        // return browser.url(`${process.env.QA.trim()}/${path}`)
        // return browser.url(`${url}}`)
        //return browser.url(`${config.baseUrl}`)
        //return browser.url(config.baseUrl)        
    }
        /**All reusable web functions */
        async navigateTo(path: string) {
            await browser.url(path)
            // await browser.maximizeWindow()
        }
}
