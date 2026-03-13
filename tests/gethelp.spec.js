import { expect, test } from '@playwright/test';
import { AdminPanelVerify, CommonLinkVerify, TvAppPlaystore, UserAppPlaystore, UserWebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("Get Help", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-1199']").hover();
    });

    // --- SUB-SECTION: Explore Demo Page ---
    test.describe("Explore Demo", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1200']").click();
        });

        test("View Demo", async ({ page }) => {
            const Locator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/admin/login')]");
            await AdminPanelVerify(page, Locator);
        });

        test("View Demo 2", async ({ page }) => {
            const websiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-0aabe2f elementor-align-left elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
            await UserWebsiteVerify(page, websiteLocator);
        });

        test("User App Playstore", async ({ page }) => {
            const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-88320c4 elementor-widget elementor-widget-image']");
            await adminpanelLocator.scrollIntoViewIfNeeded();
            await UserAppPlaystore(page, adminpanelLocator);
        });

        test("Tv App Playstore", async ({ page }) => {
            const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-81bf8ce elementor-widget elementor-widget-image']");
            await adminpanelLocator.scrollIntoViewIfNeeded();
            await TvAppPlaystore(page, adminpanelLocator);
        });

        test("Get Answers", async ({ page }) => {
            const LinkLocator = page.locator("//a[normalize-space()='Get Answers']");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://iqonic.tech/contact-us/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    // --- SUB-SECTION: Direct Menu Links ---
    test("Documentation", async ({ page }) => {
        const LinkLocator = page.locator("//li[@id='menu-item-1201']");
        const expectedLink = "https://documentation.iqonic.design/streamit-laravel/";
        await CommonLinkVerify(page, LinkLocator, expectedLink);
    });

    test("Tv App docs", async ({ page }) => {
        const LinkLocator = page.locator("//li[@id='menu-item-5066']");
        const expectedLink = "https://documentation.iqonic.design/streamit-tv-app/";
        await CommonLinkVerify(page, LinkLocator, expectedLink);
    });

    test("FAQ", async ({ page }) => {
        const LinkLocator = page.locator("//li[@id='menu-item-1826']");
        await LinkLocator.click();
        expect(page.url()).toBe("https://streamit.tech/laravel/faq/");
    });

    test("Blog", async ({ page }) => {
        const LinkLocator = page.locator("//li[@id='menu-item-20111']//a[@class='ct-menu-link'][contains(text(),'Streamit Blog – Updates, Tips and OTT Streaming Gu')]");
        await LinkLocator.click();
        expect(page.url()).toBe("https://streamit.tech/blog/");
    });

    test("Support", async ({ page }) => {
        const LinkLocator = page.locator("//li[@id='menu-item-1202']//a[@class='ct-menu-link'][normalize-space()='Support']");
        const expectedLink = "https://iqonic.desky.support/";
        await CommonLinkVerify(page, LinkLocator, expectedLink);
    });
});