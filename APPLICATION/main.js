// Api Key : f5baef7dac7229d2b917cacdd5810992
const DefaultPlace = "India";
const CheckCity = /^[A-Za-z]+$/;

let WeatherContainer = document.querySelector(".weather_container")
let CurrentDate = document.getElementById("date");
let CurrentTime = document.getElementById("time");
let City = document.getElementById("place_name");
let SearchCity = document.getElementById("search_city");
let SearchButton = document.getElementById('searchbutton');
let Temperature = document.getElementById("temperature");
let Condition = document.getElementById("condition");
let Humidity = document.getElementById("humidity");
let WindSpeed = document.getElementById("windspeed");
let ErrorMsg = document.getElementById("errormsg");
//------------------------day 1-----------------------

let Day1= document.getElementById("day1")
let Day1Temperature = document.getElementById("day1temperature");
let Day1Humidity = document.getElementById("day1humidity");
let Day1Wind = document.getElementById("day1wind");
let Day1ConditionBox = document.getElementById("day1conditionbox");
//------------------------day2------------------------------
let Day2= document.getElementById("day2")
let Day2Temperature = document.getElementById("day2temperature");
let Day2Humidity = document.getElementById("day2humidity");
let Day2Wind = document.getElementById("day2wind");
let Day2ConditionBox = document.getElementById("day2conditionbox");
//-------------------------day3----------------------
let Day3= document.getElementById("day3")
let Day3ConditionBox = document.getElementById("day3conditionbox");
let Day3Temperature = document.getElementById("day3temperature");
let Day3Humidity = document.getElementById("day3humidity");
let Day3Wind = document.getElementById("day3wind");
//-----------------------day4-------------------------------

let Day4= document.getElementById("day4")
let Day4ConditionBox = document.getElementById("day4conditionbox");
let Day4Temperature = document.getElementById("day4temperature");
let Day4Humidity = document.getElementById("day4humidity");
let Day4Wind = document.getElementById("day4wind");

//-------------------------day5-----------------------------
let Day5= document.getElementById("day5")
let Day5ConditionBox = document.getElementById("day5conditionbox");
let Day5Temperature = document.getElementById("day5temperature");
let Day5Humidity = document.getElementById("day5humidity");
let Day5Wind = document.getElementById("day5wind");

let ConditionIconBox = document.getElementById("conditionicon");
//search by city
SearchButton.addEventListener('click', (event)=>{
    let len= SearchCity.value
    if(SearchCity.value.match(CheckCity) && len.length != 0){
        GetWeather(SearchCity.value);
    }
    else{
        ErrorMsg.style.opacity = 1;
        ErrorMsg.innerHTML ="Re-Enter City Name";
        ErrorMsg.style.backgroundColor ="red";
        HideErrorMsg();
        SearchCity.focus();
        SearchCity.value="";
    } 
})
const GetWeather =  (city) =>{
    const url = `http://api.weatherapi.com/v1/forecast.json?key=378603cebc014f298d5164956232702&q=${city}&days=6&aqi=no&alerts=no`;
    
    fetch(url).then((resp) => resp.json())
    .then(data =>{ 
        ErrorMsg.style.opacity = 1;
        ErrorMsg.style.backgroundColor ="black";
        ErrorMsg.innerHTML =`${city}'s Weather Details Show`;
        HideErrorMsg();
        return ShowWeather(data)

    })
    .catch(()=>{
        ErrorMsg.style.opacity = 1;
        ErrorMsg.style.backgroundColor ="red";
        ErrorMsg.innerHTML =`${city} Re-Enter City Name`;
        SearchCity.focus();
        SearchCity.value = "";
        HideErrorMsg();
    })

}

