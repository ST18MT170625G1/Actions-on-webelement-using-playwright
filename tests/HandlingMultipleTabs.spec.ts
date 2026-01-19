import {test,expect,chromium} from'@playwright/test'

test("Browser Context",async ({browser})=>{
     //const browser=await chromium.launch()
     const context=await browser.newContext()
     const parent_page= await context.newPage()
     //const page2 = await context.newPage()

      await parent_page.goto("https://testautomationpractice.blogspot.com/")
      await expect(parent_page).toHaveTitle("Automation Testing Practice")
   const [child_Page]  = await Promise.all([context.waitForEvent('page'),parent_page.locator("//button[.='New Tab']").click()])

   const pages= context.pages()
   console.log(pages.length)
})