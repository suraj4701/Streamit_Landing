import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CommonLinkVerify, EnvantoStreamitAppVerify, EnvantoStreamitTvAppVerify, EnvantoStreamitVerify, UserAppPlaystore, UserWebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test("Home User Website Verify", async ({ page }) => {
    await page.goto(home_url);
    const websiteLocator = page.locator("//a[normalize-space()='User Website']");
    await UserWebsiteVerify(page, websiteLocator);
})

test("Home Admin Panel Verify", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//a[contains(@class,'whitespace--normal')][normalize-space()='Admin Panel']");
    await AdminPanelVerify(page, Locator);
})

test("Home Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, Locator);
})

test("Home View Demo", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//a[contains(@href,'https://apps.iqonic.design/streamit-laravel/admin/login')][normalize-space()='view demo']");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("Home View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    const websiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-c9cc3c7 elementor-align-left elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='view demo']");
    await websiteLocator.scrollIntoViewIfNeeded();
    await UserWebsiteVerify(page, websiteLocator);
})

test("Home User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//a[normalize-space()='View Demo']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Home Book a quick call 2", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//span[contains(text(),'Understand Streamit Laravel Better')]");
    await Locator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, Locator);
})

test("Home Book a quick call 3", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//div[contains(@class,'elementor-element elementor-element-6875724 elementor-widget elementor-widget-button')]//a[contains(@class,'elementor-button elementor-button-link elementor-size-sm')]");
    await Locator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, Locator);
})

test("Home Envanto Streamit Verify", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-234b181 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 2", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-7815bd0 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 3", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-65cfcc3 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 4", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-0ca808d elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 5", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-b11ec43 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 6", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-04e878a elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 7", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-cc0a03e elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 8", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-2bb6cda elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Book a quick call 4", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//a[normalize-space()='Talk to an OTT Expert']");
    await Locator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, Locator);
})

test("Home Purchase Streamit", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//a[normalize-space()='Purchase Streamit']");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Explore Streamit", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[normalize-space()='Explore streamit']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://streamit.tech/laravel/explore-demo/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer Purchase Now", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[normalize-space()='Purchase now']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://codecanyon.net/collections/11581473-streamit-laravel-family";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer Flutter App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Flutter App']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://streamit.tech/laravel/products/flutter-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit.tech/laravel/products/flutter-app/");
});

test("Home Footer Streamit TV App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Streamit TV App']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://streamit.tech/laravel/products/streamit-tv-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit.tech/laravel/products/streamit-tv-app/");
});

test("Home Footer Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Admin Panel']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://streamit.tech/laravel/products/admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit.tech/laravel/products/admin-panel/");
});

test("Home Footer Website", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Website']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://streamit.tech/laravel/user-website/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit.tech/laravel/user-website/");
});

test("Home Footer Docs", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Docs']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://documentation.iqonic.design/streamit-laravel/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
});

test("Home Footer FAQ", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='FAQ']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://streamit.tech/laravel/faq/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit.tech/laravel/faq/");
});

test("Home Footer Blog", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Blog']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://streamit.tech/blog/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit.tech/blog/");
});

test("Home Footer Support", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Support']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://iqonic.desky.support/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer Pricing", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Pricing']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://streamit.tech/laravel/pricing/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit.tech/laravel/pricing/");
});

test("Home Footer License", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='License']");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//h2[contains(text(),'Licensing, Terms & More...')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Licensing, Terms & More...');
})

test("Home Footer Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Hire Us']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://streamit.tech/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer Iqonic Design", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[normalize-space()='IQONIC DESIGN']");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//h2[contains(text(),'Production Ready Code Scripts & Design Templates F')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Production Ready Code Scripts & Design Templates For Your Next Project');
})

test("Home Footer Facebook", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//*[name()='path' and contains(@d,'M504 256C5')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://www.facebook.com/streamit.tech/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer Instagram", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[@class='elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-0dca412']//*[name()='svg']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://www.instagram.com/streamit.tech/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer Youtube", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//*[name()='path' and contains(@d,'M549.655 1')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://www.youtube.com/c/IqonicDesign";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer Linkedin", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//*[name()='path' and contains(@d,'M416 32H31')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://www.linkedin.com/company/streamit-tech/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer X-Twitter", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[@class='elementor-icon elementor-social-icon elementor-social-icon-x-twitter elementor-repeater-item-a0526cd']//*[name()='svg']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://x.com/iqonicdesign";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})