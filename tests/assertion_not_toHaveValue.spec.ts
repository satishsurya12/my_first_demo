import {test,expect} from '@playwright/test'

test('verify checkbox',async({page})=>{

    const URL = 'https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-text-inputs'
    await page.goto(URL)
    const nameBox=await page.getByPlaceholder('Enter your name')
    await nameBox.fill('kumar')
    await page.waitForTimeout(2000)
    await expect(nameBox).not.toHaveValue('satish')

    
})

