import {test,expect} from '@playwright/test'

test('practise assertiions',async({page})=>{

    const URL = 'https://www.playwrightautomation.com/practice.html'
    await page.goto(URL);
    const LoginBtn=await page.getByRole('button',{name:'Submit'})
    await page.waitForTimeout(2000)

    await expect(LoginBtn).toBeVisible()
    await page.waitForTimeout(2000)




})