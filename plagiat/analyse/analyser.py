
from io import BytesIO
from PyPDF2 import PdfFileReader

import requests

from .comparing import documentSimilarity

class Analyser:
    def __init__(self, text, links):
        self.data = []
        self.links = links
        self.text = text

    def detect_similarity(self):
        dico = {}
        for link in self.links:
            print(link)
            score = documentSimilarity(self.text, self.open_web_file(link['link']))
            dico['title'] = link['title']
            dico['link'] = link['link']
            dico['score'] = score
            self.data.append(dico)
    
    def open_web_file(self, link):
        text = ""
        response = requests.get(link)
        memoryfile = BytesIO(response.content)
        doc = PdfFileReader(memoryfile)
        for page in doc.pages:
            text += page.extractText()
        return text