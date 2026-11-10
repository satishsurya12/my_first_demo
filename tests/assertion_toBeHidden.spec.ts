import {test,expect} from '@playwright/test'

test('practise assertiions',async({page})=>{

    const URL = 'https://www.playwrightautomation.com/practice.html'
    await page.goto(URL);
    await page.waitForTimeout(2000)
    await page.locator('[class="pp-nav-topic"]').nth(5).click()
    await page.waitForTimeout(5000)
    const Hide= await page.locator('[id="btn-hide-element"]')
    const target= await page.locator('[id="showhide-textbox"]')
    await expect(target).toBeVisible()
    console.log(target);
    await page.waitForTimeout(5000)
    await Hide.click()
    await page.waitForTimeout(2000)
    await expect(target).toBeHidden()
    await page.waitForTimeout(2000)
    console.log(target);



})