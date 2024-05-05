import string
import sys
import pandas as pd

#Sentiment analysis 

#Approach 1: VADER - Sums connotations of each singular word
#Approach 2: HuggingFace
#Both of these approaches just give a pos/neg score not actual emotion


#Check similarity to stuff already in the database before inserting

lines = []
with open(sys.argv[1],'r')as quotes:
    df = pd.read_csv(quotes)
    for i in df.index:
        (line,emotion) =df.loc[i] 
        line = line.replace('\"','\\\"')
        #cleaned = line.lower().translate(str.maketrans('','',string.punctuation))
        #words = cleaned.split()
        #emotion = sentiment(line)
        lines.append((line,emotion))
outputs = []
with open('docs.json','w')as docs:
    for entry in lines[:-1]:
        output = "{"+f" \"content\" : \"{entry[0]}\", \"emotion\" : \"{entry[1]}\" "+"},\n"
        outputs.append(output)
        docs.write(output)
    
    output = "{"+f" \"content\" : \"{lines[-1][0]}\", \"emotion\" : \"{lines[-1][1]}\" "+"}\n"
    outputs.append(output)
    docs.write(output)
#sys.stdout.flush()
