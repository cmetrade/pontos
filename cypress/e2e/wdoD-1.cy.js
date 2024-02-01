/// <reference types="cypress" />

describe('WDOG - Abertura D -1', function (){
    it('capturar dados de abertura wdo', function(){
        cy.visit('https://br.advfn.com/bolsa-de-valores/bmf/WDOG24/cotacao')
        
        cy.get('#quoteElementPiece10').then(function(text2){
              cy.log(text2.text())
              cy.writeFile('arquivos/abertura_D-1_WDO.txt', text2.text())
        })
          
    })
})