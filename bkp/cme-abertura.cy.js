/// <reference types="cypress" />
describe('CME -  Abertura', function (){
  //Cypress.config('defaultCommandTimeout', 700);
  
      it('capturar dados cme Abertura investing', function(){
         
        cy.visit('https://www.cmegroup.com/markets/fx/emerging-market/brazilian-real.quotes.html')
     
              //high
              cy.get('[data-test="open"] > .key-info_dd-numeric__ZQFIs > :nth-child(2)').then(function(text2){
              cy.log(text2.text())
              cy.writeFile('arquivos/cme-open.txt', text2.text())
              })
          })
          })
  
     