#!/bin/bash
cd ~/pontos
dir=`date '+%Y-%m-%d'`
echo $dir
mkdir  arquivos/$dir
mv arquivos/*.txt arquivos/$dir