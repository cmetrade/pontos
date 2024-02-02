#!/bin/bash
cd ~/pontos
mv cypress/e2e/* cypress/
mv cypress/usd-brl.cy.js cypress/e2e/
npm install

i=1

while [[ $i -lt 11 ]] 
do
        npm start
        if [ "$?" == '0' ]
           then
           if [ -s "arquivos/usd-brl-abertura.txt" ];then
           python3 pys/usd-brl.py
           break
           fi
        fi
echo "$i tentativa(s)"
((i++))
done
echo "$i tentativa(s)" > logs/usd-brl.log
