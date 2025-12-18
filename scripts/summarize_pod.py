'''
Author: Ivan Torriani
Description: Summarize a podcast with ollama. Assumes that the podcast already exists.
'''

#Imports---------------------------------
from ollama import chat 
from ollama import ChatResponse
import time
#Imports---------------------------------

def summarize_pod():

    #Read the podcast transcript
    with open("public/episodes/transcripts/" + time.strftime("%Y-%m-%d") + ".txt", 'r') as f:
        transcript = f.read()

    #Get the response
    response: ChatResponse = chat(model='gemma3', messages=[
        {
            "role": "system",
            "content": "Your job is to summarize the biggest developments of long news podcast trancripts."
            "You must pick at most 5 developing stories."
            "You must organize them according to their place"
            "Output only in this exact format: \n\n"
            "New York: 2008 Wall Street Financial Meltdown"
            "London: Brexit Referendum Triggers UK–EU Divorce"
            "Beijing: Rapid Military Buildup Reshapes Asia–Pacific Balance"
            "Kyiv: Russian Invasion Spurs Full-Scale European Security Crisis"
            "Tokyo: Fukushima Nuclear Disaster Sparks Global Energy Reckoning""
        },
        {
            "role": "user",
            "content": ""
        }
    ])