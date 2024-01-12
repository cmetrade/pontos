/// <reference types="cypress" />


describe('Login to investing', function (){

    it('capturar dados xau', function(){
        cy.visit('https://br.advfn.com/bolsa-de-valores/bmf/WDOG24/cotacao')
        
            cy.get('#quoteElementPiece13').then(function(text2){
               cy.log(text2.text())
               cy.writeFile('fechamentoWDO.txt', text2.text())
           })
           
    })
})