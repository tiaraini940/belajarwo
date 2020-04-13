import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        //Happy Scenario or Normal Case
        this.inputEmail = Selector('#user-name');
        this.inputPass = Selector('#password');
        this.addProduct = Selector('button').withText('ADD TO CART');
        this.cart = Selector('#shopping_cart_container');
        this.checkout = Selector('a').withText('CHECKOUT');
        this.inputFname = Selector('#first-name');
        this.inputLname = Selector('#last-name');
        this.inputPos = Selector('#postal-code');
        this.continue = Selector('#checkout_info_container > div > form > div.checkout_buttons > input');
        this.finish = Selector('a').withText('FINISH');


    }

}