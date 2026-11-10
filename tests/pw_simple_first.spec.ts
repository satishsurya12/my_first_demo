import {test,expect} from '@playwright/test'

test('practise First program',async({page})=>{

    await page.goto('https://www.playwrightautomation.com/practice.html')
    
    await page.locator('//input[@id="name"]').fill('satish')
    await page.waitForTimeout(2000)
    await page.locator('//input[@id="email"]').fill('satish123@gmail.com')
    await page.waitForTimeout(2000)



})