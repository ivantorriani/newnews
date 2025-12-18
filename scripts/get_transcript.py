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
FOLDER="public/episodes/bbc"
EPISODE_PATH = FOLDER+"/"+DATE+FILETYPE
#Constants---------------------------------

def get_transcript():

    model = whisper.load_model("turbo")

    result = model.transcribe(EPISODE_PATH)

    with open("public/episodes/transcripts/"+DATE+".txt", 'w') as f:
        f.write(result['text'])

if __name__ == "__main__":
    get_transcript()