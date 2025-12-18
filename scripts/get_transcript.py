'''
Author: Ivan Torriani
Description: Transate .mp3 files into .txt file transcripts
'''

#Imports---------------------------------
import whisper
import time
#Imports---------------------------------

#Constants---------------------------------

FILETYPE = '.mp3'
DATE = time.strftime("%Y-%m-%d")
FOLDER="episodes/bbc"
EPISODE_PATH = FOLDER+"/"+DATE+FILETYPE
#Constants---------------------------------

if __name__ == "__main__":

    model = whisper.load_model("turbo")

    result = model.transcribe(EPISODE_PATH)

    with open("episodes/transcripts/"+DATE+".txt", 'w') as f:
        f.write(result['text'])

