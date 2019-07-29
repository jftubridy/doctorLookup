import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocSearch } from './docLookup.js';

$(document).ready(function () {
  $('.searchForm').click(function (event) {
    event.preventDefault();
    let docName = $('#docName').val();
    $('#docName').val("");
    let specialty = $('#specialty').val();
    $('#specialty').val("");

    let search = new DocSearch();

    let showDoc = search.docSearch(docName, specialty);

    showDoc.then(function (response) {

      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        let fullName = `${body.data[i].practices.name}`;
        let address = `${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.street} ${body.data[i].practices[0].visit_address.street2} ${body.data[i].practices[0].visit_address.zip}`;
        let specialty = `${body.data[i].specialties.uid}`;

        $('.showDoc').append(`Name: ${fullName} <br>
        Specialty: ${specialty} ${body.data[i].specialties.description} <br>
          Address: ${address}<br><br>`);
      }
    },
      function (error) {
        $('.errors').text(`There was an error processing your request: ${error.message}`);
      });
  });
});
