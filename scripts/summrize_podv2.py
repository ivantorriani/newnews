'''
Author: Ivan Torriani
Description: Use a model built for text summarization
to summarize stories. Also break up the long text 
to lighten load.
'''

#Imports---------------------------------
from transformers import pipeline
import time
#Imports---------------------------------



summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

def summarize_pod(podcast_transcript):
    
    return summarizer(podcast_transcript, max_length=130, min_length=30, do_sample=False)[0]["summary_text"]
