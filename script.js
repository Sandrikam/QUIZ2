function randomFact() {
    // We call the Web Service via AJAX
    const interval = setInterval(function(){
        var xmlhttp = new XMLHttpRequest();
        var url = "https://api.chucknorris.io/jokes/random";
        xmlhttp.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            // We parse the JSON response
            parseJson(json);
          }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
      },5000)
  }
  function parseJson(json) {
    var fact = "<b>" + json["value"] + "</b>";
    document.getElementById("data").innerHTML = fact;
  }
  
  
  
  document.getElementById("logo").addEventListener("click", function() {
    randomFact();
  });
  randomFact();

















//weather

  let apiKey = 'efc8c43c7de0632eed4be300d9ca2690';


    // let city = document.getElementsByClassName('city')[0].value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=Tbilisi&appid=${apiKey}` ;

    $.getJSON(url,
        function(data) {
            
            let temp = Math.round(parseFloat(data.main.temp))-273;
            let country = data.sys.country;
            let weather = data.weather[0].main;

            document.getElementsByClassName('city-name')[0].append(city);
            document.getElementsByClassName('temp')[0].innerHTML = temp + '<sup>o</sup>';
            document.getElementsByClassName('country')[0].innerHTML = country;
            document.getElementsByClassName('weather')[0].innerHTML = weather;
        });
        console.log('T0bilisi');
