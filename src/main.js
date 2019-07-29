import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocSearch } from './docLookup.js';

// let grylls = tamagotchi;

$(document).ready(function () {
  $('#docName').click(function () {
    let docName = $('#docName').val();
    $('#docName').val("");

    // letpromise = new Promise(function (resolve, reject) {
    //   let request = new XMLHttpRequest();
    //   const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&specialty_uid=${specialty}&skip=0&limit=10&user_key=${process.env.exports.apiKey}`,

    const getElements = function (response) {
      $('#doc-template').text(`place holder info for ${docName} and ${specialty}`);
    }

    // type: 'GET',
    //   data: {
    //   format: 'json'
    // },
    // success: function (response) {
    //   $('.doc-template').text(`Information for ${name} is ${response.data}%`);
    //   // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
    // },
    // error: function () {
    //   $('#errors').text("There was an error processing your request. Please try again.");
    // }
  });
});
});
