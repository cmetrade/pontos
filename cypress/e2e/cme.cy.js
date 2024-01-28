/// <reference types="cypress" />
describe('CME', function (){
//Cypress.config('defaultCommandTimeout', 700);
    it('capturar dados cme yahoo', function(){

       cy.visit('https://finance.yahoo.com/quote/6LG24.CME/history?p=6LG24.CME')

            // open
            cy.get('tbody > :nth-child(1) > :nth-child(2) > span').then(function(text1){
            cy.log(text1.text())
            cy.writeFile('arquivos/cme-open.txt', text1.text())
            })
            
            //high
            cy.get('tbody > :nth-child(1) > :nth-child(3) > span').then(function(text2){
            cy.log(text2.text())
            cy.writeFile('arquivos/cme-high.txt', text2.text())
            })

            //low
            cy.get('tbody > :nth-child(1) > :nth-child(4) > span').then(function(text3){
            cy.log(text3.text())
            cy.writeFile('arquivos/cme-low.txt', text3.text())
            })

    })
})
   