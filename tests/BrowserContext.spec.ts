import {test,expect,chromium} from'@playwright/test'

test("Browser Context",async ({browser})=>{
     //const browser=await chromium.launch()
     const context=await browser.newContext()
     const parent_page= await context.newPage()
     const page2 = await context.newPage()

      await parent_page.goto("https://testautomationpractice.blogspot.com/")
      await expect(parent_page).toHaveTitle("Automation Testing Practice")
      await page2.goto("https://www.selenium.dev/")
   



})