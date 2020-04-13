import { Selector } from 'testcafe';
import Page from '../page-objects/model';
import config from '../config';

const page = new Page();

fixture `P2P Lupa Password`
    .page `${config.baseUrl}`
    .httpAuth ({
        username: 'morak',
        password: 'morak123'
    });

test('Lupa Password', async t => {
        await t
        .maximizeWindow()
        .click(page.lupapassword)

        for(let i = 0; i < 4; i++) {
            await t
            .typeText(page.inputEmail, 'fariskur009@mailinator.com')
            .click(page.kirimEmail)
        }
});


