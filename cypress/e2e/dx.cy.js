/// <reference types="cypress" />


describe('Login to investing and get DX', function (){

    it('capturar dados dx', function(){
        cy.visit('https://br.investing.com/currencies/us-dollar-index')
        cy.get(':nth-child(3) > [dir="ltr"]').then(function(text2){
                cy.log(text2.text())
                cy.writeFile('dx.txt', text2.text())
           })
           cy.once("fail", (err) =>
           {
               return false;
           });
    })
})