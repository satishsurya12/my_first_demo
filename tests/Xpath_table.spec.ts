import {test,expect} from '@playwright/test'

test('practise First program',async({page})=>{

    await page.goto('https://demoqa.com/webtables')
    
    await page.locator('[class="text"]').nth(3).click()
    await page.waitForTimeout(2000)
    // const table = await page.locator('//table[@class="-striped -highlight table table-striped table-bordered table-hover"]')
    // await page.waitForTimeout(2000)

    const rows = await page.locator('//table[@class="-striped -highlight table table-striped table-bordered table-hover"]//tr')
    await page.waitForTimeout(2000)

    // console.log("Full table data:")
    // console.log(await table.innerText())

    console.log("Full table data:")
    console.log(await rows.count())


})