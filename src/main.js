import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { tamagotchi } from './docLookup.js';

// let grylls = tamagotchi;

$(document).ready(function() {
$('#docName').click(function() {
  let name = $('#docName').val();
  $('#docName').val("");
  $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?name=doom&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&sort=rating-desc&skip=0&limit=10&user_key=${exports.apiKey}`,

//     http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=462946d0a52b8ba2f2ec97b1a4ca72e7
// ,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('.doc-template').text(`Information for ${name} is ${response.data}%`);
     // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
    },
    error: function() {
      $('#errors').text("There was an error processing your request. Please try again.");
    }
  });
});
});
