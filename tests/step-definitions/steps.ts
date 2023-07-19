import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../../tests/pageobjects/secure.page.js';
import { execFile } from 'child_process';
import reporter from "../../helper/reporter.js"
import constants from "../../data/constants.json" assert { type: "json" };
import fs from 'fs'
import apiHelper from '../../helper/apiHelper.js';
import { UserLoginCredentials } from '../../config/execution.configuration.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^I open SITA App for Upload file$/, async() => {

    await browser.maximizeWindow();
      //await browser.setWindowSize(811, 625)
      await browser.url("https://xadvpweb1.borders.devnet.sita.aero/api-pnr-portal/security/login")
      
      await expect(browser).toHaveUrl("https://xadvpweb1.borders.devnet.sita.aero/api-pnr-portal/security/login")
      await browser.$("#username").click()
      await browser.takeScreenshot();
      await browser.$("#username").setValue("PSXNV_JXRUM@coforge.com")
      await browser.takeScreenshot();
      await browser.$("#password").click()
      await browser.takeScreenshot();
      await browser.$("#password").click()
      await browser.$("#password").setValue("WRqda@12345#")
      await browser.$("//*[@id=\"login\"]/span[1]").click()
      await browser.$("aria/DATA SUBMISSION").click()
      const batchUploadLink = await $("aria/Quick/Batch upload")
      await browser.takeScreenshot();
    await batchUploadLink.waitForDisplayed({ timeout: 3000 })
      await batchUploadLink.click()

      const browse = $("//*[@id=\"main-content\"]/lib-batch-upload/div[2]/div/div/div[2]/div/div[1]/div[2]/div/span/label")

      await browse.waitForDisplayed({ timeout: 3000 })

      await browse.click()
      await browser.takeScreenshot();
 
      //const execFile = require('child_process').execFile;
      await browser.pause(1000)
      let runAutoItScript = function(pathToScript, scriptName) {
        console.info(`\n> Started execution of ${scriptName} ...`);
      
       execFile(`${pathToScript}/${scriptName}`, (error, stdout, stderr) => {
              if (error) {
                  throw error;
              } else {
                  // > do something with the script output <
                  console.info(`\n> Finished execution of ${scriptName}! | Output: ${stdout}`);
              }
          });
      }
      
      //runAutoItScript(`${__dirname}\\testdata`, 'Upload_FIle_Script.exe');

      runAutoItScript(`C:\\Users\\Ashvin.Mewara\\Documents\\WDIO_TypeScript_Cucumber\\testdata`, 'Upload_FIle_Script.exe');

        await browser.pause(2000)

       const fileUploadBtn = $('aria/UPLOAD FILE')

       fileUploadBtn.waitForDisplayed({ timeout: 3000 })
         
       await fileUploadBtn.click()
        
     await expect(browser).toHaveUrl("https://xadvpweb1.borders.devnet.sita.aero/api-pnr-portal/upload/batch")
      // await browser.$("aria/STARTING").doubleClick()

      await browser.pause(2000)

});

/**
 * Get list of users from reqres api
 * Sub-steps:
 * 1. Get payload data
 * 2. Make get call by using API helper
 * 3. Store results
 */
Given(/^Get list of (.*) from reqres.in$/, async function (endpointRef) {
    if (!endpointRef) throw Error(`Given endpoint ref: ${endpointRef} is not valid`)

    try {
        /** 1. Get payload data*/
        //reporter.addStep("E2E_TC001", "info", `Getting the payload data for endpoint: ${endpointRef}`)
        let endpoint = ""
        if (endpointRef.trim().toUpperCase() === "USERS") {
            endpoint = constants.REQRES.GET_USERS
        }
        if (!endpoint) throw Error(`Error getting endpoint:${endpoint} from the constants.json`)

        /**2. Make get call by using API helper */
        let testid = "E2E_TC001"
        let res
        await browser.call(async function () {
            // @ts-ignore
           // res = await apiHelper.GET(testid, browser.options.reqresBaseURL, endpoint, "", constants.REQRES.QUERY_PARAM)
        
            res = await apiHelper.GET(testid, UserLoginCredentials.qa.reqresBaseURL, endpoint, "", constants.REQRES.QUERY_PARAM)
       
        })
        // @ts-ignore
        if (res.status !== 200) chai.expect.fail(`Failed getting users from :${browser.options.reqresBaseURL}/${endpoint}`)
       // reporter.addStep("E2E_TC001", "debug", `API response received, data: ${JSON.stringify(res.body)}`)

        /** 3.Store results*/
        let data = JSON.stringify(res.body, undefined, 4)
        let filename = `${process.cwd()}/data/api-res/reqresAPIUsers.json`
        fs.writeFileSync(filename, data)
       // reporter.addStep("E2E_TC001", "info", `API response from ${endpoint} stored in json file`)
    } catch (err) {
        err.message = `${"E2E_TC001"}: Failed at getting API users from reqres, ${err.message}`
        throw err
    }
});

