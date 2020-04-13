import { Selector } from 'testcafe';
import Page from './model';
import config from './config';

const page = new Page();

fixture `Fixture`
    .page `${config.baseUrl}`;

test('Cek content typo', async t => {
    await t
    .maximizeWindow()
    .expect(Selector('h4').textContent).contains('Accepted usernames are:')
    .typeText(page.inputEmail, 'standard_user')
    .typeText(page.inputPass,'secret_sauce')
    .pressKey('enter')
    .expect(Selector('.inventory_item_desc')
        .textContent).contains('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    //carry.allTheThings() typo or failed to load data?
    });