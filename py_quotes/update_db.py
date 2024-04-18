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
        (line,source,emotion) =df.loc[i] 
        #cleaned = line.lower().translate(str.maketrans('','',string.punctuation))
        #words = cleaned.split()
        #emotion = sentiment(line)
        lines.append((emotion,source,line))
outputs = []
with open('docs.json','w')as docs:
    for entry in lines[:-1]:
        output = "{"+f" \"emotion\" : \"{entry[0]}\", \"source\" : \"{entry[1]}\", \"content\" : \"{entry[2]}\" "+"},\n"
        outputs.append(output)
        docs.write(output)
    
    output = "{"+f" \"emotion\" : \"{lines[-1][0]}\", \"source\" : \"{lines[-1][1]}\", \"content\" : \"{lines[-1][2]}\" "+"}\n"
    outputs.append(output)
    docs.write(output)
#sys.stdout.flush()
