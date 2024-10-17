#!/bin/bash
cd ~/pontos-web
mv cypress/e2e/* cypress/
mv cypress/cme-abertura.cy.js cypress/e2e/

i=1

while [[ $i -lt 5 ]] 
do
        npm install
        npm start
        if [ "$?" == '0' ]
           then
           if [ -s "arquivos/cme-open.txt" ]; then
                touch arquivos/cme-abertura.txt
                python3 pys/cme-abertura.py
           break
           fi
        fi
echo "$i tentativa(s)"
((i++))
done

echo "$i" >  logs/cme.log
