$('#current-city').change(function() {
  var city = $('#current-city').val();
  // debugger
  console.log(city);
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a012ce56b3fea36ffd408256d4eeb21a', function(data) {
    $('#weather-status-main').text(data.weather[0].main);
    $('#weather-status-extra').text(data.weather[0].description);
    $('#weather-status-temp').text(Math.round(data.main.temp - 273) + "ºC");
  });
});

$(document).ready(function() { // standard input
  var thermostat = new Thermostat(); // new instance
  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermostat.increaseTemperature(); // updates the model
    updateTemperature();
  })
  $('#temperature-down').on('click', function() { // event listener
    thermostat.decreaseTemperature(); // updates the model
    updateTemperature();
  })
  $('#temperature-reset').on('click', function() { // event listener
    thermostat.reset(); // updates the model
    updateTemperature();
  })
  $('#power-saving').on('click', function() { // event listener
    thermostat.togglePsm(); // updates the model
    $('#power_saving_status').text(thermostat.psmGetter());
  })
  function updateTemperature() {
  $('#temperature').text(thermostat.temperature + "ºC");
  $('#temperature').attr('class', thermostat.energyUsage());
}

})
