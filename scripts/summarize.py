'''
Author: Ivan Torriani
Description: Summarize a podcast with ollama. Assumes that the podcast already exists.
'''

#Imports---------------------------------
from ollama import chat 
from ollama import ChatResponse
from summrize_podv2 import summarize_pod
import time
#Imports---------------------------------

def organize_sum():

    #Read the podcast transcript
    with open("public/episodes/transcripts/" + time.strftime("%Y-%m-%d") + ".txt", 'r') as f:
        transcript = f.read()
    
    #Shorten transcript
    transcript = transcript[:600]
    
    transcript_summarized = summarize_pod(transcript)

    #Get the response
    response: ChatResponse = chat(model='phi3.5:latest', messages=[
        {
            "role": "user",
            "content": 
            """
            You will be given a summarized text blob. Your job is to extract all the important 
            information and summarize it within 3 sentences. Do not make the summary more than 3 sentences 
            under any circumstance.

            Here is the content:""" + transcript_summarized 
        }
    ])

    print(response['message']['content'])


if __name__ == "__main__":
    organize_sum()


