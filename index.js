const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();
  await page.goto("https://status.okta.com/", {
    waitUntil: 'domcontentloaded'
  });

  let data = await page.evaluate(() => {
    const statusElement = document.querySelector("div.system__status_today_status");
    const statusText = statusElement.textContent.trim();
    return statusText;
  });

  console.log(data);
  await browser.close();
})();
