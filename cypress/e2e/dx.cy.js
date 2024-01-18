/// <reference types="cypress" />


describe('DX', function (){
   Cypress.config('defaultCommandTimeout', 50000);
    it('DX', function(){

        cy.visit("https://br.investing.com/currencies/us-dollar-index")

        
        //cy.visit('https://br.investing.com/currencies/us-dollar-index-historical-data')
        
        
            cy.get('.pid-8827-low').then(function(text1){
                cy.log(text1.text())
                cy.writeFile('arquivos/dx-min.txt', text1.text())
           })

           cy.get('.pid-8827-high').then(function(text2){
            cy.log(text2.text())
            cy.writeFile('arquivos/dx-max.txt', text2.text())
           })

           cy.get('.bold > :nth-child(1) > [dir="ltr"]').then(function(text3){
            cy.log(text3.text())
            cy.writeFile('arquivos/dx-fechamento.txt', text3.text())
           })
    
    })
})