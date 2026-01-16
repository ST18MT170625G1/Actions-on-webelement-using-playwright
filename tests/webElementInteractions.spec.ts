// CSS - Cascading style sheets


import {test,expect,Locator} from '@playwright/test'
import path from 'path'

test("Verify WebElement interactionsin playwright", async ({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")

    // 1. Input Field Interaction

    const NameField: Locator =page.locator("//input[contains(@placeholder,'Enter Name')]")
    await NameField.fill("Ganesh")

    // 2. Interacting With Radio Buttons

    const radioButton: Locator =page.locator("//label[contains(text(),'Male')]")
    await radioButton.check()

    // 3. Interacting with Checkboxes


    const days = ['Sunday','Monday','Saturday']

   for (const day of days) {
  await page.locator(`//label[normalize-space()='${day}']`).check();
}

// 4. Interacting with Dropdowns

const countryDropdown :Locator = page.getByLabel('Country:')
await countryDropdown.selectOption('India')


// 5. Interacting with DataPickers

const datepicker :Locator= page.locator("//input[@id='datepicker']")
await datepicker.fill("08/19/2021")

await page.locator('//input[@name = "SelectedDate"]').click(); 

const day = '7';
await page.locator(`//a[@data-date='${day}']`).click();



// 6. File Upload and download 

const filepath = path.join(process.cwd(),'test-data',
  'Sample.pdf')

await page.locator("//input[@id='singleFileInput']").setInputFiles(filepath)

const screenshotPath = path.join(
  process.cwd(),
  'Screenshots',
  'page.png'
);

await page.screenshot({
  path: screenshotPath,
  fullPage: true
});


})