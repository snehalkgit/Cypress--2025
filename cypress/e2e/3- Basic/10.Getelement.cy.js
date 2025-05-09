///<reference types='cypress'/> 

const { ROOT_SELECTOR } = require("cypress/mount-utils")

describe('get text by element',()=>{
    it('get text of element ex.1',()=>{
        cy.visit('https://www.google.co.in')
        cy.get('[class="RNmpXc"]').invoke('text').then((txt)=>{
            cy.log(txt)
        })
    })

    it('get text of elememnt ex.2',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('[title = "Flipkart"]').then((selector)=>{
            cy.log(selector.text)
        })
    })
    it('get text of element ex.3',()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('div.caption >h4').eq(2).then(($selector)=>{
            cy.log($selector.text())

        })
    })
    it.only('get text of element ex.4',()=>{
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[data-uniqid="1621702280245"]').should('have.text','Practice Page')
        cy.get('[data-uniqid="1621702280245"]').invoke('text').then(elementText =>{
         expect(elementText).to.eq('Practice Page')
    })
})
})