# weather-api

Just a thin wrapper around [current's OpenWeatherMap API](https://openweathermap.org/current).

## example

```
$ curl https://wweather-api.herokuapp.com/api/weather?q=Curitiba
```

```json
{
   "coord":{
      "lon":-49.29,
      "lat":-25.5
   },
   "weather":[
      {
         "id":803,
         "main":"Clouds",
         "description":"broken clouds",
         "icon":"04n"
      }
   ],
   "base":"stations",
   "main":{
      "temp":285.28,
      "feels_like":282.18,
      "temp_min":285.15,
      "temp_max":285.37,
      "pressure":1023,
      "humidity":81
   },
   "visibility":10000,
   "wind":{
      "speed":4.1,
      "deg":80
   },
   "clouds":{
      "all":75
   },
   "dt":1598312302,
   "sys":{
      "type":1,
      "id":8346,
      "country":"BR",
      "sunrise":1598261815,
      "sunset":1598302938
   },
   "timezone":-10800,
   "id":6322752,
   "name":"Curitiba",
   "cod":200
}
```
