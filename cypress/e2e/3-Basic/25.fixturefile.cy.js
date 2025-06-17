///<reference types="cypress" />
import data from "../../fixtures/Data.json"
import user from "../../fixtures/FixData.json"

describe("verify contact us page", function () { //suite
    it("verify contact us page for valid data", function () {  //test case
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type(data.fn)
        cy.get('[name="last_name"]').type(data.ln)
        cy.get('[name="email"]').type(data.email)
        cy.get('[name="message"]').type(data.msg)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })


    it("verify contact us page for valid data", function () {  //test case
        user.forEach(user => {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(user.fn)
            cy.get('[name="last_name"]').type(user.ln)
            cy.get('[name="email"]').type(user.email)
            cy.get('[name="message"]').type(user.msg)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })


    user.forEach((el,index )=> {
        it(`verify contact us page for valid data set ${index+1} : ${el.fn} `, function () {  //test case

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(el.fn)
            cy.get('[name="last_name"]').type(el.ln)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.msg)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
})