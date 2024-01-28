/// <reference types="cypress" />
describe('XAU ', function (){
    Cypress.config('defaultCommandTimeout', 400);
    it('capturar dados xau', function(){
       cy.visit('https://br.investing.com/currencies/xau-usd-historical-data')
            cy.get('tbody > :nth-child(1) > :nth-child(5)').then(function(text2){
                cy.log(text2.text())
                cy.writeFile('arquivos/xau-min.txt', text2.text(), {flag: "a+"})
           })
            cy.get('.p-0 > .w-full > tbody > :nth-child(1) > :nth-child(4)').then(function(text3){
                cy.log(text3.text())
                cy.writeFile('arquivos/xau-max.txt', text3.text(), {flag: "a+"})
            })
            cy.get(':nth-child(2) > .datatable_cell__LJp3C.font-normal').then(function(text4){
                cy.log(text4.text())
                cy.writeFile('arquivos/xau-fechamento.txt', text4.text(), {flag: "a+"})
            })
    })
})
   