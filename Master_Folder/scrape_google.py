from bs4 import BeautifulSoup as bs
from splinter import Browser
import os
import pandas as pd
import time


def init_browser():
     # Remember to change this path for your computer!!
    execute_path = {
        "executable_path": "C:/Users/chromedriver"}
    return Browser('chrome', **execute_path, headless=False)


def scrape(ui_formatted):
    browser = init_browser()
    google_data = {}

    url = "http://www.vgchartz.com/articles/?start=0&category_story=All&btn_submit=Search&q="
    browser.visit(url + ui_formatted)
    time.sleep(2)

    html = browser.html
    soup = bs(html, "html.parser")

    title_div = soup.find_all("div", class_="latest_article_text")[0]
    title = title_div.find("a", href=True).text
    link = title_div.find("a", href=True).get("href")
    google_data["Result_1"] = title
    google_data["Link_1"] = link

    title_div = soup.find_all("div", class_="latest_article_text")[1]
    title = title_div.find("a", href=True).text
    link = title_div.find("a", href=True).get("href")
    google_data["Result_2"] = title
    google_data["Link_2"] = link

    title_div = soup.find_all("div", class_="latest_article_text")[2]
    title = title_div.find("a", href=True).text
    link = title_div.find("a", href=True).get("href")
    google_data["Result_3"] = title
    google_data["Link_3"] = link

    title_div = soup.find_all("div", class_="latest_article_text")[3]
    title = title_div.find("a", href=True).text
    link =title_div.find("a", href=True).get("href")
    google_data["Result_4"] = title
    google_data["Link_4"] = link

    browser.quit()
    return google_data

