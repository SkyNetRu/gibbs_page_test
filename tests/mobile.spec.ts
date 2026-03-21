import { test, expect } from '@playwright/test'

test('no horizontal scroll on mobile', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })

  // Check that the page doesn't have horizontal scrollbar (scrollX stays at 0)
  const scrollX = await page.evaluate(() => {
    window.scrollTo(9999, 0)
    return window.scrollX
  })

  expect(scrollX).toBe(0)
})

test('page screenshot mobile', async ({ page }) => {
  await page.goto('/')
  await page.screenshot({ path: 'tests/screenshots/mobile-hero.png', fullPage: false })
})
