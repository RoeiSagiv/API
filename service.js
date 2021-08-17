const typeEnum = require('./typeEnum');
const ChuckNorrisJoke = require('./ChuckNorrisJoke');
const KanyeWestQuote = require('./KanyeWestQuote');
const UserNameSum = require('./UserNameSum');
const cors = require('cors');

//const SERVER_URL = "http://127.0.0.1:3000"

//Create the stats object of the requests.
let stats = {"requests": 0,
"distribution" : [{"type": typeEnum.type[0], "count": 0},{"type": typeEnum.type[1], "count": 0},{"type": typeEnum.type[2], "count": 0}]
}

//Function check which type is true, if more then one type is true -> random between true type and return an object of type and result.
function getResponse(userFullName, userBirthYear)
{
    
    let rndInt = 0;
    let chuckNorrisJoke = new ChuckNorrisJoke();
    let kanyeWestQuote = new KanyeWestQuote();
    let userNameSum = new UserNameSum();

    let resultMap = new Map();
    let typesArr = new Array();
    typesArr.push(chuckNorrisJoke);
    typesArr.push(kanyeWestQuote);
    typesArr.push(userNameSum);
    for(let type of typesArr)
    {
      if(type.isConditionTrue(userFullName, userBirthYear))
      {
        resultMap.set(type.getType(), type.getResult(userFullName));
      }
    }
    
    if(resultMap.size == 0)
    {
        return "No condition match for user name or birth year";
    }

    else if(resultMap.size > 1)
    {   
        rndInt = Math.floor(Math.random() * resultMap.size)
    }

    return new Promise(function(resolve, reject){
        Promise.all(resultMap.values()).then((values) =>{
            let resp = {
                type: (Array.from(resultMap.keys())[rndInt]),
                result: (values[rndInt])
                }
                updateStats(stats,Array.from(resultMap.keys())[rndInt]);
            resolve(resp);
        }); 
    });
}

//Function that return the object stats.
function getStats()
{
  if(stats["requests"] == 0)
  {
    let statsZero = {"requests": 0,"distribution" : []};
    return statsZero;
  }
  
  return stats;
   
}

//Function which update the stats object accoridng to request that been done.
function updateStats(stats ,type)
{
    stats["requests"]++;
    for(let i =0; i < typeEnum.amountOfTypes;i++ )
    {
        if(type == typeEnum.type[i])
        {
            stats["distribution"][i].count++;
        }
    }
}

function updateStatsDB() {
  
}


function updateStatsWithOutDB() {
  
}


/*function postData(url, data) {
    const params = {
      method: "POST",
      mode: "cors", //  HTTP-header mechanism that allows a server to indicate any other origins (to load resources)
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch(url, params)
  }
  
  function getData(url) {
    const params = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": 'application/json'
      }
    }
    return fetch(url, params)
  }

  function sendItemToServer(data) {
    postData(SERVER_URL + "/save", data).then(result => {
      // 200, 201, 202, 203 - OK
      // 400, 401, - Client problem
      // 404 - not found
      // 500 - Server problem
      console.log(result.status)
      if (result.status === 500) {
        alert("Error accured.")
      } 
      else if(result.status === 200){
       alert("Success!") 
      }
    })
  }

  function getDataFromServer() {
    getData(SERVER_URL + "/getAll").then(result => {
      result.json().then(data => {
        // [{}, {}, {}]
        data.forEach(item => {
        })
      })
    })
  }
*/




module.exports =
{
    getResponse,
    getStats
} 