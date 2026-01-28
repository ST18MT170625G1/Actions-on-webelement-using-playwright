import{test,expect,chromium,Locator} from '@playwright/test'

test("Auto-Suggest DropDowns",async({browser})=>{

     const context = await browser.newContext()
      const page=await context.newPage()

     await  page.goto("https://www.flipkart.com/")
    await  page.locator("input[name=q]").fill("mobiles")
     await page.waitForTimeout(5000)
     const options =page.locator("ul>li")
     const count  = await options.count()
     console.log("Number of auto suggestion :",count)
     await page.waitForTimeout(3000)
    const alltext:String[]= await (await options.allTextContents()).map(text=>text.trim())
    console.log("Using allTextContent:", alltext)

     // printing all suggested items in the search box

     for (let i=0;i<count;i++){
        
        console.log("suggest dropdown text : ", await options.nth(i).innerText())
        
     }

     // click on the particular option on suggested list

     for(let i =0;i<count;i++)
{
   const text = await options.nth(i).innerText()
   if(text==="mobiles keypad"){
      await options.nth(i).click()
      break
   }
}

})