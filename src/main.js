import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocSearch } from './docLookup.js';

$(document).ready(function () {
  $('#search').click(function () {
    let docName = $('#docName').val();
    $('#docName').val("");
    let specialty = $('#specialty').val();
    $('#specialty').val("");

    let search = new DocSearch();

    let promise = search.docSearch(docName, specialty);

    promise.then(function (response) {

      let body = JSON.parse(response);

      for (let i = 0; i < body.data.length; i++) {

        $('.showDoc').append(`Name: ${body.data[i].practices.name}<br>

      Specialty: ${body.data[i].specialties.uid}: ${body.data[i].specialties.description} <br>
       Address: ${body.data[i].practices[0].visit_address.city} <br>
       ${body.data[i].practices[0].visit_address[0].street[0]} >br>
       ${body.data[i].practices[0].visit_address[0].street2[0]} ${body.data[i].practices[0].visit_address[0].zip[0]}`);
      }
    },
      function (error) {
        $('.errors').text(`There was an error processing your request: ${error.message}`);
      });
  });
});
