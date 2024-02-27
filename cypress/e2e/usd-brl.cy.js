/// <reference types="cypress" />
describe('USD-BRL', function (){

    it('USD-BRL', function(){
       cy.visit('https://br.investing.com/currencies/usd-brl-historical-data')


            // LINHA 1
            //abertura 
            cy.get('.p-0 > .w-full > tbody > :nth-child(1) > :nth-child(3)').then(function(text1){
            cy.log(text1.text())
            cy.writeFile('arquivos/linha1-usd-brl-abertura.txt', text1.text(), {flag: "a+"})
            })

            //maxima 
            cy.get('.p-0 > .w-full > tbody > :nth-child(1) > :nth-child(4)').then(function(text2){
            cy.log(text2.text())
            cy.writeFile('arquivos/linha1-usd-brl-max.txt', text2.text(), {flag: "a+"})
            })

            //minima 
            cy.get('.w-full > tbody > :nth-child(1) > :nth-child(5)').then(function(text3){
            cy.log(text3.text())
            cy.writeFile('arquivos/linha1-usd-brl-min.txt', text3.text(), {flag: "a+"})
            })

            //data
            cy.get(':nth-child(1) > .text-left > time').then(function(text4){
            cy.log(text4.text())
            cy.writeFile('arquivos/linha1-usd-brl-data.txt', text4.text(), {flag: "a+"})
            })
            

            // LINHA 2
            //abertura 
            cy.get('.p-0 > .w-full > tbody > :nth-child(2) > :nth-child(3)').then(function(text5){
            cy.log(text5.text())
            cy.writeFile('arquivos/linha2-usd-brl-abertura.txt', text5.text(), {flag: "a+"})
            })

            //maxima 
            cy.get('.p-0 > .w-full > tbody > :nth-child(2) > :nth-child(4)').then(function(text6){
            cy.log(text6.text())
            cy.writeFile('arquivos/linha2-usd-brl-max.txt', text6.text(), {flag: "a+"})
            })

            //minima 
            cy.get('.w-full > tbody > :nth-child(2) > :nth-child(5)').then(function(text7){
            cy.log(text7.text())
            cy.writeFile('arquivos/linha2-usd-brl-min.txt', text7.text(), {flag: "a+"})
            })

            //data
            cy.get(':nth-child(2) > .text-left > time').then(function(text8){
            cy.log(text8.text())
            cy.writeFile('arquivos/linha2-usd-brl-data.txt', text8.text(), {flag: "a+"})
            }) 

            //LINHA 3
            //abertura 
            cy.get('.p-0 > .w-full > tbody > :nth-child(3) > :nth-child(3)').then(function(text6){
            cy.log(text6.text())
            cy.writeFile('arquivos/linha3-usd-brl-abertura.txt', text6.text(), {flag: "a+"})
            })

            //maxima 
            cy.get('.p-0 > .w-full > tbody > :nth-child(3) > :nth-child(4)').then(function(text7){
            cy.log(text7.text())
            cy.writeFile('arquivos/linha3-usd-brl-max.txt', text7.text(), {flag: "a+"})
            })

            //minima 
            cy.get('.w-full > tbody > :nth-child(3) > :nth-child(5)').then(function(text8){
            cy.log(text8.text())
            cy.writeFile('arquivos/linha3-usd-brl-min.txt', text8.text(), {flag: "a+"})
            })

            //data
            cy.get(':nth-child(3) > .text-left > time').then(function(text9){
            cy.log(text9.text())
            cy.writeFile('arquivos/linha3-usd-brl-data.txt', text9.text(), {flag: "a+"})
            })     
    })
})
   