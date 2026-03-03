import { test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, EnvantoStreamitVerify } from './common';
const home_url = process.env.HOME_URL;

test("AdminPanel Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, Locator);
})

test("AdminPanel Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-bca15a9 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//a[normalize-space()='view Demo']");
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-1505858 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-0f4e216 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-e51fd60 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-c453d0a elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-7afa462 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-54f604a elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-47e04b5 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/app/setting/misc-setting')]");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 6", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-51f5167 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 6", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-2be453a elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 7", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-c3c5687 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 7", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-a974edc elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 8", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-fa0381d elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 8", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/app/banners')]");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 9", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-b9c44e4 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 9", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/app/customads')]");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 10", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-31701f7 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 10", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/app/vastads')]");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 11", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-8b0670f elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 11", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-416b80d elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 12", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-1a74fd0 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 12", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-b70143f elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 13", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-2650901 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 13", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/app/dashboard')]");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 14", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-08deaf6 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 14", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-aebdac5 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 15", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-447e890 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 15", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/app/media-library')]");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 16", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-a458316 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 16", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-5c056c1 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 17", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-235e46a elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 17", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-652bf85 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Buy Now 18", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-0bee28c elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("AdminPanel View 18", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-e2e1a21 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("AdminPanel Book a quick call 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-1196']").click();
    const Locator = page.locator("//span[contains(text(),'Not Sure Which Features Fit You?')]");
    await BookcallVerify(page, Locator);
})