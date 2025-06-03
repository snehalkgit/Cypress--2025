/// <reference types = 'cypress' />

describe('verify nested  iframe in cypress',()=>{
it('verify nested iframe in cypress',()=>{
    cy.visit('https://ui.vision/demo/webtest/frames/')

    cy.get('frame').should('have.length',5)

cy.iframe('[src="frame_1.html"]').find('[name ="mytext1"]').type('snehal')
cy.wait(3000)

cy.iframe('frame[src="frame_3.html"]').then($parentframe =>{
    cy.wait(2000)
    cy.wrap($parentframe).find('iframe').wait(2000).then($childframe=>{
        cy.wait(2000)
        const childframebody = $childframe[0].contentDocument.body;
        cy.wrap(childframebody).find('[id="16"]').click()

    })
})
})

it('example 3',()=>{
    cy.visit('https://ui.vision/demo/webtest/frames/')
    //count of frames

    cy.get('frame').should('have.length',5)
    cy.getiframebody('frame[src ="frame_1.html"]').find('[name = "mytext1"]').type('snehal')
    cy.getiframbody('frame[src ="frame_3.html"]').then($parentbody=>{
        cy.wrap($parentbody).find('iframe').then($childiframe =>{
            const childbody = $childiframe[0].contentDocument.body
            cy.wrap(childbody).find('[id="16"]').click()
        })
    })
})
})