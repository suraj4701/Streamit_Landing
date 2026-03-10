import { expect, test } from '@playwright/test';
import { AdminPanelVerify, CommonLinkVerify, TvAppPlaystore, UserAppPlaystore, UserWebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test("Gethelp ExploreDemo View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    await page.locator("//li[@id='menu-item-1200']").click();
    const Locator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/admin/login')]");
    await AdminPanelVerify(page, Locator);
})

test("Gethelp ExploreDemo View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    await page.locator("//li[@id='menu-item-1200']").click();
    const websiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-0aabe2f elementor-align-left elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await UserWebsiteVerify(page, websiteLocator);
})

test("Gethelp ExploreDemo User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    await page.locator("//li[@id='menu-item-1200']").click();
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-88320c4 elementor-widget elementor-widget-image']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Gethelp ExploreDemo Tv App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    await page.locator("//li[@id='menu-item-1200']").click();
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-81bf8ce elementor-widget elementor-widget-image']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await TvAppPlaystore(page, adminpanelLocator);
})

test("Gethelp ExploreDemo Get Answers", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    await page.locator("//li[@id='menu-item-1200']").click();
    const LinkLocator = page.locator("//a[normalize-space()='Get Answers']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://iqonic.tech/contact-us/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Gethelp Documentation", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    const LinkLocator = page.locator("//li[@id='menu-item-1201']");
    const expectedLink = "https://documentation.iqonic.design/streamit-laravel/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Gethelp Tv App docs", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    const LinkLocator = page.locator("//li[@id='menu-item-5066']");
    const expectedLink = "https://documentation.iqonic.design/streamit-tv-app/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Gethelp FAQ", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    const LinkLocator = page.locator("//li[@id='menu-item-1826']");
    await LinkLocator.click();
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit.tech/laravel/faq/");
});

test("Gethelp Blog", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    const LinkLocator = page.locator("//li[@id='menu-item-20111']//a[@class='ct-menu-link'][contains(text(),'Streamit Blog – Updates, Tips and OTT Streaming Gu')]");
    await LinkLocator.click();
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit.tech/blog/");
});

test("Gethelp Support", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    const LinkLocator = page.locator("//li[@id='menu-item-1202']//a[@class='ct-menu-link'][normalize-space()='Support']");
    const expectedLink = "https://iqonic.desky.support/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})