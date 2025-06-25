import { expect, test } from '@playwright/test';
import { EnvantoStreamitTvAppVerify, TvAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("StreamitTvApp Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Tv App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await TvAppPlaystore(page, adminpanelLocator);
})

test("StreamitTvApp Buy Now 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 6", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[5]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 7", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 8", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[7]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 9", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[8]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 10", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[9]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 11", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[10]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 12", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[10]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp BuyNow 13", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[12]/div[1]/div[3]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/streamit-tv-app-add-on-with-laravel-backend/");
})