# SingleFileSelenium

SingleFileSelenium is a modified version of SingleFile that allows for saving a webpage while using Selenium to control a browser. This extension is to be used with a non-headless browser. Meaning: the regular way of controlling a browser like Firefox or Chrome. So, while controlling Firefox with Selenium, you can communicate with this extension using Selenium to modify the page contents of the webpage you want to save.  

# Citation and Accreditation

This project is a fork of SingleFile by @gildas-lormeau whose project can be found here: https://github.com/gildas-lormeau/SingleFile Additionally, I want to give special thanks to: @gildas-lormeau for his efforts in helping me make this extension possible. The work @gildas-lormeau has done on this project can be viewed at this link: https://github.com/gildas-lormeau/SingleFile/issues/538

# How to Use

Notice: This extension has only been tested for Firefox. It may work with Chrome, but it has not yet been tested. So Documentation for Firefox below is the only documentation present as of late. 

# Using With Firefox & Selenium

This Python 3 code below can be utilized, along with the Selenium to control this extension. This function below interacts with the extension through Selenium to begin the process of saving the currently active tab/page. Simply place this code below in your Python script file for your program and call it using this command SingleFileSeleniumClickIt(driver). Keeping in mind that the variable "driver" will be replaced with whatever name you designate to the variable that points to the selenium web driver object you've created.

```
def SingleFileSeleniumClickIt(driver): # driver is for the Selenium webdriver object that has been intialized that must be passed to this function.
    import time
    # This extension returns True if it was able to initiate the page saving process and False if it was not able to intiate the page saving process. 
    try:
        driver.driver.session_id # This is just to test if the driver object sent was valid.
    except:
        print("The selenium driver object sent to function was invalid!")
        return False
    xpi=None
    xp=False
    for t in range(12):
        try:
            xpi=driver.find_element_by_id("KTVX1997PLUSONE")
            xp=True
            break
        except:
            time.sleep(3)
    if xp==False:
        print("Could not locate element id on current page: maybe extension is not installed in browser?")
        return False
    co = 0
    fo=False
    vow=""
    while co < 1200:
        co+=1
        try:
            if str(xpi.get_property('innerText')) in "ADE":
                fo=True
                vow=str(xpi.get_property('innerText'))
                break
            else:
                time.sleep(1)
        except:
            pass
    if fo==False:
        return False
    if vow=="E":
        print("There was an error in the extension saving the page.")
    for t in range(3):
        try:
            xpi.click()
            return True
        except:
            time.sleep(3)
    return False
```

For this extension to work, it must be installed in the Firefox browser you are controlling using Selenium. Most of you already know how to do this, but for those who don't, here below is an example command for installing this extension into your browser using Selenium. Using this command below, you can install the extension into the Firefox browser you are currently controlling using Selenium. Just make sure you replace this example path with the actual path to the extension stored on your computer.
```
driver.install_addon("C:\\Users\\Example\\Path\\To\\Extension\\singlefileselenium-1.0-fx.xpi")
```
For those of you who are new to Selenium, you can check out this page for more information on how to use it and what it does: https://selenium-python.readthedocs.io/getting-started.html 

All in all, there are not many technicalities to using this extension to save webpages. For example, you could use Selenium to determine what location Firefox would store downloaded files on the computer. Then, build additional code to listen to that directory for files that have been downloaded after a command has been sent to the extension to download the page using the code above. Last but not least, please keep in mind this extension has currently only been tested in Firefox. I will continue to work on this extension to make sure it will work with Chrome, and once that is verified, I will publish those changes. 

