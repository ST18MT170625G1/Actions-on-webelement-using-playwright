import {test,expect,Locator} from '@playwright/test'


test("Iframes Demo",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame_count  = page.frames()
    console.log("Number Of Frames present in web Page : ",frame_count.length)


    // Approach 1: using page.frame ---- Locator--

   /* const Frame= page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"})

    if(Frame)
    {
      await Frame.locator('//input[@name="mytext1"]').fill("hello")
      await page.waitForTimeout(5000)
        
    }else{
        console.log("Invalid iframes")
    }*/





    // Apporach 2 : using Frame.Locator

const inputBox = page.frameLocator('[src="frame_3.html"]').locator('//*[@id="id3"]/div/input')
if(inputBox){
await inputBox.fill("Hello")
}else{
    console.log("Invalid Frame")
}


})