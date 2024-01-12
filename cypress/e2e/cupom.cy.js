/// <reference types="cypress" />


describe('Login to cupom', function (){

 it('get text using text method option 2', function(){
    cy.visit('https://sistemaswebb3-derivativos.b3.com.br/financialIndicatorsPage/')

    cy.get(':nth-child(3) > .col > :nth-child(2) > .mb-2').then(function(text3){
        cy.log(text3.text())
        cy.writeFile('cupom.txt', text3.text(), {flag: "a+"})
     })
     cy.get(':nth-child(4) > .col > :nth-child(2) > .mb-2').then(function(text4){
        cy.log(text4.text())
        cy.writeFile('cupom.txt', text4.text(), {flag: "a+"})
    })
    cy.get(':nth-child(5) > .col > :nth-child(2) > .mb-2').then(function(text5){
        cy.log(text5.text())
        cy.writeFile('cupom.txt', text5.text(), {flag: "a+"})
    })
 })
 
})
