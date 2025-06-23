export default class mypage{

    selectors = {
        url : 'https://webdriveruniversity.com/Contact-Us/contactus.html',
        firstnamecss :'[name = "first_name"]',
        lastnamecss : '[name = "last_name"]',
        emailcss : '[name ="email"]',
        msgcss : '[name ="message"]',
        submitbtn :'[type =  "submit"]',

        //assertion

        successfulcss : 'h1',
        successMsg : 'Thank You for your Message!'
    }

    visiturl(){
        cy.visit(this.selectors.url)
    }

    contactUspage(userdata){
        cy.get(this.selectors.firstnamecss).type(userdata.fn)
        cy.get(this.selectors.lastnamecss).type(userdata.ln)
        cy.get(this.selectors.emailcss).type(userdata.email)
        cy.get(this.selectors.msgcss).type(userdata.msg)
        cy.get(this.selectors.submitbtn).click()
        cy.get(this.selectors.successfulcss).should('have.text',this.selectors.successMsg)



    }
}