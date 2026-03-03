import { test } from '@playwright/test';
import { CommonLinkVerify } from './common';
const home_url = process.env.HOME_URL;

test("More Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//li[@id='menu-item-1203']");
    const expectedLink = "https://streamit.tech/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("More Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//li[@id='menu-item-3484']");
    const expectedLink = "https://streamit.tech/streamit-laravel-demo-call/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("More Buy Now", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/a[1]");
    const expectedLink = "https://codecanyon.net/collections/11581473-streamit-laravel-family";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("More Explore", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//div[contains(@data-items,'primary')]//a[contains(@aria-label,'Explore Now')][normalize-space()='Explore Now']");
    const expectedLink = "https://streamit.tech/laravel/explore-demo/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})