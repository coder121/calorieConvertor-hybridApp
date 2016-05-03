# CALORIE COVERTING/SEARCHIN APP

This app is built using ionic framework. I came across this idea when I started going to GYM and I noticed that the gym equipment that I use shows me the number of calories I have burnt. To check the calories I burnt with the food I eat. I created this app. I have used 

 Ionic provides the frontend and [NDBA] API (https://ndb.nal.usda.gov/ndb/foods/) for getting the calorie detail of the food.

## Requirements

- [Node and npm](http://nodejs.org)


## Installation

1. Clone the repository: `git clone git@github.com:coder121/calorieConvertor-hybridApp.git`
2. Install the application: `npm install`
3. To run on browser: `ionic serve --lab` 


## API
1. SEARCH http://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=DEMO_KEY 	`returns json containing food unique id(ndbo)`
2. FOOD REPORT  http://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=b&format=json&api_key=DEMO_KEY   `returns json containing nutriotion information of food item based on its unique id(ndbno)`

### SEARCH 
 When you search, it gives list of items corresponding to your search and you can click it gives the calorie information as shown in the picture 

![SEARCH](http://i.imgur.com/chENv9L.png?1)

### CALORIE CONVERTOR
You can enter the calories and the app will tell you equivalent calories based on popular food

![CONVERTOR](http://i.imgur.com/4gZCdZA.png?1)


EAT HEALTHY STAY HEALTHY!


