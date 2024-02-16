sudo apt updade
sudo apt install git
sudo apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
git clone https://github.com/cmetrade/pontos
cd pontos
rm -rf node_modules
sudo apt-get install curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install nodejs
sudo apt install python3
sudo apt install python3-pip -y
cd /usr/lib/python3.11
sudo rm EXTERNALLY-MANAGED
pip install --upgrade pandas
chmod +x shs/*