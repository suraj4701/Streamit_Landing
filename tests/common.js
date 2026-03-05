const { expect } = require('@playwright/test');

const UserWebsiteVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    await newPage.waitForLoadState('load');
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/streamit-laravel/");
    return newPage;
}

const AdminPanelVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    await newPage.waitForLoadState('networkidle');
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/streamit-laravel/admin/login");
    return newPage;
}

const UserAppPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.iqonic.streamitlaravel");
    const trustpilotLocator = newPage.locator("//span[contains(text(),'Streamit Laravel App')]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('Streamit Laravel App');
    return newPage;
}

const TvAppPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.iqonic.streamitlaraveltv");
    const trustpilotLocator = newPage.locator("//body[1]/c-wiz[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/c-wiz[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('Streamit Laravel TV App');
    return newPage;
}

const EnvantoStreamitVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const rawText = await iqonicDesignSpanLocator.textContent();
    const verifytext = rawText.replace(/\s+/g, ' ').trim();
    expect(verifytext).toContain('Streamit Laravel - OTT, Movies & Live Video Streaming Platform');
    return newPage;
}

const EnvantoStreamitAppVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Streamit - OTT Live Video Streaming App Built with Flutter');
    return newPage;
}

const EnvantoStreamitTvAppVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Streamit - OTT TV App for Video Streaming Built with Flutter');
    return newPage;
}

const BookcallVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])

    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe("https://streamit.tech/streamit-laravel-demo-call/");
    return newPage;
}

const CommonLinkVerify = async (page, locator, link) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe(link);
    return newPage;
}

module.exports = { UserWebsiteVerify, AdminPanelVerify, BookcallVerify, UserAppPlaystore, EnvantoStreamitVerify, EnvantoStreamitAppVerify, TvAppPlaystore, EnvantoStreamitTvAppVerify, CommonLinkVerify }