import { config as baseConfig } from "../wdio.conf"
export const config = Object.assign(baseConfig, {
    // All test env specific key val pairs
    environment: "TEST",
    URL: "https://www.saucedemo.com",
    testURL: "https://the-internet.herokuapp.com",
    reqresBaseURL: "https://reqres.in",
    nopeCommerceBaseURL: "https://admin-demo.nopcommerce.com",
    sqlConfig: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "dbconnectetion",
        server: "DESKTOP-P5LNVC8",
        options: {
          encrypt: false, // for azure
          trustServerCertificate: false, // change to true for local dev / self-signed certs
          trustedConnection: true
        },
      }
})