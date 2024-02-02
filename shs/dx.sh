#!/bin/bash
cd ~/pontos
mv cypress/e2e/* cypress/
mv cypress/dx.cy.js cypress/e2e/
npm install

i=1

while [[ $i -lt 60 ]] 
do
        npm start
        if [ "$?" == '0' ]; then
           if [ -s "arquivos/dx-fechamento.txt" ]; then
              python3 pys/dx-alta.py
              python3 pys/dx-baixa.py 
           break
           fi
        fi
echo "$i tentativa(s)"
echo "$i tentativa(s)" > logs/dx.log
((i++))
done
#33
