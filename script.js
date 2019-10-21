function weatherData(){

    var city="Baku";

    var APIKey = "3eb8fa9c039f3565180b2051fa407fe5";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + APIKey;

    // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

    //   console.log(queryURL);

    //   console.log(response);
      $(".city").text(response.name);
      $(".wind").text(response.wind.speed);
      $(".humidity").text(response.main.humidity);
      $(".temp").html(parseInt(response.main.temp-273.15)+"&deg;");

    });
}
$("#input").keypress(function(event){
    if(event.keyCode===13){
        let city=$("#input").val()
        $("#input").val("")
        // console.log($("#input").val())
        var APIKey = "3eb8fa9c039f3565180b2051fa407fe5";

     // Here we are building the URL we need to query the database
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + APIKey;

        // We then created an AJAX call
        $.ajax({
      url: queryURL,
      method: "GET"
        }).then(function(response) {

    //   console.log(queryURL);

    //   console.log(response);
      $(".city").text(response.name);
      $(".wind").text(response.wind.speed);
      $(".humidity").text(response.main.humidity);
      $(".temp").html(parseInt(response.main.temp-273.15)+"&deg;");

    });
    }
    
})
