import { expect, test } from '@playwright/test';
import { AdminPanelVerify, TvAppPlaystore, UserAppPlaystore, UserWebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test("Gethelp ExploreDemo View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    await page.locator("//li[@id='menu-item-1200']").click();
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Gethelp ExploreDemo View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    await page.locator("//li[@id='menu-item-1200']").click();
    const websiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await UserWebsiteVerify(page, websiteLocator);
})

test("Gethelp ExploreDemo User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    await page.locator("//li[@id='menu-item-1200']").click();
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Gethelp ExploreDemo Tv App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    await page.locator("//li[@id='menu-item-1200']").click();
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await TvAppPlaystore(page, adminpanelLocator);
})

test("Gethelp ExploreDemo Get Answers", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    await page.locator("//li[@id='menu-item-1200']").click();
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/contact-us/");
})

test("Gethelp Documentation", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    const LinkLocator = page.locator("//li[@id='menu-item-1201']");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/documentation/streamit-laravel-documentation/build/");
})

test("Gethelp Tv App docs", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    const LinkLocator = page.locator("//li[@id='menu-item-5066']");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://documentation.iqonic.design/streamit-tv-app/");
})

test("Gethelp FAQ", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    const LinkLocator = page.locator("//li[@id='menu-item-1826']");
    await LinkLocator.click();
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit-laravel.iqonic.design/faq/");
});

test("Gethelp Support", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1199']").hover();
    const LinkLocator = page.locator("//li[@id='menu-item-1202']");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
})