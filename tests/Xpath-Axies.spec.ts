import { test, expect, Locator } from '@playwright/test';

test("Xpath Axies in playwright", async ({ page }) => {

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    //1. Self xpath axis

    const value: Locator = page.locator("//td[text()='Germany']/self::td");
    await expect(value).toHaveText("Germany");

    // 2. Parent xpath axis

    const parentrow: Locator= page.locator("//td[text()='Germany']/parent::tr")
    expect(parentrow).toContainText("Alfreds Futterkiste Maria Anders Germany")

    // 3. Child xpath axis

   const childAxis:Locator=  page.locator("//table[@id='customers']//tr[3]/child::td")
   await expect(childAxis).toHaveCount(3)
   //console.log(await childAxis.textContent())


   // 4. Ancestor xpath Axis

   const ancestoraxis :Locator = page.locator("//td[text()='Germany']/ancestor::table")
   expect(ancestoraxis).toHaveAttribute("id","customers")


   // 5. Descendant xpath Axis 


   const descendantAxis: Locator = page.locator("//table[@id='customers']/descendant::td")
   await expect(descendantAxis).toHaveCount(18)

   // 6. Following xpath Axis

   const followingAxis :Locator = page.locator("//td[text()='Germany']/following::td[1]")
   await expect(followingAxis).toHaveText("Centro comercial Moctezuma")


   // 7. Following-sibling xpath Axis

                                                            //  Example: 1 with 0 siblings

                                                            const followingSiblingAxis :Locator= page.locator("//td[text()='Germany']/following-sibling::td")

                                                            await expect(followingSiblingAxis).toHaveCount(0)


                                                            // Example: 2 with one sibling

                                                            const onefollowingsibling: Locator =page.locator("//td[text()='Maria Anders']/following-sibling::td")
                                                            await expect(onefollowingsibling).toHaveCount(1)

  // 8. Preceding-sibling xpath Axis
  
   const precedingAxis:Locator = page.locator("//td[text()='Germany']/preceding-sibling::td")
   await expect(precedingAxis).toHaveCount(2)




   


});