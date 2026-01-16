import  {test,expect} from '@playwright/test'

test("Verify the page title", async ({page})=>
{

    await page.goto("http://www.automationpractice.pl/index.php")

    let title :String = await page.title()
    console.log("The page title is :" +title)
    await expect(page).toHaveTitle("My Shop")



})
