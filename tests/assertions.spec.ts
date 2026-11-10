// import { test, expect } from "@playwright/test";

// test.skip('practice assertions', async ({ page }) => {

//     await page.goto("https://www.playwrightautomation.com/practice.html");

//     const loginBtn = await page.getByRole('link', { name: "Login" }).first();

//     await expect(loginBtn).toBeVisible();

//     loginBtn.click();

//     await page.waitForTimeout(5000);

//     await page.getByLabel("Username or email").fill("student");
//     await page.getByLabel("Password").nth(1).fill("Password123");
//     await page.getByTestId("login-submit-button").click();

//     await page.waitForTimeout(5000);

//     await expect(loginBtn).toBeVisible();

//     await page.waitForTimeout(5000);


// })


// test('practice assertions to have value', async ({ page }) => {

//     await page.goto("https://www.playwrightautomation.com/practice.html");
//     const username = "sasidhar";

//     const username2 = "Sasidhar";

//     const nameBox = await page.getByPlaceholder("Enter your name");
//     nameBox.fill(username);
//     await page.waitForTimeout(2000);

//     await expect(nameBox).toHaveValue(username2)
//     await page.waitForTimeout(2000); 


// })


Assertions
await expect(locator).toBeVisible();

await expect(locator).toBeHidden();

await expect(locator).toBeEnabled();

await expect(locator).toBeDisabled();

await expect(locator).toBeChecked();

await expect(locator).toHaveText('Submit');

await expect(locator).toContainText('Success');

await expect(locator).toHaveValue('Sasidhar'); //to check the input box value
await expect(name).not.toHaveValue('Admin');

await expect(locator).toHaveAttribute('type', 'submit');

await expect(locator).toHaveCount(5);


await expect(locator).toBeVisible();
await expect(locator).not.toBeVisible();

await expect(locator).toBeEnabled();
await expect(locator).not.toBeEnabled();

await expect(locator).toHaveText('Login');
await expect(locator).not.toHaveText('Logout');

const message = page.locator('.message');

await expect(message).toContainText('successful'); 
await expect(message).not.toContainText('Error');