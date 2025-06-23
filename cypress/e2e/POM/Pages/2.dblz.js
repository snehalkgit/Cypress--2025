export default class myclass {
    selectors ={
        url:'https://www.demoblaze.com/index.html#',
        //new user sign up 

        newusersignbtn :'#Signin2',
        newusername : '#sign-username',
        newuserpassword : '#sign-password',
        newusersignbtn : '[onclick = "register()"]',
         //existiong user login
        userLoginBtn : '#login2',
        userNameInput : "#loginusername",
        userPasswordInput : "#loginpassword",
        loginBtn : '[onclick="logIn()"]',
        //verify login
        logoutBtn : '#logout2',
        nameOfUser : '#nameofuser',
            //catogeries
        // phoneBtn : '[onclick="byCat("phone")"]',
        // monitorBtn : '[onclick="byCat("Laptop")"]',
        // laptopBtn : '[onclick="byCat("monitor")"]'

phoneBtn: '[onclick="byCat(\'phone\')"]',
    monitorBtn: '[onclick="byCat(\'monitor\')"]',
    laptopBtn: '[onclick="byCat(\'notebook\')"]'
    }

    VisitUrl(){
        cy.visit(this.selectors.url)
    }


    login(un,pw){
        cy.get(this.selectors.userLoginBtn).click()
        cy.get(this.selectors.userNameInput).clear().type(un)
        cy.get(this.selectors.userPasswordInput).type(pw)
        cy.get(this.selectors.loginBtn).click()
        cy.get(this.selectors.loginBtn).should('be.visible')
        cy.get(this.selectors.nameOfUser).should('contain',un)


    }
    addToCart(productType, productList) {
  // Visit the homepage
  cy.get('li [href="index.html"]').click();
  cy.wait(1000);
    if (productType === 'phone') {
      cy.get(this.selectors.phoneBtn).click();
    } else if (productType === 'laptop') {
      cy.get(this.selectors.laptopBtn).click();
    } else if (productType === 'monitor') {
      cy.get(this.selectors.monitorBtn).click();
    }

  
  }

  emptyCart() {
  cy.get('#cartur').click(); // Navigate to Cart page
  cy.wait(2000);

  // Loop through all delete buttons
  cy.get.contains('Delete').then(($btns) => {
    const count = $btns.length;
    for (let i = 0; i < count; i++) {
      cy.get.contains('Delete').first().click();
      cy.wait(1000);
    }
  });
}

}
    