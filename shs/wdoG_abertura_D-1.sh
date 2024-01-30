#!/bin/bash
cd ~/pontos
mv cypress/e2e/* cypress/
mv cypress/wdoG-abertura_d-1_.cy.js cypress/e2e/
npm install

i=1

while [[ $i -lt 11 ]] 
do
        npm start
        if [ "$?" == '0' ]
           then
           if [ -s "arquivos/abertura_D-1_WDO.txt" ]; then
           break
           fi
        fi
echo "$i tentativa(s)"
echo "$i tentativa(s)" >logs/abertura_D-1_WDO.log
done
