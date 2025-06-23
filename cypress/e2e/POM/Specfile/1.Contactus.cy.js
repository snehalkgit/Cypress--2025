//POM (Page Object Model) in cypress is a design pattern used to create an object repository for web elements.
//It helps in maintaining, scaling, and reusing test automation code by separating the test logic from the page structure.

///<reference types = "cypress"/>

import homepage from "../Pages/1.Contactus"
import userdata from "../../../fixtures/FixData.json"
import userdata2 from "../../../fixtures/Fixdata1.json"


describe('verify contact us page using POM pattern',()=>{
    let hp = new homepage()
    it('verify contact us from fixdata1',()=>{
        hp.visiturl()
        hp.contactUspage(userdata2)
    })

    userdata.forEach((el) => {
        it(`verify contact us from fixdata2 for user${el.fn}`,()=>{
            hp.visiturl()
            hp.contactUspage(el)

        })
        
    })
})