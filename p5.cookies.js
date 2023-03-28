    class CookieManager {
    
    constructor(bata){
        this.bataMode = bata
        this.imports = {
            bata: {
                googleTools: { 
                    anelitics: false,
                    ads: false,
                    defalt: false
                },
            },
            debug:{ 
                bataTools: {
                    cookieListaner: false
                },
                defalt: true
            }
        }
    }

    acceptCookieConsent(){
        console.warn("make sure you have asked for consent before using cookies")
        deleteValue('user_cookie_consent');
        setValue('user_cookie_consent', 1, 30);
        document.getElementById("cookieNotice").style.display = "none";
    }

    checkIfCookiesEnabled(mode){
        if(mode == "log"){
            if(navigator.cookieEnabled == false){
                console.warn("cookies are not enabled");
            }else{
                console.log("cookies are enabled");
            }
        }else if(mode == "alert"){
            if(navigator.cookieEnabled == false){
                alert("cookies are not enabled");
            }else{
                alert("cookies are enabled");
            }
        }else{
            if(navigator.cookieEnabled == false){
                console.warn("cookies are not enabled");
                alert("cookies are not enabled");
            }else{
                console.warn("cookies are enabled");
                alert("cookies are enabled");
            }
        }
    }

    askForCookieConsent(){
        if(navigator.cookieEnabled == false){
            console.warn("cookies are not enabled");
            alert("please enable cookies");
        }
    }

    createValue(name, value, daysToExpier){
        if(navigator.cookieEnabled == false){
            console.warn("cookies are not enabled");
            alert("please enable cookies");
        }else{
            let daysToLive
            if(daysToExpier == undefined){
                daysToLive = Infinity;
            }else{
               daysToLive = daysToExpier;
            }   
            const date = new Date();
            date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
            let expires = "expires=" + date.toUTCString();    
            document.cookie = `${name}=${value}; ${expires}; path=/`;
        }
    }

    setValue(name, value, daysToExpier){
        if(navigator.cookieEnabled == false){
            console.warn("cookies are not enabled");
            alert("please enable cookies");
        }else{
            let daysToLive
            if(daysToExpier == undefined){
                daysToLive = Infinity;
            }else{
               daysToLive = daysToExpier;
            }   
            const date = new Date();
            date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
            let expires = "expires=" + date.toUTCString();    
            document.cookie = `${name}=${value}; ${expires}; path=/`;
        }
    }

    deleteValue(name){
        if(navigator.cookieEnabled == false){
            console.warn("cookies are not enabled");
            alert("please enable cookies");
        }else{
            this.setValue(name, null);
        }
    }

    getValue(name, type){
        if(navigator.cookieEnabled == false){
                console.warn("cookies are not enabled");
                alert("please enable cookies");
            }else{
                const cDecoded = decodeURIComponent(document.cookie);
                const cArray = cDecoded.split("; ");
                let result = null;
                    
                cArray.forEach(element => {
                    if(element.indexOf(name) == 0){
                        result = element.substring(name.length + 1);
                    }
                })
                if(type == "int" || type == "num" || type == "Int" || type == "Num" || type == "intiger" || type == "number" || type == "Intiger" || type == "Number")
                {
                    return parseInt(result);
                }else if(type == "bool" || type == "boolean" || type == "Bool" || type == "Boolean" ){
                    if(result == "true"){
                        return true
                    }else if(result == false){
                        return false
                    }else{
                        console.throw(name + " is not type boolean")
                    }
                }else{
                    return result
                }
        }
    }

    setAllValues(value){
        if(navigator.cookieEnabled == false){
            console.warn("cookies are not enabled");
            alert("please enable cookies");
        }else{
            var name = this.getAllValues()
            this.setValue(name, value);
        }
    }

    getAllValues(){
        if(navigator.cookieEnabled == false){
                console.warn("cookies are not enabled");
                alert("please enable cookies");
            }else{
                let allCookies = document.cookie;
                return allCookies;
        }
    }

    pushAllValues(){
        return push(this.getAllValues())
    }

    pushValue(name, type){
        if(type != undefined){
            return push(this.getValue(name, type))
        }else{
            return push(this.getValue(name))
        }
    }

    upadteValueExpiration(name, daysToExpier){
        let value = this.getValue(name)
        let daysToLive = daysToExpier;
        const date = new Date();
        date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();    
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    forceExpire(name){
        console.warn("the cookie '"+name+"' has expire")
        let value = this.getValue(name)
        let daysToLive = 0.00000000000000001;
        const date = new Date();
        date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();    
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    changeExpire(name , daysToExpier){
        console.warn("the cookie '"+name+"' has expire")
        let value = this.getValue(name)
        let daysToLive = daysToExpier;
        const date = new Date();
        date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();    
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    deleteAllValues(){
        if(navigator.cookieEnabled == false){
            console.warn("cookies are not enabled");
            alert("please enable cookies");
        }else{
            this.setAllValues(null);
        }
    }

    //imports
    bata = {
        google: {
            anelitics: {
                conectGoogleAnelictics(MEASUREMENT_ID){
                    if(this.imports.bata.googleTools.anelitics = true){
                    console.warn("make sure your following google anelictics polecys: https://policies.google.com/technologies/cookies?hl=en-US")
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', toString(MEASUREMENT_ID));
                    }else{
                        console.warn("please turn on bata mode")
                        alert("please turn on bata mode")
                    }
                }
            },

            ads: {
                
            }
        },
    }

    debug = {
        cookieListaner: {
            //coming soon...
        },
        
        logAllValues(logType){
            if(logType == "warn" || logType == "warning"){
                console.warn(this.getAllValues())
            }else{
                console.log(this.getAllValues())
            }
        },

        logValue(name, logType){
            if(logType == "warn" || logType == "warning"){
                console.warn(this.getValue(name))
            }else{
                console.log(this.getValue(name))
            }
        }
    }
}

//import tools so that new devs dont get overwhelmed and creates more contributor support. 
var cookieTools = {
    import(name, version)
    {
        if(name == "bata_elements" && version == "*"){
            cookieManager.imports.bata.googleTools.ads = true;
            cookieManager.imports.bata.googleTools.anelitics = true;
            cookieManager.imports.bata.googleTools.defalt = true;
            console.info("imported all bata elements")
        }else if(name == "default_elements" && version == "bata"){
            cookieManager.imports.bata.googleTools.ads = true;
            cookieManager.imports.bata.googleTools.anelitics = true;
            cookieManager.imports.bata.googleTools.defalt = true;
            console.info("imported all bata elements")
        }else if(name == "bata_debugger" && version == "*"){
            cookieManager.imports.debug.bataTools = true;
            console.warn("debuging bata tools is a work in progress")
        }else if(name == "debugger" && version == "bata"){
            cookieManager.imports.debug.bataTools = true;
            console.warn("debuging bata tools is a work in progress")
        }else if(name == "default_elements" && version == "debug"){
            cookieManager.imports.debug.bataTools = true;
        }else if(name == "all_elements" && version == "*"){
            cookieManager.imports.bata.googleTools.ads = true;
            cookieManager.imports.bata.googleTools.anelitics = true;
            cookieManager.imports.bata.googleTools.defalt = true;
            cookieManager.imports.debug.bataTools = true;
            console.info("all elements imported")
        }else if(name == "all_bata" && version == "*"){
            cookieManager.imports.bata.googleTools.ads = true;
            cookieManager.imports.bata.googleTools.anelitics = true;
            cookieManager.imports.bata.googleTools.defalt = true;
            cookieManager.imports.debug.bataTools = true;
            console.info("all bata elements imported")
        }else if(name == "all_google_elements" && version == "*"){
            cookieManager.imports.bata.googleTools.ads = true;
            cookieManager.imports.bata.googleTools.anelitics = true;
            cookieManager.imports.bata.googleTools.defalt = true;
            console.info("all google elements imported")
        }else{
            throw("error: there is no cookieTool called '"+name+"' version: "+version+". make sure the spelling is correct and you have the right version. You can get the latet version of a cookieTool by using '*'. to find the name of a cookieTool use the 'cookieToolsHelp()' function.")
        }
    },

    cookieToolsHelp(){
        console.log("bataToos: name = bata_elements, version = *            ")
        console.log("bataToos: name = default_elements, version = bata       ")
        console.log("bataDebuger: name = bata_debuger, version = *          ")
        console.log("bataToos: name = debuger, version = bata               ")
        console.log("bataToos: name = all_elements, version = *           ")
    }
}


const cookieManager = new CookieManager();
//console.log("cookies = " + navigator.cookieEnabled);

/*
    //-----------------------created by Lawtro----------------------\\
    \\-------------------published by LawtroStudios-----------------//

Copyright:

                    Protected by Australian Copyright Laws
                    Copyright ⓒ Lawton "Lawtro" Kelly 2023

    The right of Lawton Kelly to be identified as the author of this work has been asserted by him in accordance with the Copyright Amendment (Moral Rights) Act 2000.
    for code library use only

    Any code contributed to this project is the right of the contributor unless specified

    Contributors:
    Lawton "Lawtro" Kelly
    --add your name here when contributing--

    for more info go to:
    https://www.alrc.gov.au/publication/genes-and-ingenuity-gene-patenting-and-human-health-alrc-report-99/28-copyright-and-databases/copyright-law/             
*/
