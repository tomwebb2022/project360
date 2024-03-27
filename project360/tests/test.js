import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:5173/");
  // Add your tests here
  await browser.close();
  console.log("Test complete");
})();
