import {test} from '@playwright/test'

test('verify getByRole',async({page})=>{

    const URL= 'https://www.playwrightautomation.com/practice.html'
    await page.goto(URL)
    // await page.getByRole("textbox",{name: 'Name'}).fill('satish')
    // await page.waitForTimeout(2000)

    // await page.getByRole('textbox',{name:'Email'}).fill('kumarsai@gmail.com')
    // await page.waitForTimeout(2000)

    // await page.getByRole('textbox',{name:'Address' }).fill('near navab restarent, hyderabad')
    // await page.waitForTimeout(5000)

    // await page.getByRole('button',{name:'Submit'}).click()
    // await page.waitForTimeout(2000)

    await page.getByRole('button',{name:'Reset'}).nth(1).click()
    await page.waitForTimeout(2000)

              

})

