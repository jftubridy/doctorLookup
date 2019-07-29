//export  docSearch = (docName, specialty); {
export class DocSearch {

  docSearch(docName, reason) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&query=${reason}&user_location=47.6062%2C%20122.3321&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;//when I have the api as process.env.apiKey it gives me a 401 unauthorized error message
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