import { expect, test } from '@playwright/test';
import { CommonLinkVerify, EnvantoStreamitAppVerify, EnvantoStreamitTvAppVerify, EnvantoStreamitVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("Pricing Module", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-1198']").click();
    });

    test("Purchase Now - Streamit", async ({ page }) => {
        const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-2a3d809 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Purchase Now']");
        await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
    });

    test("Purchase Now - App", async ({ page }) => {
        const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-866c032 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Purchase Now']");
        await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
        await EnvantoStreamitAppVerify(page, EnvantoStreamitVerifyLocator);
    });

    test("Purchase Now - TV App", async ({ page }) => {
        const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-318185e elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Purchase Now']");
        await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
        await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
    });

    test("Buy Service - Create Account Check", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-615aaf3 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Purchase Now']");
        await LinkLocator.scrollIntoViewIfNeeded();

        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            LinkLocator.click()
        ]);
        
        const iqonicDesignSpanLocator = newPage.locator("//header/div[1]/h3[1]/span[1]");
        const verifytext = await iqonicDesignSpanLocator.textContent();
        expect(verifytext).toContain('Create Account');
    });

    test("Buy Service - Flutter App Link", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(@href,'https://service.iqonic.design/services/streamit-flutter-app-with-laravel-backend/')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://service.iqonic.design/services/streamit-flutter-app-with-laravel-backend/";
        await CommonLinkVerify(page, LinkLocator, expectedLink);
    });

    test("Buy Service - TV App Add-on Link", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(@href,'https://service.iqonic.design/services/streamit-tv-app-add-on-with-laravel-backend/')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://service.iqonic.design/services/streamit-tv-app-add-on-with-laravel-backend/";
        await CommonLinkVerify(page, LinkLocator, expectedLink);
    });
});