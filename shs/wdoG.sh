#!/bin/bash
cd ~/pontos
mv cypress/e2e/* cypress/
mv cypress/wdoG.cy.js cypress/e2e/
npm install

i=1

while [[ $i -lt 11 ]] 
do
        npm start
        if [ "$?" == '0' ]
           then
           if [ -s "arquivos/fechamentoWDO.txt" ]; then
           break
           fi
        fi
echo $i
((i++))
done
echo "$i tentativa(s)" >logs/fechamentoWDO.txt