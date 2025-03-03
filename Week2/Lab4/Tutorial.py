import requests
import bs4

URL = "https://en.wikipedia.org/wiki/Duke_Kunshan_University"

response = requests.get(URL)

# Check if the request was successful
if response.status_code == 200:
    html_content = response.content
else:
    print("Failed to retrieve the webpage")

soup = bs4.BeautifulSoup(html_content, 'html.parser')
soup