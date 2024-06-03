(async () => {
    var newpwd = prompt("Nhập mật khẩu mới:"),
    doc = new DOMParser().parseFromString(await (await fetch("https://netchuyenvn.com/Secure/UpdatePassword.aspx", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:125.0) Gecko/20100101 Firefox/125.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "cross-site",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "referrer": "https://accounts.google.com/",
        "method": "GET",
        "mode": "cors"
    })).text(), 'text/html');
    
    var getVal = (id) => doc.getElementById(id).value;
  
    var viewstate = getVal('__VIEWSTATE');
    var viewstate1 = getVal('__VIEWSTATE1');
    var viewstategenerator = getVal('__VIEWSTATEGENERATOR');
    var eventvalidation = getVal('__EVENTVALIDATION');
  
    var resp = new DOMParser().parseFromString(await (await fetch("https://netchuyenvn.com/Secure/UpdatePassword.aspx", {
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "body": "__EVENTTARGET=&__EVENTARGUMENT=&__VIEWSTATEFIELDCOUNT=2&__VIEWSTATE=" + encodeURIComponent(viewstate) + "&__VIEWSTATE1=" + encodeURIComponent(viewstate1) + "&__VIEWSTATEGENERATOR=" + encodeURIComponent(viewstategenerator) + "&__EVENTVALIDATION=" + encodeURIComponent(eventvalidation) + "&ctl00%24mainContent%24txtNewPassword=" + encodeURIComponent(newpwd) + "&ctl00%24mainContent%24btnChangePassword=C%E1%BA%ADp+nh%E1%BA%ADt",
        "method": "POST",
    })).text(), "text/html");
    
    console.log(resp);
    var isfailure = resp.getElementById("ctl00_mainContent_FailureText");
    if (isfailure){
        alert(isfailure.innerText);
    }else{
        alert("Đặt mật khẩu thành công! Hãy reload để tiếp tục");
    }
})();
