import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

class PythonOrgSearch(unittest.TestCase):
    def setUp(self):
        service  = Service(executable_path=r"E:\Web\driver\geckodriver-v0.33.0-win64\geckodriver.exe" )
        options = webdriver.FirefoxOptions()
        self.driver = webdriver.Firefox(service=service, options=options)

    def test_serarch_in_python_org(self):
        driver = self.driver
        driver.get("http://localhost:3000/my-profile")
        self.assertIn("Jared Larios | Resume", driver.title)
        elem = driver.find_element(By.XPATH , '//*[@id="root"]/div[1]/div/div[2]').click()
        #elem.send_keys("manchester united")
        #elem.send_keys(Keys.ENTER)
        self.assertNotIn("No result found.", driver.page_source)

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()