import {test, expect,Locator} from '@playwright/test'
import { only } from 'node:test'

test('simple Dialog',async({page})=>{



    await page.goto('https://testautomationpractice.blogspot.com/')


    page.on('dialog',(dialog) =>{
        console.log('Dialog Type :', dialog.type())
        dialog.accept()

    })

    await page.locator('//button[.="Simple Alert"]').click()

})
test("Confirmation Dialog",async({page})=>{



    await page.goto('https://testautomationpractice.blogspot.com/')


    page.on('dialog',(dialog) =>{
        console.log('Dialog Type :', dialog.type())
        dialog.accept()

    })

    await page.locator('//button[@id="confirmBtn"]').click()

})

test.only("prompt Dialog",async({page})=>{



    await page.goto('https://testautomationpractice.blogspot.com/')


    page.on('dialog',(dialog) =>{
        console.log('Dialog Type :', dialog.type())
        dialog.accept()

    })

    await page.locator('//button[@id="promptBtn"]').click()

})