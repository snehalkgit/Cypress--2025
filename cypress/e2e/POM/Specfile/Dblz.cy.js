///<reference types = "cypress"/>

import homePage from "../Pages/2.dblz"
import usercri from '../../../fixtures/Dblzuser.json'
import productlist from "../../../fixtures/DblzProduct.json"


describe('shopping',()=>{
    const hp = new homePage()
    it('my first shopping',()=>{
        hp.VisitUrl()
        hp.login(usercri.un,usercri.pw)
         hp.addToCart('phone', productlist.phone)
        hp.addToCart('laptop', productlist.laptop)
        hp.addToCart('monitor', productlist.monitor)

    })
    



})





