/// <reference types="cypress" />


describe('Login to investing and get DX', function (){
    Cypress.config('defaultCommandTimeout', 10000);
    it('capturar dados dx', function(){
        cy.visit('https://br.investing.com/currencies/us-dollar-index-historical-data')
        
        
            cy.get('.pid-8827-low').then(function(text1){
                cy.log(text1.text())
                cy.writeFile('dx-min.txt', text1.text())
           })

           cy.get('.pid-8827-high').then(function(text2){
            cy.log(text2.text())
            cy.writeFile('dx-max.txt', text2.text())
           })
           /*
           cy.once("fail", (err) =>
           {
               return false;
           });
           */
    })
})