#!/bin/bash
cd ~/pontos
mv cypress/e2e/* cypress/
mv cypress/wdo-fecha.cy.js cypress/e2e/
npm install

i=1

while [[ $i -lt 11 ]] 
do
        npm start
        if [ "$?" == '0' ]
           then
           if [ -s "arquivos/wdo-fecha.txt" ]; then
           break
           fi
        fi
echo "$i tentativa(s)"
echo "$i tentativa(s)" > logs/wdo-fecha.log
((i++))
done
