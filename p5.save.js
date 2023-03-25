    class SaveManager {
    
    constructor(){

    }

    acceptCookieConsent(){
        console.warn("make sure you have asked for consent before using cookies")
        deleteCookie('user_cookie_consent');
        setCookie('user_cookie_consent', 1, 30);
        document.getElementById("cookieNotice").style.display = "none";
    }

    askForCookieConsent(){
        
    }

    setValue(name, value){
        if(navigator.cookieEnabled == false){
            console.warn("cookies are not enabled");
            alert("please enable cookies");
        }else{
            const daysToLive = 9999999;
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
                }else{
                    return result
                }
        }
    }

    getAllValues(name){
        if(navigator.cookieEnabled == false){
                console.warn("cookies are not enabled");
                alert("please enable cookies");
            }else{
                let allCookies = document.cookie;
                return allCookies;
        }
    }
}

const cookieManager = new SaveManager();
//console.log("cookies = " + navigator.cookieEnabled);
