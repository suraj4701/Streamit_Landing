import { test } from '@playwright/test';
import { BookcallVerify, EnvantoStreamitTvAppVerify, TvAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("StreamitTvApp Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const Locator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, Locator);
})

test("StreamitTvApp Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-d9dcc60 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Tv App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const adminpanelLocator = page.locator("//a[contains(@href,'https://play.google.com/store/apps/details?id=com.iqonic.streamitlaraveltv')]");
    await TvAppPlaystore(page, adminpanelLocator);
})

test("StreamitTvApp Book a quick call 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-6786d69 elementor-widget elementor-widget-button')]//span[contains(@class,'elementor-button-text')][normalize-space()='Not Sure Which Features Fit You?']");
    await Locator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, Locator);
})

test("StreamitTvApp Buy Now 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-1c293a6 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-d932ff1 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-0cbe4e2 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-14339b8 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 6", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-67793f9 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 7", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-531e1a2 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 8", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-52494a9 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 9", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-9659110 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 10", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-2d7fd34 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 11", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-4166b89 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 12", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-7a0b8c0 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("StreamitTvApp Buy Now 13", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-c9e7445 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, LinkLocator);
})

test("StreamitTvApp Buy Now 14", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const LinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-1eb9b05 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, LinkLocator);
})

test("StreamitTvApp Book a quick call 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1195']").hover();
    await page.locator("//li[@id='menu-item-5270']").click();
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-e5ea1ab elementor-widget elementor-widget-button')]//span[contains(@class,'elementor-button-text')][normalize-space()='Not Sure Which Features Fit You?']");
    await Locator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, Locator);
})