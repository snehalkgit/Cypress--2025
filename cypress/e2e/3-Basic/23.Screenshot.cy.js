///<reference types="cypress" />


describe('verify file upload in cypress', () => {
    it('verify file uploadn in cypress ', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.wait(2000)
        cy.screenshot('page')
        cy.get('a#nava').screenshot('logo')
    })

    it.only('verify  contact us form page data in cypress2 ', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name = "first_name"]').type('snehal')
        cy.get('[name="last_name"]').type('kamble')
        cy.get('[name="email"]').type('snehal1564@gmail.com')
        cy.get('[name="message"]').type('hi , how are you girlll ')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })
})
//videos will be captured only by run command of click

//npx cypress run --spec cypress/e2e/3-basics/23.Screenshot.cy.js --headed --browser edge


