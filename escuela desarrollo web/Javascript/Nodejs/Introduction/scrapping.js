const log = console.log;
import puppeteer from 'puppeteer';
(async () =>{
  log('Open browser');
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');
  var title1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    log(h1.innerHTML);
    return h1.innerHTML;
  });
  log(title1);
  browser.close();
  log('Close browser');
})();