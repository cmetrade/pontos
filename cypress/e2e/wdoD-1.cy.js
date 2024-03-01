/// <reference types="cypress" />

describe('WDOH - Abertura D -1', function (){
    it('capturar dados de abertura wdo', function(){
        cy.visit('https://br.advfn.com/bolsa-de-valores/bmf/WDOJ24/historico')
       
        cy.get(':nth-child(8) > table > tbody > :nth-child(3) > :nth-child(2)').then(function(text2){
              cy.log(text2.text())
              cy.writeFile('arquivos/wdoD-1.txt', text2.text())
        })
          
    })
})