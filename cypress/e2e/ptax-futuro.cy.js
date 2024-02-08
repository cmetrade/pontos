/// <reference types="cypress" />

describe('PTAX-FUTURO', function (){
    it('capturar dados da última ptax-futuro', function(){
        cy.visit('https://br.investing.com/currencies/usd-brl-technical')
       
        cy.get('[data-test="instrument-price-last"]').then(function(text2){
              cy.log(text2.text())
              cy.writeFile('arquivos/ptax-futuro.txt', text2.text())
        })
        
    })
})