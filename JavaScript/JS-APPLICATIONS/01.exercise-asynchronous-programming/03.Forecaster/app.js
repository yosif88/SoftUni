function attachEvents() {
    const location = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecasts = document.getElementById('forecast');
    const currentWeather = document.getElementById('current');
    const upcomingWeather = document.getElementById('upcoming');

    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const urlForecaster = 'http://localhost:3030/jsonstore/forecaster/today/';

    const conditions = {
        Sunny: "&#x2600", // ☀
        "Partly sunny": "&#x26C5", // ⛅
        Overcast: "&#x2601", // ☁
        Rain: "&#x2614", // ☂
        Degrees: "&#176"

    }

    submitBtn.addEventListener('click', onSubmit);

    function onSubmit() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const cityIndex = data.findIndex(el => el.name === location.value);
                forecasts.style.display = 'block';
                if (cityIndex === -1){
                    throw new Error();
                }
                let cityCode = data[cityIndex].code;

                location.value = '';

                fetch(urlForecaster+cityCode)
                .then(response => response.json())
                .then(data => {
                    const forecast = document.createElement('div');
                    forecast.className = 'forecasts';
                    
                    const condSymbol = document.createElement('span');
                    condSymbol.className = 'condition symbol';
                    condSymbol.innerHTML = conditions[data.forecast.condition];
                    forecast.appendChild(condSymbol);

                    let spanCondition = document.createElement('span');
                    spanCondition.className = 'condition';

                    let spanCityName = document.createElement('span');
                    spanCityName.className = 'forecast-data';
                    spanCityName.textContent = data.name;
                    spanCondition.appendChild(spanCityName);

                    let spanDegrees = document.createElement('span');
                    spanDegrees.className = 'forecast-data';
                    spanDegrees.innerHTML = `${data.forecast.low}&#176;/${data.forecast.high}&#176;`
                    spanCondition.appendChild(spanDegrees);

                    let spanWeather = document.createElement('span');
                    spanWeather.className = 'forecast-data';
                    spanWeather.textContent = data.forecast.condition;
                    spanCondition.appendChild(spanWeather)
            
                    forecast.appendChild(spanCondition);
                    currentWeather.appendChild(forecast);

                });

                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`)
                .then(response => response.json())
                .then(data => {
                    let divForecast = document.createElement('div');
                    divForecast.className = 'forecast-info';

                    data.forecast.forEach(el => {
                        const upcoming = document.createElement('span');
                        upcoming.className = 'upcoming';

                        const symbol = document.createElement('span');
                        symbol.className = 'symbol';
                        symbol.innerHTML = conditions[el.condition];
                        upcoming.appendChild(symbol);

                        const fcData = document.createElement('span');
                        fcData.className = 'forecast-data';
                        fcData.innerHTML =  `${el.low}&#176;/${el.high}&#176;`;
                        upcoming.appendChild(fcData);

                        const fcData2 = document.createElement('span');
                        fcData2.className = 'forecast-data';
                        fcData2.textContent = el.condition;
                        upcoming.appendChild(fcData2);

                        divForecast.appendChild(upcoming);
                    });
                    upcomingWeather.appendChild(divForecast);

                })
                .catch(()=> forecasts.textContent = 'Error')
            })
            .catch(()=> forecasts.textContent = 'Error')

    }


}

attachEvents();