var dataTargetPath 			= "/crawlerdata/";
var stopConsole 			= false;
var puppetPage				= "";

const puppeteer_original    = require('puppeteer');
const puppeteer             = require('puppeteer-extra');
const http 					= require('http');
const https 				= require('https')
const fs 					= require('fs')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())


// wait function
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


// fake useragent
function setPageUseragent(browserpage)
{
	  var RandomINT = Math.floor(Math.random() * 61);
	  var RandomINT = 61;
	if (RandomINT==0) {browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4182.0 Safari/537.36");}
	if (RandomINT==1) {browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36");}
	if (RandomINT==2) {browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36");}
	if (RandomINT==3) {browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36");}
	if (RandomINT==4) {browserpage.setUserAgent("Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko");}
	if (RandomINT==5) {browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134");}
	if (RandomINT==6) {browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko");}
	if (RandomINT==7) {browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763");}
	if (RandomINT==8) {browserpage.setUserAgent("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0");}
	if (RandomINT==9) {browserpage.setUserAgent("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1");}
	if (RandomINT==10){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36");}
	if (RandomINT==11){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36");}
	if (RandomINT==12){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:18.0) Gecko/20100101 Firefox/18.0");}
	if (RandomINT==13){browserpage.setUserAgent("Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)");}
	if (RandomINT==14){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36");}
	if (RandomINT==15){browserpage.setUserAgent("Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1; 125LA; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)");}
	if (RandomINT==16){browserpage.setUserAgent("Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)");}
	if (RandomINT==17){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362");}
	if (RandomINT==18){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko");}
	if (RandomINT==19){browserpage.setUserAgent("Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)");}
	if (RandomINT==20){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36");}
	if (RandomINT==21){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.83 Safari/537.1");}
	if (RandomINT==22){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36");}
	if (RandomINT==23){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393");}
	if (RandomINT==24){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36");}
	if (RandomINT==25){browserpage.setUserAgent("Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)");}
	if (RandomINT==26){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 Edg/87.0.664.75");}
	if (RandomINT==27){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18363");}
	if (RandomINT==28){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36");}
	if (RandomINT==29){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36");}
	if (RandomINT==30){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36");}
	if (RandomINT==31){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36");}
	if (RandomINT==32){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 5.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36");}
	if (RandomINT==33){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36");}
	if (RandomINT==34){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36");}
	if (RandomINT==35){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36");}
	if (RandomINT==36){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36");}
	if (RandomINT==37){browserpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063");}
    if (RandomINT==38){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15");}
    if (RandomINT==39){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-en) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4");}
    if (RandomINT==40){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8");}
    if (RandomINT==41){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.10 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.10");}
    if (RandomINT==42){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/E7FBAF");}
    if (RandomINT==43){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0");}
    if (RandomINT==44){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.8 (KHTML, like Gecko)");}
    if (RandomINT==45){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.7 (KHTML, like Gecko) Version/9.1.2 Safari/601.7.7");}
    if (RandomINT==46){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_4; de-de) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.2 Safari/525.20.1");}
    if (RandomINT==47){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko)");}
    if (RandomINT==48){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/601.7.8 (KHTML, like Gecko) Version/9.1.3 Safari/537.86.7");}
    if (RandomINT==49){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.78.2 (KHTML, like Gecko) Version/6.1.6 Safari/537.78.2");}
    if (RandomINT==50){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:16.0) Gecko/20100101 Firefox/16.0");}
    if (RandomINT==51){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/601.4.4 (KHTML, like Gecko) Version/9.0.3 Safari/601.4.4");}
    if (RandomINT==52){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.5.17 (KHTML, like Gecko) Version/8.0.5 Safari/600.5.17");}
    if (RandomINT==53){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36");}
    if (RandomINT==54){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0");}
    if (RandomINT==55){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9");}
    if (RandomINT==56){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_5_8) AppleWebKit/534.50.2 (KHTML, like Gecko) Version/5.0.6 Safari/533.22.3");}
    if (RandomINT==57){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:48.0) Gecko/20100101 Firefox/48.0");}
    if (RandomINT==58){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/601.5.17 (KHTML, like Gecko) Version/9.1 Safari/601.5.17");}
    if (RandomINT==59){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/6.2.8 Safari/537.85.17");}
    if (RandomINT==60){browserpage.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7");}
    if (RandomINT==61){browserpage.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36");}
    if (RandomINT==61){browserpage.setUserAgent("Mozilla/5.0 (X11; Ubuntu; Linux aarch64; rv:87.0) Gecko/20100101 Firefox/87.0");}
	return browserpage;
}


// something is wrong... restart
function myMethodCall()
{
	console.log('PAGE_LOADER_FAILED');	
	URLrequest();
}


// main loop function
// process.argv[2] = example "PI4"
// process.argv[3] = command what to do: html | alexa | isp | google
// the url return a json-object encoded by base64
// example: eyJ0eXBlIjoxLCJ1cmwiOiJodHRwOi8vd3d3LmFnb3JhLWxhdXNpdHouZGUiLCJjcmF3bHF1ZXVlX2lkIjoiNTg3NDM3ODYyNzE0NzAzNzM1OCIsImhvc3RfaWQiOiIyMDU3OTg3OTA2OTc3NTg3MjMifQ==
function URLrequest() {
	console.log("url request")
	try{

		https.get('https://temp-mail.org/en/view/61436326f4b1f00221835df1', (resp) => {
		   const { statusCode } = resp;
		   console.log(statusCode, "hi")
		   let data = '';
   
	   
		   resp.on('data', (chunk) => 
		   {
			//    console.log(chunk)
			   data += chunk;
		   });
   
	   
		   resp.on('end', () => {
			//    console.log("end", data)
			//    decodedata = decodeBase64(data);
   			   decodedata = Buffer.from(data, 'base64')

			   doAction({type: 3, url: "https://freelancer.com", crawlqueue_id: 1245, keyword: 'abcd'});
		   });
   
	   })
	}catch(e){
		console.log("error", e)
	}
}


async function doAction(commandData)
{  
	if (puppetPage)
	{
		// problems with command "isp" - https://ipinfo.io/ is detecting crawler even with proxy :-(
		// maybe dete3cttion by cookies ??
		//const client=await puppetPage.target().createCDPSession();
		//await client.send('Network.clearBrowserCookies');
		//await client.send('Network.clearBrowserCache');


		try {
		
			//  set random useragent
			puppetPage = setPageUseragent(puppetPage);			
				
		    
		    // HTML CRAWLER
		    if (commandData.type==1)
		    {
				await puppetPage.goto(commandData.url, {waitUntil: 'networkidle2'}, 4000);
			    wait(500);
			    await puppetPage.screenshot({ path: dataTargetPath+commandData.crawlqueue_id+'.png' });
			    wait(1000);
			}
			
			// GOOGLE SERP
		    if (commandData.type==2)
		    {
				await puppetPage.click('[name="q"]');
				await puppetPage.keyboard.down('Control');
				await puppetPage.keyboard.press('A');
				await puppetPage.keyboard.up('Control');
				await puppetPage.keyboard.press('Backspace');
		        await puppetPage.keyboard.type(commandData.keyword);
		        
				///////////////////////////////////////////////
				// why did he use promise.all? he can use one by one
				// and he didn't settimeout.

				await puppetPage.keyboard.press("Enter"),
				await puppetPage.waitForNavigation({ waitUntil: 'networkidle0' })  
				wait(1250);
			}
			
			// ALEXA
		    if (commandData.type==3)
		    {
			    await puppetPage.goto2(commandData.url, {waitUntil: 'networkidle0'}, 100);
				console.log('hi!')
			    wait(1250);
		    }
			
			// ISP
		    if (commandData.type==4)
		    {
				await puppetPage.goto(commandData.url, {waitUntil: 'networkidle0'}, 4000);
		    }
			
			
			wait(500);
			data = await puppetPage.evaluate(() => document.querySelector('html').outerHTML);
			wait(250);

			
			
    		// CRAWLER
		    if (commandData.type==1)
		    {
	  			const output = fs.writeFileSync(dataTargetPath+'html_'+commandData.host_id+'_'+commandData.crawlqueue_id+'.txt', data);
			}
			
    		// GOOGLE KEYWORD
		    if (commandData.type==2)
		    {
	  			const output = fs.writeFileSync(dataTargetPath+'google_'+commandData.keyword_id+'.txt', data);
			}
			
    		// ALEXA    
		    if (commandData.type==3)
		    {
	  			const output = fs.writeFileSync(dataTargetPath+'alexa_'+commandData.host_id+'.txt', data);
			}
			
    		// ISP
		    if (commandData.type==4)
		    {
	  			const output = fs.writeFileSync(dataTargetPath+'isp_'+commandData.host_id+'.txt', data);
			}
			
			// restart
			URLrequest();
		
		} catch (err) {
		  console.error(err);
		  console.log('request again')
	      URLrequest(); 
		}
	}
}


	
// base64-decoder function
decodeBase64 = function(s) {
    var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=s.length;
    var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(i=0;i<64;i++){e[A.charAt(i)]=i;}
    for(x=0;x<L;x++){
        c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
        while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
    }
    return r;
};


	const minimal_args = [
	  '--disable-speech-api',
	  '--mute-audio',
	  '--no-default-browser-check',
	  '--no-sandbox',
	  '--no-zygote',
	  '--no-pings',
	  '--disable-sync',
	  '--disable-notifications',
	  '--disable-popup-blocking',
	  '--disable-component-update',
	  '--disable-default-apps',
	  '--disable-domain-reliability',
	  '--disable-client-side-phishing-detection',
	  '--disable-breakpad',
	  '--disable-ipc-flooding-protection',
	  '--no-first-run',
	  '--disable-features=AudioServiceOutOfProcess',
	  '--disable-infobars',
	  '--window-position=0,0',
	  '--ignore-certifcate-errors', 
	  '--ignore-certifcate-errors-spki-list',
	  '--disable-setuid-sandbox',
	  '--disable-accelerated-2d-canvas',
	  '--disable-gpu',
	  '--window-size=1920,1160',
	  '--hide-scrollbars',
	  '--disable-background-networking'
	];


// scraping ipinfo or alexa? use proxy
if (process.argv[3]=='isp' || process.argv[3]=='alexa')
{
    minimal_args.push('--proxy-server=http://p.webshare.io:80');
}



(async () => {
  const browser = await puppeteer.launch({
  	  	ignoreHTTPSErrors: true,
  	  	headless: false,
  	  	args: minimal_args,
  	  	ignoreDefaultArgs: ["--enable-automation"]
  });
  const page = await browser.newPage();
  
  // scraping ipinfo or alexa? use proxy
  if (process.argv[3]=='isp' || process.argv[3]=='alexa')
  {
	  await page.authenticate({
	        username: 'webshare_username',
	        password: 'webshare_password'
	      });   
  }
  
  const blocked_domains = [
  'googlesyndication.com',
  'adservice.google.com',
  ];
  

  await page.setViewport({
          width: 1920,
          height: 1160,
          deviceScaleFactor: 1,
        });
        
  



try {
	// set general timeout
	await page.setDefaultNavigationTimeout(60000);


	await page.setRequestInterception(true);
	page.on('request', request => {
	  const url = request.url()
	  if (blocked_domains.some(domain => url.includes(domain))) {
	    request.abort();
	  } else {
	    request.continue();
	  }
	});	
	
	setPageUseragent(page);
	
	// initial start - open google and wait to manual accept consent-dialogue
	await page.goto("https://www.google.de", {waitUntil: 'networkidle2'});			
	wait(100);		
	puppetPage = page;

	puppetPage.goto2 = ( url, options, timeout ) => {
		return new Promise((resolve, reject) => {
			page.goto( url, options ).then( resolve ).catch(e => reject(e))
			setTimeout( () => reject(`TimeoutError: Navigation timeout of ${timeout} ms exceeded`), timeout)
		})
	}

	URLrequest();	

} catch (e) {
	if (!stopConsole)
	{
    	console.log('DOWNLOAD_ERROR');
	}
}




  
  //await browser.close();
})();



