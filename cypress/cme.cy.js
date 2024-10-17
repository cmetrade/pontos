/// <reference types="cypress" />
describe('CME', function (){
//Cypress.config('defaultCommandTimeout', 700);

    it('capturar dados cme yahoo', function(){
       
      cy.visit('https://in.tradingview.com/symbols/CME-6L1!/contracts/')
        
            //high
            cy.get('[data-rowkey="CME:6LX2024"] > :nth-child(6)').then(function(text2){
            cy.log(text2.text())
            cy.writeFile('arquivos/cme-high.txt', text2.text())
            })

            //low
            cy.get('[data-rowkey="CME:6LX2024"] > :nth-child(7)').then(function(text3){
            cy.log(text3.text())
            cy.writeFile('arquivos/cme-low.txt', text3.text())
            })

        })
        })

   