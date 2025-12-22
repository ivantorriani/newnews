'''
Author: Ivan Torriani
Description: Combine all functionality
'''

#Imports---------------------------------
from get_audio import get_audio 
from get_transcript import get_transcript
import time 
#Imports---------------------------------


if __name__ == "__main__":
    get_audio()
    get_transcript()
    print(time.strftime("%Y-%m-%d"))

