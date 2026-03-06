import { expect, test } from '@playwright/test';
import { CommonLinkVerify, EnvantoStreamitAppVerify, EnvantoStreamitTvAppVerify, EnvantoStreamitVerify } from './common';
const home_url = process.env.HOME_URL;

test("Pricing Purchase Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1198']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-2a3d809 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Purchase Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Pricing Purchase Now 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1198']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-866c032 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Purchase Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("Pricing Purchase Now 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1198']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-318185e elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Purchase Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("Pricing Buy Service", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1198']").click();
    const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-615aaf3 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Purchase Now']");
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
    const LinkLocator = page.locator("//a[contains(@href,'https://service.iqonic.design/services/streamit-flutter-app-with-laravel-backend/')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://service.iqonic.design/services/streamit-flutter-app-with-laravel-backend/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Pricing Buy Service 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1198']").click();
    const LinkLocator = page.locator("//a[contains(@href,'https://service.iqonic.design/services/streamit-tv-app-add-on-with-laravel-backend/')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://service.iqonic.design/services/streamit-tv-app-add-on-with-laravel-backend/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})