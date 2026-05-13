const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const file = 'file://' + path.resolve(__dirname, 'instagram-post.html');
  await page.goto(file, { waitUntil: 'networkidle' });
  // Let web fonts settle
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  // Screenshot just the .post element
  const el = await page.$('.post');
  await el.screenshot({ path: 'instagram-post.png', omitBackground: false });

  await browser.close();
  console.log('wrote instagram-post.png');
})();
