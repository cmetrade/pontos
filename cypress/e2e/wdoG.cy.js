/// <reference types="cypress" />


describe('WDOG24', function (){
    Cypress.config('defaultCommandTimeout', 60);
    it('capturar dados wdo', function(){
        cy.visit('https://br.advfn.com/bolsa-de-valores/bmf/WDOG24/cotacao')
            
        cy.get('#quoteElementPiece14').then(function(text2){
               cy.log(text2.text())
               cy.writeFile('arquivos/fechamentoWDO.txt', text2.text())
           })
           
    })
})