const { test, expect } = require('@playwright/test');
const { UserWebsiteVerify, AdminPanelVerify, UserAppPlaystore, EnvantoStreamitVerify, EnvantoStreamitAppVerify, EnvantoStreamitTvAppVerify } = require('./common');
const home_url = process.env.HOME_URL;

test("Home User Website Verify", async ({ page }) => {
    await page.goto(home_url);
    const websiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await UserWebsiteVerify(page, websiteLocator);
})

test("Home Admin Panel Verify", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Home View Demo", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("Home View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    const websiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await websiteLocator.scrollIntoViewIfNeeded();
    await UserWebsiteVerify(page, websiteLocator);
})

test("Home User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[3]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Home Envanto Streamit Verify", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 2", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 3", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 4", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 5", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[5]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 6", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 7", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[7]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 8", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[8]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Envanto Streamit Verify 9", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[9]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Purchase Now", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Purchase Now 2", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Purchase Now 3", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitTvAppVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Buy Service", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//header/div[1]/h3[1]/span[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Create Account');
})

test("Home Buy Service 2", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/streamit-flutter-app-with-laravel-backend/");
})

test("Home Buy Service 3", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/streamit-tv-app-add-on-with-laravel-backend/");
})

test("Home Purchase Streamit", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoStreamitVerifyLocator = page.locator("//a[contains(text(),'Purchase Streamit')]");
    await EnvantoStreamitVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, EnvantoStreamitVerifyLocator);
})

test("Home Explore Streamit", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[contains(text(),'Explore streamit')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://streamit-laravel.iqonic.design/explore-demo/");
})

test("Home Footer Purchase Now", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://codecanyon.net/collections/11581473-streamit-laravel-family");
})

test("Home Footer Streamit TV App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://streamit-laravel.iqonic.design/products/streamit-tv-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit-laravel.iqonic.design/products/streamit-tv-app/");
});

test("Home Footer Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[3]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://streamit-laravel.iqonic.design/products/admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit-laravel.iqonic.design/products/admin-panel/");
});

test("Home Footer Website", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[4]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://streamit-laravel.iqonic.design/user-website/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit-laravel.iqonic.design/user-website/");
});

test("Home Footer Docs", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://apps.iqonic.design/documentation/streamit-laravel-documentation/build/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/documentation/streamit-laravel-documentation/build/");
});

test("Home Footer FAQ", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://streamit-laravel.iqonic.design/faq/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit-laravel.iqonic.design/faq/");
});

test("Home Footer Support", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
})

test("Home Footer Pricing", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://streamit-laravel.iqonic.design/pricing/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://streamit-laravel.iqonic.design/pricing/");
});

test("Home Footer License", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[3]/a[1]");
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
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[4]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://streamit.iqonic.tech/");
})

test("Home Footer Iqonic Design", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[contains(text(),'IQONIC DESIGN')]");
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
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.facebook.com/iqonicdesign");
})

test("Home Footer Instagram", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/span[2]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.instagram.com/iqonicdesign/");
})

test("Home Footer Youtube", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/span[3]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.youtube.com/c/IqonicDesign");
})

test("Home Footer X-Twitter", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/span[4]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://x.com/iqonicdesign");
})