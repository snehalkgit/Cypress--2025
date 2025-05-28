

/// <reference types = 'cypress' />

describe('verify tables in cypress', () => {

  function calculateAge(tableId, totalSum) {
    let sum = 0
    cy.get(`${tableId} > tbody >tr`).not(':first').each((rows) => {
      sum += Number(rows.find('td').last().text())
    }).then(() => {
      //cy.log(sum)
      expect(sum).to.eq(totalSum)
    })
  }

  it.only('verify table 1 in cypress', () => {
    cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')

    let sum = 0
    cy.get('#t01 > tbody >tr').not(':first').each((rows) => {
      //select 2nd column data
      cy.log(rows.find('td').eq(1).text())

      //print all column data
       cy.wrap(rows).find('td').each(td=>{
        cy.log(td.text())
      })

      sum += Number(rows.find('td').last().text())
    }).then(() => {
      //cy.log(sum)
      expect(sum).to.eq(159)
    })
  })

  it('verify table 2 in cypress', () => {
    cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')

    let sum = 0
    cy.get('#t02 > tbody >tr').not(':first').each((rows) => {
      //select 2nd column data
      cy.log(rows.find('td').eq(1).text())

     // print all column data
      cy.wrap(rows).find('td').each(td=>{
        cy.log(td.text())
      })

      sum += Number(rows.find('td').last().text())
    }).then(() => {
      //cy.log(sum)
      expect(sum).to.eq(163)
    })

  })

  it('verify table 2 in cypress with function', () => {
    cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    calculateAge('#t02', 163)
    calculateAge('#t01', 159)
  })
})
