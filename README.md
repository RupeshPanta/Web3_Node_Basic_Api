# Web3_Node_Basic_Api
-[x] Rupesh Panta

This is my baisc Api created with  Mongodb, Node and Express

# Goal
This is a simple Rest API that has CRUD functionality. I created this using Node, Mongodb as database and express as Server.
 

# Simple REST API
- Node rest api (CRUD)
    - [x] Post ---> Create
    - [x] Get  ---> REAd
    - [x] Patch ----> Update
    - [x] Delete --> Delete
- Real time modification with api



# To run this app
``` bash

open terminal
git clone this repo at first
Go to folder : Web3_Node_Basic_Api
type npm install 
type nodemon start run
server should run on localhost on port 9090
open postman and send api request

```
# About Different files:
- Check app.js for index page
- Check professors.js under routes for handeling different routes
- Check professors.js under models to see schemal/ model of my databas

# Tools you need:
-Download Mongodb Compass to analyze data visually and interact with database <br>
-Download Postman for testing Get, Post, Patch and Delete Functionality

# ScreenShots: 
![clean-test-build1.png](/screenshots/s.png)<br/> 
-Post method  - > Adding data to Database
![clean-test-build1.png](/screenshots/1addingram.png)<br/> 
Successfully added in Mongodb
![clean-test-build1.png](/screenshots/2.png)<br/> <br/> 
![clean-test-build1.png](screenshots/3.png)<br/> <br/> 
-Get Method -> Reading data from database
![clean-test-build1.png](screenshots/4.png)<br/> <br/> 
-Get Method with id -> Reading data by ID
![clean-test-build1.png](screenshots/5.png)<br/> <br/> 
-Patch method - >updating data <br>
-updating Castleton degree to PHD
![clean-test-build1.png](/screenshots/6.png)<br/> <br/> 
![clean-test-build1.png](screenshots/7.png)<br/> <br/>
-After patching, get method will display patched data
![clean-test-build1.png](screenshots/patched.png)
<br>
-Delete method -removing data from database
![clean-test-build1.png](screenshots/9deletewarren.png)

![clean-test-build1.png](/screenshots/w.png)<br/> 
-Verifying database for delete function
![clean-test-build1.png](/screenshots/z.png)<br/> 

# References
https://github.com/wmacevoy/web3-wmacevoy

https://www.tutorialspoint.com/nodejs/nodejs_restful_api.html

https://www.youtube.com/watch?v=pKd0Rpw7O48&ab_channel=ProgrammingwithMosh

