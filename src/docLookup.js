//export  docSearch = (docName, specialty); {
export class DocSearch {
  docSearch(docName, specialty) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&specialty_uid=${specialty}&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
// $.get(resource_url, function (data) {
//   // data: { meta: {<metadata>}, data: {<array[Practice]>} }
//   var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
//   document.getElementById('content-placeholder').innerHTML = template(data);
// });