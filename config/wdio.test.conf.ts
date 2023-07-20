import { config as baseConfig } from "../wdio.conf.js"

export const config = Object.assign(baseConfig, {
    // All test env specific key val pairs
    
    environment: "TEST",
    URL: "https://login-uat.champ.aero/auth/v2/login/demouxr",
    testURL: "https://login-uat.champ.aero/auth/v2/login/demouxr",
    reqresBaseURL: "https://reqres.in",
    
})