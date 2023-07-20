export const executionConfig = {
"maxParallelInstances": 1,
"domain": "qa",
"browser": "chrome",
"platform": "desktop",
"mobileDeviceName": "",
"tagExpression": "",
"AppDomain": "",
"Language": "",
"dataSource" : "JSON",
"screenshot": "yes"

}
export const directoryPath = {

    "TestDataPath": ""
}

export const UserLoginCredentials ={
    "qa": {
        "URL" : "https://login-uat.champ.aero/auth/v2/login/demouxr",
        "UserName" : "guest1",        
        "Password" : "guest1674821",  
        "Sita_Url" : "https://xadvpweb1.borders.devnet.sita.aero/api-pnr-portal/security/login",
        "Sita_UName" : "PSXNV_JXRUM@coforge.com",
        "Sita_Pwd" : "WRqda@12345#",
        "Champ_UAT_Url" : "https://login-uat.champ.aero/auth/v2/login/demouxr",
        "Champ_UAT_ID" : "guest1",
        "Champ_UAT_Pswd" : "guest1674821",
        "reqresBaseURL": "https://reqres.in",
        "Sita_Upload_Url": "https://xadvpweb1.borders.devnet.sita.aero/api-pnr-portal/upload/batch"
    },
    "Sit":
    {
        "UserName" : "",
        "Password" : ""  
    }
}