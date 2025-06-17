///<reference types="cypress" />

describe("verify contact us page", function () { //suite
    it("verify contact us page for valid data", function () {  //test case
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('snehal')
        cy.get('[name="last_name"]').type('kamble')
        cy.get('[name="email"]').type('snehal@gmail.com')
        cy.get('[name="message"]').type('i am learning cypress')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it("verify contact us page for valid data with fixture", function () {  //test case

        cy.fixture("Data").then((el) => {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(el.fn)
            cy.get('[name="last_name"]').type(el.ln)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.msg)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })

    it("verify contact us page for valid data with fixture array", function () {  //test case

        cy.fixture("FixData").then((data) => {
            data.forEach(el => {
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


})

// data = {
//     "fn" : "dipanshu",
//     "ln" : "chawde",
//     "email" : "dipanshu@gmail.com",
//     "msg" : "cypress"
// }