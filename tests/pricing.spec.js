import { expect, test } from '@playwright/test';
import { EnvantoStreamitAppVerify, EnvantoStreamitTvAppVerify, EnvantoStreamitVerify } from './common';
const home_url = process.env.HOME_URL;

test("Pricing Purchase Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1198']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Pricing Purchase Now 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1198']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("Pricing Purchase Now 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1198']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("Pricing Buy Service", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1198']").click();
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//header/div[1]/h3[1]/span[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Create Account');
})

test("Pricing Buy Service 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1198']").click();
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/streamit-flutter-app-with-laravel-backend/");
})

test("Pricing Buy Service 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1198']").click();
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/streamit-tv-app-add-on-with-laravel-backend/");
})