import { test, expect } from '@playwright/test'

test('homepage has title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Portfolio/)
})

test('navigation works', async ({ page }) => {
  await page.goto('/')
  
  // Test navigation links
  await page.click('text=Sobre mí')
  await expect(page).toHaveURL('/about')
  
  await page.click('text=Proyectos')
  await expect(page).toHaveURL('/projects')
  
  await page.click('text=Contacto')
  await expect(page).toHaveURL('/contact')
})

test('contact form works', async ({ page }) => {
  await page.goto('/contact')
  
  // Fill out the form
  await page.fill('input[name="name"]', 'Test User')
  await page.fill('input[name="email"]', 'test@example.com')
  await page.fill('input[name="subject"]', 'Test Subject')
  await page.fill('textarea[name="message"]', 'This is a test message')
  
  // Submit the form
  await page.click('button[type="submit"]')
  
  // Check for success message
  await expect(page.locator('text=¡Mensaje enviado!')).toBeVisible()
})
