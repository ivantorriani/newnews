'''
Author: Ivan Torriani
Description: Get audio files from BBC website 
'''

#Imports---------------------------------
from bs4 import BeautifulSoup as bs 
from urllib.parse import urljoin 
import requests 
import os
import time
#Imports---------------------------------

#Constants---------------------------------
DOMAIN = 'https://www.bbc.co.uk'
URL = 'https://www.bbc.co.uk/programmes/p02nq0gn/episodes/downloads'
FILETYPE = '.mp3'
DATE = time.strftime("%Y-%m-%d")
FOLDER="public/episodes/bbc"
#Constants---------------------------------


def get_soup(url):
    return bs(requests.get(url).text, 'html.parser')

def get_audio():

    for link in get_soup(URL).find_all('a'):
        file_link = link.get('href')
        
        if not file_link: #skip over <a> with no href
            continue 
        if FILETYPE in file_link:
            print("First link: " + file_link)
            #Download the file
            with open(os.path.join(FOLDER,DATE+FILETYPE), 'wb') as file:
                response = requests.get(urljoin(URL, file_link))
                file.write(response.content)
            break 





