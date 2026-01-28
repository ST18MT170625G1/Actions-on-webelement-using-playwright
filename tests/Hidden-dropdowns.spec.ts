import {test, expect, chromium} from '@playwright/test'
test("Hidden Dropdowns",async({browser})=>{
    const context= await browser.newContext()
    const page= await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByRole('textbox', { name: 'Username' }).fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")
    await page.getByRole('button').click()
    await page.getByText('PIM').click()
    // click on the Job Title Dropdown

    await page.locator("form i").nth(2).click()

    // Getting List of Job Titles from the Dropdown

     const options =page.locator("div[role='listbox'] span")

     const count:Number =await options.count()
     console.log("No of job title's present inside the dropdown:",count)

})