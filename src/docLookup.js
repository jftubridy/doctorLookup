// export let tamagotchi = {
//   foodLevel: 10, // start higher when done wroking!
//   setHunger: function() {
//     this.foodLevel--;
//     if (this.didYouGetEaten() == true) {
//       return "You let your Tamagotchi DIE!";
//     }
//   },
//   didYouGetEaten: function() {
//     if (this.foodLevel > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   },
//   feed: function(amount) {
//     if(this.foodLevel >= 100){
//       return this.foodLevel = 100;
//     }
//     let that = this;
//     return function(food) {
//       that.foodLevel += amount
//       return `Your Tamagotchi ate ${food}! Food level goes up ${amount}!`
//     }
//   }
// };
// tamagotchi.eatSmall = tamagotchi.feed(5);
// tamagotchi.eatMedium = tamagotchi.feed(10);

//http://www.rafaelservantez.com/writings_tutorials_web_js_update.html


var api_key = 'CODE_SAMPLES_KEY_9d3608187'; // Get your API key at developer.betterdoctor.com

var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + api_key;



$.get(resource_url, function (data) {
    // data: { meta: {<metadata>}, data: {<array[Practice]>} }
    var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
    document.getElementById('content-placeholder').innerHTML = template(data);
});
