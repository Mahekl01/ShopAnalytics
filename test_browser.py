import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        page.on('console', lambda msg: print(f'CONSOLE: {msg.text}'))
        page.on('pageerror', lambda exc: print(f'ERROR: {exc}'))
        await page.goto('http://localhost:8080')
        await page.wait_for_timeout(3000)
        print("BODY:", await page.evaluate('document.body.innerHTML'))
        await browser.close()

asyncio.run(main())
