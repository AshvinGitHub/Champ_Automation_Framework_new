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
        "URL" : "https://the-internet.herokuapp.com/login",
        "UserName" : "tomsmith",
        "reqresBaseURL": "https://reqres.in",
        "Password" : "SuperSecretPassword!"        
    },
    "Sit":
    {
        "UserName" : "",
        "Password" : ""  
    }
}