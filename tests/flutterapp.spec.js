import { test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoStreamitAppVerify, UserAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test.describe("Flutter App", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-1195']").hover();
        await page.locator("//li[@id='menu-item-5485']").click();
    });

    test("Book a quick call", async ({ page }) => {
        const Locator = page.locator("//a[normalize-space()='Book a quick call.']");
        await BookcallVerify(page, Locator);
    });

    test("Buy Now", async ({ page }) => {
        const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-a4427da elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await EnvantoStreamitAppVerify(page, EnvantoStreamitVerifyLocator);
    });

    test("View Demo", async ({ page }) => {
        const adminpanelLocator = page.locator("//a[contains(text(),'View Demo')]");
        await UserAppPlaystore(page, adminpanelLocator);
    });

    test("Buy Now 2", async ({ page }) => {
        const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-a3a00c3 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
        await EnvantoStreamitAppVerify(page, EnvantoStreamitVerifyLocator);
    });

    test("View Demo 2", async ({ page }) => {
        const LinkLocator = page.locator("//a[normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await UserAppPlaystore(page, LinkLocator);
    });

    test("Book a quick call 2", async ({ page }) => {
        const Locator = page.locator("//span[contains(text(),'Not Sure Which Features Fit You?')]");
        await BookcallVerify(page, Locator);
    });

    test("View All Services", async ({ page }) => {
        const LinkLocator = page.locator("//a[normalize-space()='View all services']");
        await LinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://service.iqonic.design/product-category/streamit-laravel/";
        await CommonLinkVerify(page, LinkLocator, expectedLink);
    });
});