import { Selector } from 'testcafe';
import Page from './model';
import config from './config';

const page = new Page();

fixture `Fixture`
    .page `${config.baseUrl}`;

test('Login & Add to Cart', async t => {
    await t
    .maximizeWindow()
    .expect(Selector('h4').textContent).contains('Accepted usernames are:')
    .typeText(page.inputEmail, 'standard_user')
    .typeText(page.inputPass,'secret_sauce')
    .pressKey('enter')
    .click(page.addProduct)
    .click(page.cart)
    .click(page.checkout)
    .typeText(page.inputFname, 'faris')
    .typeText(page.inputLname, 'ardi')
    .typeText(page.inputPos, '12345')
    .click(page.continue)
    .click(page.finish)
});

