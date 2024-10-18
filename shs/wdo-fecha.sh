#!/bin/bash
cd ~/pontos
mv cypress/e2e/* cypress/
mv cypress/wdo-fecha.cy.js cypress/e2e/
cp  ~/pontos/package-wdofecha.json ~/pontos/package.json
npm install

i=1

while [[ $i -lt 10 ]] 
do
        npm start
        if [ "$?" == '0' ]
           then
           if [ -s "arquivos/wdo-fecha.txt" ]; then
           ./shs/ajuste-package-json.sh
           break
           fi
        fi
echo "$i tentativa(s)"
((i++))
done
~/pontos/shs/ajuste-package-json.sh
echo "$i" > logs/wdo-fecha.log
