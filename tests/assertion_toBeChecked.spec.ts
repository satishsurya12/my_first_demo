import {test,expect} from '@playwright/test'

test('verify checkbox',async({page})=>{

    const URL = 'https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-text-inputs'
    await page.goto(URL)
    await page.getByTestId('pp-side-nav-checkboxes').click()
    await page.waitForTimeout(2000)
    const checkBtn = await page.getByTestId('checkbox-sunday')
    await checkBtn.click()
    await page.waitForTimeout(2000)
    await expect(checkBtn).toBeChecked()
    await checkBtn.click()
    await page.waitForTimeout(2000)
    await expect(checkBtn).not.toBeChecked()




})