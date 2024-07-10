#!/bin/bash
#
cd ~/pontos
diff package.json package-orig.json

   if [ "$?" != '0' ]
   then
        mv package-orig.json package.json
   fi