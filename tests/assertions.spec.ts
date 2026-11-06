import {test, expect} from '@playwright/test'

test('practise playwright', async({page})=>{

    await page.goto('https://www.playwrightautomation.com/practice.html')
    // await page.getByRole('link',{name:"Login"}).click()

    await page.getByRole('link', { name: 'Login' }).first().click();
})