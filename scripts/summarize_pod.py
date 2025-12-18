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
    response: ChatResponse = chat(model='phi3.5:latest', messages=[
        {
            "role": "user",
            "content": "Your job is to summarize the biggest developments of long news podcast trancripts."
            "You must pick at most 5 developing stories."
            "You must organize them according to their place"
            "Output only in this exact format: \n\n"
            "New York: 2008 Wall Street Financial Meltdown\n"
            "London: Brexit Referendum Triggers UK–EU Divorce\n"
            "Beijing: Rapid Military Buildup Reshapes Asia–Pacific Balance\n"
            "Kyiv: Russian Invasion Spurs Full-Scale European Security Crisis\n"
            "Tokyo: Fukushima Nuclear Disaster Sparks Global Energy Reckoning\n"

            "Here is the transcript that you will summarize today: " + transcript
        }
    ])

    print(response['message']['content'])


if __name__ == "__main__":
    summarize_pod()