const ShowWeather = (WeatherData) =>{
    //! to  check data which comes from the API
    // console.log(WeatherData);

    City.innerHTML = `${WeatherData.location.country}`; 
    Temperature.innerHTML =`${WeatherData.current.temp_c}`;
    Condition.innerHTML = `${WeatherData.current.condition.text}`;
    Humidity.innerHTML = `${WeatherData.current.humidity}`; 
    WindSpeed.innerHTML = `${WeatherData.current.wind_kph}`;
    ConditionIconBox.innerHTML =`<img src="${WeatherData.current.condition.icon}" alt="condition-icon">`

    Day1.innerHTML = `${WeatherData.forecast.forecastday[1].date}`;
    Day1ConditionBox.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[1].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[1].day.condition.icon}" alt="condition-icon">`
    Day1Temperature.innerHTML =  `${WeatherData.forecast.forecastday[1].day.avgtemp_c}`+"&deg;C" ;
    Day1Humidity.innerHTML =  `${WeatherData.forecast.forecastday[1].day.avghumidity}` + "&percnt;";
    Day1Wind.innerHTML =  `${WeatherData.forecast.forecastday[1].day.maxtemp_c}` + "Km/h";

    Day2.innerHTML = `${WeatherData.forecast.forecastday[2].date}`;
    Day2ConditionBox.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[2].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[2].day.condition.icon}" alt="condition-icon">`
    Day2Temperature.innerHTML =  `${WeatherData.forecast.forecastday[2].day.avgtemp_c}`+"&deg;C" ;
    Day2Humidity.innerHTML =  `${WeatherData.forecast.forecastday[2].day.avghumidity}` + "&percnt;";
    Day2Wind.innerHTML =  `${WeatherData.forecast.forecastday[2].day.maxtemp_c}` + "Km/h";

    Day3.innerHTML = `${WeatherData.forecast.forecastday[3].date}`;
    Day3ConditionBox.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[3].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[3].day.condition.icon}" alt="condition-icon">`
    Day3Temperature.innerHTML =  `${WeatherData.forecast.forecastday[3].day.avgtemp_c}`+"&deg;C" ;
    Day3Humidity.innerHTML =  `${WeatherData.forecast.forecastday[3].day.avghumidity}` + "&percnt;";
    Day3Wind.innerHTML =  `${WeatherData.forecast.forecastday[3].day.maxtemp_c}` + "Km/h";

    Day4.innerHTML = `${WeatherData.forecast.forecastday[4].date}`;
    Day4ConditionBox.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[4].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[4].day.condition.icon}" alt="condition-icon">`
    Day4Temperature.innerHTML =  `${WeatherData.forecast.forecastday[4].day.avgtemp_c}`+"&deg;C" ;
    Day4Humidity.innerHTML =  `${WeatherData.forecast.forecastday[4].day.avghumidity}` + "&percnt;";
    Day4Wind.innerHTML =  `${WeatherData.forecast.forecastday[4].day.maxtemp_c}` + "Km/h";

    Day5.innerHTML = `${WeatherData.forecast.forecastday[5].date}`;
    Day5ConditionBox.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[5].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[5].day.condition.icon}" alt="condition-icon">`
    Day5Temperature.innerHTML =  `${WeatherData.forecast.forecastday[5].day.avgtemp_c}`+"&deg;C" ;
    Day5Humidity.innerHTML =  `${WeatherData.forecast.forecastday[5].day.avghumidity}` + "&percnt;";
    Day5Wind.innerHTML =  `${WeatherData.forecast.forecastday[5].day.maxtemp_c}` + "Km/h";

};

let SystemDate = new Date();
CurrentDate.innerHTML = SystemDate.getDate()+"-"+ (SystemDate.getMonth()+1) +"-"+ SystemDate.getFullYear();
function startTime() {
    const today = new Date();
    let h = today.getHours();//by hour
    let m = today.getMinutes();//gets by minutes
    let s = today.getSeconds();//get by seconds
    m = checkTime(m);
    s = checkTime(s);
    CurrentTime.innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  function checkTime(i) {
  if (i < 10) {
    i = "0" + i
}; 
  return i;
}

function HideErrorMsg() {
    setTimeout(() => {
        ErrorMsg.style.opacity = 0;

    }, 5000);
}