#!/bin/bash
cd ~/pontos
mv cypress/e2e/* cypress/
mv cypress/cme.cy.js cypress/e2e/


i=1

while [[ $i -lt 5 ]] 
do
        npm install
        npm start
        if [ "$?" == '0' ]
           then
           if [ -s "arquivos/cme-high.txt" ]; then
                python3 pys/cme-high.py
                python3 pys/cme-low.py
           break
           fi
        fi
echo "$i tentativa(s)"
((i++))
done

echo "$i" >  logs/cme.log
