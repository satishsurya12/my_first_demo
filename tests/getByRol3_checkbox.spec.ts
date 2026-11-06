import {test} from '@playwright/test'

test('verify getByRole',async({page})=>{

    const URL= 'https://www.playwrightautomation.com/practice.html'
    await page.goto(URL)
    
    await page.getByRole('button',{name:'Reset'}).nth(1).click()
    await page.waitForTimeout(2000)

    

              

})

