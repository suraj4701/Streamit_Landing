import { expect, test } from '@playwright/test';
import { BookcallVerify, EnvantoStreamitAppVerify, UserAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("FlutterApp Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover()
    await page.locator("//li[@id='menu-item-5485']").click()
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("FlutterApp View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover()
    await page.locator("//li[@id='menu-item-5485']").click()
    const adminpanelLocator = page.locator("//a[contains(text(),'View Demo')]");
    await UserAppPlaystore(page, adminpanelLocator);
})

test("FlutterApp Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover()
    await page.locator("//li[@id='menu-item-5485']").click()
    const Locator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, Locator);
})

test("FlutterApp Buy Now 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover()
    await page.locator("//li[@id='menu-item-5485']").click()
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("FlutterApp View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover()
    await page.locator("//li[@id='menu-item-5485']").click()
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, LinkLocator);
})

test("FlutterApp View All Services", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover()
    await page.locator("//li[@id='menu-item-5485']").click()
    const LinkLocator = page.locator("//a[normalize-space()='View all services']");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/product-category/streamit-laravel/");
})