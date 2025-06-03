
///<reference types="cypress" />

describe("verify contact us page",()=>{ //suite
    it("verify page for valid data",()=>{
        //AAA Arengenemts, Actions, Assertions
        //Arengenemts
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

        //Actions, 
        cy.get('[name="first_name"]').type("snehal")
        cy.get('[name="last_name"]').type('kamble')
        cy.get('[name="email"]').type('snehal@gmail.com')
        cy.get('[name="message"]').type('hi, how are you')
        cy.get('[type="submit"]').click()

        //Assertions
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it("verify contact us page for in-valid data", () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('dipanshu')
        cy.get('[name="last_name"]').type('chawde')
        cy.get('[name="email"]').type('dipanshu')
        cy.get('[name="message"]').type('hi , how are you')
        cy.get('[type="submit"]').click()
        cy.contains('Error: Invalid email address').should('be.visible')
    })

    it("verify contact us page for in-complete data", () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('snehal')
        cy.get('[name="last_name"]').type('kamble')
        cy.get('[name="email"]').type('snehal@gamil.com')
        
        cy.get('[type="submit"]').click()
        cy.contains('Error: all fields are required').should('be.visible')
    })

    it("verify contact us page for in-complete data", () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('snehal')
        cy.get('[name="last_name"]').type('kamble')
        cy.get('[name="email"]').type('snehal@gamil.com')
        cy.get('[name="message"]').type('hi , how are you')
        cy.get('[type="reset"]').click()
       
        cy.get('[name="first_name"]').should('have.text',"")
        cy.get('[name="last_name"]').should('have.text',"")
        cy.get('[name="email"]').should('have.text',"")
        cy.get('[name="message"]').should('have.text',"")
       
})
})