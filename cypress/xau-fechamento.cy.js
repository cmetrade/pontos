/// <reference types="cypress" />
describe('XAU Fechamento', function (){
   
    it('capturar dados do fechamento do xau', function(){

        cy.visit('https://br.investing.com/currencies/xau-usd-historical-data')
        
        //cy.visit('https://br.advfn.com/bolsa-de-valores/pm/XAUUSD/historico')
            
        cy.get('.freeze-column-w-1 > tbody > :nth-child(2) > :nth-child(2)').then(function(text4){
                cy.log(text4.text())
                cy.writeFile('arquivos/xau-fechamento.txt', text4.text(), {flag: "a+"})
            })
               
    })
})
   