import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        //Happy Scenario or Normal Case
        this.lupapassword = Selector('a').withText('Lupa kata sandi');
        this.inputEmail =  Selector('#email');
        this.kirimEmail = Selector('button').withText('Kirim Email');


    }

}