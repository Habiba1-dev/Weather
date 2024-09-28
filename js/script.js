
let searchLocation = document.getElementById("searchLocation")
let weather = document.getElementById('weather');
async function getWeather(city) {
    let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city}&days=3&key=7111e84058c140129a8164716241806`)
    let data = await res.json()
    let currentDate = data.current.last_updated
    let date = new Date(currentDate)
    let todayDay = date.getDate();
    let todayWeek = date.toLocaleString('en-us', { weekday: 'long' })
    let todayMonth = date.toLocaleString('en-us', { month: 'long' })
    let location = data.location.name
    let tempToday = data.current.temp_c + '°C'
    let natureOfDay = data.current.condition.text
    let toDayIcon = data.current.condition.icon
    let humidityToday = `${data.current.humidity} %`
    let windSpeedToday = `${data.current.wind_kph} km/h`
    let dirToday = `${data.current.wind_dir}`
    //
    let tomorrowDate = data.forecast.forecastday[1].date
    let datetom = new Date(tomorrowDate)
    let tomorrowWeek = datetom.toLocaleString('en-us', { weekday: 'long' })
    let clearIconTomorrow = data.forecast.forecastday[1].day.condition.icon
    let maxTempTomorrow = data.forecast.forecastday[1].day.maxtemp_c + '°C'
    let avgTempTomorrow = data.forecast.forecastday[1].day.avgtemp_c + '°C'
    let natureofTempTomorrow = data.forecast.forecastday[1].day.condition.text
    //
    let afterTomorrowDate = data.forecast.forecastday[2].date
    let dateAter = new Date(afterTomorrowDate)
    let dayAfterWeek = dateAter.toLocaleString('en-us', { weekday: 'long' })
    let afterClearIconTomorrow = data.forecast.forecastday[2].day.condition.icon
    let afterMaxTempTomorrow = data.forecast.forecastday[2].day.maxtemp_c + '°C'
    let afterAvgTempTomorrow = data.forecast.forecastday[2].day.avgtemp_c + '°C'
    let afterNatureofTempTomorrow = data.forecast.forecastday[2].day.condition.text
let cartona = '';
cartona += `<div class="container">
                <div class="boxes row g-0 ">
                    <div class="col-md-4">
                        <div class="box1">
                            <div class="boxHead1 d-flex justify-content-between align-items-center">
                                <p class="m-0">${todayWeek}</p>
                                <p class="m-0">${todayDay} ${todayMonth}</p>
                            </div>
                            <div class="boxContent1 content">
                                <div class="location">
                                ${location}
                                </div>
                                <div class="degree d-flex justify-content-between ">
                                    <div class="num">${tempToday}</div>
                                </div>
                                <div class="icon1">
                                    <img src="https:${toDayIcon}" alt="">
                                </div>
                                <div class="custom">
                                ${natureOfDay}
                                </div>
                                <span> <img src="images/icon-umberella.png" alt="umbrella" class="me-1">${humidityToday}</span>
                                <span> <img src="images/icon-wind.png" alt="wind" class="me-1">${windSpeedToday}</span>
                                <span> <img src="images/icon-compass.png" alt="compass" class="me-1">${dirToday}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box2">
                            <div class="boxHead d-flex justify-content-center align-items-center">
                                <p class="m-0">${tomorrowWeek}</p>
                            </div>
                            <div class="boxContent2 content">
                                <div class="icon2">
                                    <img src="https:${clearIconTomorrow}" alt="">
                                </div>
                                <div class="degree">${maxTempTomorrow}</div>
                                <small>${avgTempTomorrow}</small>
                                <div class="custom">
                                    ${natureofTempTomorrow}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box1">
                            <div class="boxHead1 d-flex justify-content-center align-items-center">
                                <p class="m-0">${dayAfterWeek}</p>
                            </div>
                            <div class="boxContent2 content">
                                <div class="icon2">
                                    <img src="https:${afterClearIconTomorrow}" alt="">
                                </div>
                                <div class="degree">${afterMaxTempTomorrow}</div>
                                <small>${afterAvgTempTomorrow}</small>
                                <div class="custom">
                                    ${afterNatureofTempTomorrow}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

document.getElementById('weather').innerHTML = cartona;
console.log(data.current.condition.icon);

}
getWeather('cairo')
searchLocation.addEventListener('input', function (eventInfo) {
    getWeather(eventInfo.target.value)
})
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(location) {
        let latitude = location.coords.latitude
        let longitude = location.coords.longitude
        getWeather(`${latitude},${longitude}`)
    })}