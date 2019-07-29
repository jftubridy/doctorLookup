import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocSearch } from './docLookup.js';

$(document).ready(function () {
  $('.searchForm').submit(function (event) {
    event.preventDefault();
    let docName = $('#docName').val();
    //$('#docName').val("");
    let reason = $('#reason').val();
    //$('#reason').val("");

    let search = new DocSearch();

    let showDoc = search.docSearch(docName, reason);

    showDoc.then(function (response) {

      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        let fullName = `${body.data[i].profile.first_name} ${body.data[i].profile.last_name}`;
        let address = `${body.data[i].practices[0].visit_address.street}, ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.zip}`;

        $('.showDoc').append(`Name: ${fullName} <br>
          Address: ${address}<br><br>`);
      }
    },
      function (error) {
        $('.errors').text(`There was an error processing your request: ${error.message}`);
      });
  });
});
