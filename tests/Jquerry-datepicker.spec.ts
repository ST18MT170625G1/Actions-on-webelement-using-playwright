import { test, expect, Locator, Page } from '@playwright/test'

async function selectDate(targetYear: string, target_month: string, target_date: string, page: Page, isfeature: boolean)
{
  // let attempts = 0
  // const maxAttempts = 15
  
  // while (attempts < maxAttempts) {
  while(true){
    try {
      const currentMonth = await page.locator(".ui-datepicker-month").first().textContent()
      const currentYear = await page.locator(".ui-datepicker-year").first().textContent()

      if (currentMonth?.trim() === target_month && currentYear?.trim() === targetYear) 
        {
          break
        }
      
      if (isfeature) {
        await page.locator(".ui-datepicker-next").first().click({ delay: 200 })
      } else {
        await page.locator(".ui-datepicker-prev").first().click({ delay: 200 })
      }
      
      await page.waitForTimeout(800)
      // attempts++
    } catch (error) {
      console.log("Navigation error, retrying...", error)
      await page.waitForTimeout(500)
      // attempts++
    }
  }

  await page.waitForTimeout(500)

  const alldates = await page.locator(".ui-datepicker-calendar tbody td").all()
  for (let days of alldates) {
    const dt = await days.innerText()
    if (dt.trim() === target_date) {
      await days.click()
      await page.waitForTimeout(300)
      break
    }
  }
}

test("Interacting Jquerry datapicker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/")
  
  const select_date = page.locator("//input[@id='datepicker']")
  await select_date.click()

  const year = '2027'
  const month = 'August'
  const day = '19'

  await selectDate(year, month, day, page, true)
})