import {test,expect} from '@playwright/test'

test('practise2 toBeChecked on toggle switches',async({page})=>{

    const URL='https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-text-inputs'

    await page.goto(URL)
    await page.waitForTimeout(3000)

    await page.getByTestId('pp-side-nav-toggles').click()
    await page.waitForTimeout(3000)

    const notificationToggle=await page.getByTestId('toggle-notifications')
    await notificationToggle.check()
    await page.waitForTimeout(2000)
    await expect(notificationToggle).toBeChecked()
    await notificationToggle.uncheck()
    await page.waitForTimeout(2000)
    await expect(notificationToggle).not.toBeChecked()


})