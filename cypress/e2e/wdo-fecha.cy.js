/// <reference types="cypress" />


describe('WDOH24', function (){
    //Cypress.config('defaultCommandTimeout', 100000);
    it('capturar dados wdo', function(){
        cy.visit('https://br.advfn.com/bolsa-de-valores/bmf/WDOM24/historico')
            
        cy.get(':nth-child(8) > table > tbody > :nth-child(2) > :nth-child(2)').then(function(text2){
               cy.log(text2.text())
               cy.writeFile('arquivos/wdo-fecha.txt', text2.text())
           })
        
    })
})