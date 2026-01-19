import {test,expect,chromium} from '@playwright/test'

test("Handle multiple popups",async ({browser})=>{

     const context= await browser.newContext()
      const page=await context.newPage()
      await page.goto("https://testautomationpractice.blogspot.com/")

       await Promise.all([page.waitForEvent("popup"),page.locator("//button[.='Popup Windows']").click()])
        const allpopups= context.pages()
        console.log("No of tabs opened ",allpopups.length)
      

      
      

})