import {test,expect} from '@playwright/test'

test('practise assertiions',async({page})=>{

    const URL = 'https://www.playwrightautomation.com/practice.html'
    await page.goto(URL);
    await page.waitForTimeout(2000)

    const submitBtn=await page.getByTestId('btn-submit-text-inputs')
    await expect(submitBtn).toBeDisabled()
    
})


