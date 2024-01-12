/// <reference types="cypress" />
describe('Login to investing', function (){

    it('capturar dados usd-brl', function(){
       cy.visit('https://br.investing.com/currencies/usd-brl-historical-data')

            //abertura 
            cy.get('.p-0 > .w-full > tbody > :nth-child(1) > :nth-child(3)').then(function(text1){
            cy.log(text1.text())
            cy.writeFile('usd-brl-abertura.txt', text1.text(), {flag: "a+"})
            })

            //maxima 
            cy.get('.p-0 > .w-full > tbody > :nth-child(1) > :nth-child(4)').then(function(text2){
            cy.log(text2.text())
            cy.writeFile('usd-brl-max.txt', text2.text(), {flag: "a+"})
            })

            //minima 
            cy.get('.w-full > tbody > :nth-child(1) > :nth-child(5)').then(function(text3){
            cy.log(text3.text())
            cy.writeFile('usd-brl-min.txt', text3.text(), {flag: "a+"})
            })

    })
})
   