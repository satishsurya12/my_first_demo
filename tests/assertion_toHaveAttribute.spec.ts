import {test,expect} from '@playwright/test'

test('verify checkbox',async({page})=>{

    const URL = 'https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-text-inputs'
    await page.goto(URL)
    await page.waitForTimeout(2000)
    const Username=await page.locator('[placeholder="Enter your name"]')
    await page.waitForTimeout(3000)
    await expect(Username).toHaveAttribute('id','name')


    
})


