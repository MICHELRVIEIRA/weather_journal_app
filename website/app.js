/* Global Variables */

let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='

// Endereço de chamada da API

// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

const key = // Token a ser utilizado na aplicação;

// Create a new date instance dynamically with JS

let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

function performAction(){
    
    const zip_code = document.getElementById("zip").value + ',us'

    const feeling =  document.getElementById("feeling").value
    
    getDataApi(baseURL, zip_code, key)

    .then(function(data){
      
      console.log(data.main.temp, newDate, feeling)

      postData('/addWeather', {temperature: data.main.temp, date: newDate, content: feeling})
    
    })
  
    .then(function(){
    
      updateUI();
  
    });
}

const getDataApi = async (baseURL, zip_code, key)=>{

    const res = await fetch(baseURL + zip_code + key)

    console.log(res);
    
    try {
  
      const data = await res.json();
      
      console.log(data)
      
      return data;

    }  
    
    catch(error) {
      
      console.log("error", error);
      
    }
  }

  const postData = async (url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    
    body: JSON.stringify(data)  

  });
  
    try {
      const newData = await response.json();
      console.log(newData);
      return newData
    }
    
    catch(error) {
      console.log("error", error);
    }
  }

  const updateUI  = async () => {
  
    const request = await fetch ('/all')
  
    try {
  
      const allData = await request.json();
      
      console.log(allData);
  
      document.getElementById('date').innerHTML = allData[0].date;
      document.getElementById('temp').innerHTML = allData[0].temperature;
      document.getElementById('content').innerHTML = allData[0].content;
  
    }
  
    catch (error){
  
      console.log("error", error);
  
    }
  
  }