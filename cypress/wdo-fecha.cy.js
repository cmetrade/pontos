/// <reference types="cypress" />


describe('WDO', function (){
    //Cypress.config('defaultCommandTimeout', 100000);
    it('capturar dados wdo', function(){
        
        const dayjs = require('dayjs')
        const mes = dayjs().format('M')
        const ano = dayjs().format('YY')

        const object1 = {
            a: 'F',
            b: 'G',
            c: 'H',
            d: 'J',
            e: 'K',
            f: 'M',
            g: 'N',
            h: 'Q',
            i: 'U',
            j: 'V',
            k: 'X',
            l: 'Z',
          };
          
        var letra = Object.values(object1)[mes] 
     
       cy.visit(`https://br.advfn.com/bolsa-de-valores/bmf/WDO${letra}${ano}/historico`)
       // cy.visit('https://br.advfn.com/bolsa-de-valores/bmf/WDOM24/historico')
            
        
            cy.get('[comp-id="164"]').then(function(text2){ 
                   
               cy.log(text2.text())
               cy.writeFile('arquivos/wdo-fecha.txt', text2.text())
          
        
        })
    })
})