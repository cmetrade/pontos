/// <reference types="cypress" />

describe('WDOG - Abertura D -1', function (){

    it('capturar dados de abertura wdo', function(){
        cy.visit('https://br.investing.com/currencies/usd-brl-bmf-futures')
        
        cy.get(':nth-child(4) > .float_lang_base_2').then(function(text2){
               cy.log(text2.text())
               cy.writeFile('arquivos/abertura_D-1_WDO.txt', text2.text())
           })
          
    })
})