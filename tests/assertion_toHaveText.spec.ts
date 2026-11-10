import {test,expect} from '@playwright/test'

test('practise toHaveText',async({page})=>{
    
    const URL='https://www.playwrightautomation.com/practice.html'
    await page.goto(URL)
    await page.waitForTimeout(2000)
    await page.locator('[class="pp-nav-label"]').nth(3).click()
    await page.waitForTimeout(2000)
    const indiaRow=await page.getByRole('row',{name:'India Shooting 3 4 2 9'})
    await page.waitForTimeout(2000)
    await expect(indiaRow).toHaveText('India Shooting 3 4 2 9')
    await page.waitForTimeout(3000)
    


})