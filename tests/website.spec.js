import { test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoStreamitVerify, UserWebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("Website Module", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-1195']").hover();
        await page.locator("//li[@id='menu-item-2106']").click();
    });

    test("Book a quick call", async ({ page }) => {
        const Locator = page.locator("//a[normalize-space()='Book a quick call.']");
        await BookcallVerify(page, Locator);
    });

    test("Buy Now", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-70b961e elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo", async ({ page }) => {
        const websiteLocator = page.locator("//a[normalize-space()='View Demo']");
        await UserWebsiteVerify(page, websiteLocator);
    });

    test("Buy Now 2", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-70f2cd6 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 2", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-631880a elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/movies");
    });

    test("Buy Now 3", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-3e866cb elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 3", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-718cab5 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/movies");
    });

    test("Buy Now 4", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-b65bcbe elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 4", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/movie-details/men-in-black')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/movie-details/men-in-black");
    });

    test("Buy Now 5", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-4d6d1d5 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 5", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-8512a7b elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/movies");
    });

    test("Buy Now 6", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-75f9e34 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 6", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/security-control')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/login-page");
    });

    test("Buy Now 7", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-ea56854 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 7", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-cc7543f elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/");
    });

    test("Buy Now 8", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-ea56854 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 8", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-717d021 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/login-page");
    });

    test("Buy Now 9", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-5747d28 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 9", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/app/vastads')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/admin/login");
    });

    test("Buy Now 10", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-a5ffd7c elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 10", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-3c6fed4 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/");
    });

    test("Buy Now 11", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-40b7237 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 11", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-556ade5 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/login-page");
    });

    test("Buy Now 12", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-753bd48 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 12", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-c3aedbf elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/");
    });

    test("Buy Now 13", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-e8192db elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 13", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-f2fdb72 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/");
    });

    test("Buy Now 14", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-37056e3 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 14", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/edit-profile')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/edit-profile");
    });

    test("Buy Now 15", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-ac44469 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 15", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/watch-list')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/");
    });

    test("Buy Now 16", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-f5607dc elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 16", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/account-setting')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/login-page");
    });

    test("Buy Now 17", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-c750af9 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 17", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-d43078b elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/");
    });

    test("Buy Now 18", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-5433255 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 18", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-73d5126 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/movies");
    });

    test("Buy Now 19", async ({ page }) => {
        const locator = page.locator("//div[contains(@class,'elementor-element elementor-element-0ee7d16 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await locator.scrollIntoViewIfNeeded();
        await EnvantoStreamitVerify(page, locator);
    });

    test("View Demo 19", async ({ page }) => {
        const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-f10869e elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, "https://apps.iqonic.design/streamit-laravel/");
    });

    test("Book a quick call 2", async ({ page }) => {
        const Locator = page.locator("//span[contains(text(),'Not Sure Which Features Fit You?')]");
        await BookcallVerify(page, Locator);
    });
});