#!/bin/bash
cd ~/pontos/
mv cypress/e2e/* cypress/
mv cypress/cme.cy.js cypress/e2e/
npm install

i=1

while [[ $i -lt 40 ]] 
do
        npm start
        if [ "$?" == '0' ]
           then
           if [ -s "arquivos/cme-open.txt" ]; then
                python3 pys/cme-abertura.py
                python3 pys/cme-high.py
                python3 pys/cme-low.py
           break
           fi
        fi
        echo "$i tentativa(s)"
((i++))
done
echo "$i tentativa(s)" >  logs/cme.log