import { test } from '../baseFixtures.js';
import { doQuickLogin } from '../login.js';

const newPartName = 'UITESTIN123';

test('PUI - Pages - Index - Playground', async ({ page }) => {
  await doQuickLogin(page);

  await page.goto('./');
  // Playground
  await page.getByRole('tab', { name: 'Playground' }).click();
  await page.getByRole('button', { name: 'API Forms' }).click();

  // New Part
  await page.getByRole('button', { name: 'Create New Part' }).click();
  await page.locator('#react-select-3-input').fill('category 0');
  await page
    .getByRole('option', { name: 'Category 0' })
    .locator('div')
    .first()
    .click();
  await page.getByLabel('Name *').fill(newPartName);
  await page.getByLabel('Initial Stock Quantity *').fill('1');
  await page
    .getByLabel('Create Part')
    .getByRole('button', { name: 'Cancel' })
    .click();

  // Edit Part
  await page.getByRole('button', { name: 'Edit Part' }).click();
  await page.getByLabel('IPN').click();
  await page.getByLabel('IPN').fill(newPartName);
  await page
    .getByLabel('Edit Part')
    .getByRole('button', { name: 'Cancel' })
    .click();

  // Create Stock Item
  await page.getByRole('button', { name: 'Create Stock Item' }).click();
  await page.locator('#react-select-25-input').fill('R_1K_0402_1');
  await page.getByText('R_1K_0402_1%').click();
  await page
    .getByLabel('Add Stock Item')
    .getByRole('button', { name: 'Cancel' })
    .click();

  // EditCategory
  await page.getByRole('button', { name: 'Edit Category' }).click();
  await page.locator('.css-1xvbfjt-Input2').first().click();
  await page.getByText('Category 0').click();
  await page
    .getByLabel('Edit Category')
    .getByRole('button', { name: 'Cancel' })
    .click();

  // Create Attachment
  await page.getByRole('button', { name: 'Create Attachment' }).click();
  await page.getByLabel('Attachment *').waitFor();
  await page.getByRole('button', { name: 'Cancel' }).click();
  // TODO: actually create an attachment

  // Create Part new Modal
  await page.getByRole('button', { name: 'Create Part new Modal' }).click();
  await page.locator('.css-1xvbfjt-Input2').first().click();
  await page.getByText('Category 0').click();
  await page
    .getByLabel('Create part')
    .getByRole('button', { name: 'Cancel' })
    .click();

  // Status Label
  await page.getByRole('button', { name: 'Status labels' }).click();
  await page.getByRole('textbox').dblclick();
  await page.getByRole('textbox').fill('50');
  await page.getByText('Attention needed').waitFor();
});

test('PUI - Pages - Index - Dashboard', async ({ page }) => {
  await doQuickLogin(page);

  // Dashboard auto update
  await page.getByRole('tab', { name: 'Dashboard' }).click();
  await page.getByText('Autoupdate').click();
  await page.waitForTimeout(500);
  await page.getByText('Autoupdate').click();
  await page.getByText('This page is a replacement').waitFor();
});
