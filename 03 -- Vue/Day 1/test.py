import time
from selenium import webdriver
from bs4 import BeautifulSoup

driver = webdriver.Chrome(executable_path=r'/Users/sukibayashi/Documents/python webdriver/chromedriver') # chrome瀏覽器
time.sleep(3)
driver.get('https://www.youtube.com/')

for i in range(10):  # 進行十次
    driver.execute_script('window.scrollTo(0, document.querySelector("ytd-app").clientHeight);')  # 重複往下捲動,并用clentHeight抓到网页的整体高度
    time.sleep(1)  # 每次執行打瞌睡一秒

pageSource = driver.page_source

# 以 Beautiful Soup 解析 HTML 程式碼(BeautifulSoup最重要的程式码)
soup = BeautifulSoup(pageSource, 'html.parser')#解析器接手
results = soup.select('#video-title.ytd-rich-grid-video-renderer')
for item in results:
  # 輸出超連結網址
  print(item.text)

driver.close()  # 關閉瀏覽器