import {test,expect, Locator} from '@playwright/test'

test("Locatores in playwright",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")

    // 1. Absloute Xpath

    const log:Locator= page.locator("xpath=/html/body/div[4]/div[1]/div[1]/div[1]/a/img");

    await expect(log).toBeVisible()


    // 2. Relative Xpath 

    const relativeLog:Locator= page.locator("//img[@alt='Tricentis Demo Web Shop']")
    await expect(relativeLog).toBeVisible


    //3. Locator With Contains

    const products : Locator=page.locator("//h2/a[contains(@href,'computer')]")

    const ProductsCount : number = await products.count()
    console.log("Number of computer Related Products :"+ProductsCount)
    expect (ProductsCount).toBeGreaterThan(1)
    console.log("My First computer product related : ", await products.first().textContent())
    console.log("My Last computer product related : ", await products.last().textContent())
    console.log("My nth computer product related : ", await products.nth(2).textContent())
    let productTitle: String[] = await products.allTextContents()
    console.log("all product titles: ", productTitle
    )
    for(let i=0;i<productTitle.length;i++){
        console.log(productTitle[i])
    }


    const computer_products : Locator = page.locator("//h2/a[starts-with(@href,'/build')]")
   const count= await computer_products.count()
   expect(count).toBeGreaterThan(0)

    //await expect(computer_products.count()).toBeGreaterThan(1)



})