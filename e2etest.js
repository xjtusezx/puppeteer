const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false,//不使用无头chrome模式
      executablePath: 'chromedriver.exe',//path to your chrome
  });
  const page = await browser.newPage();
  await page.goto('https://baidu.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();