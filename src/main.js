import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { tamagotchi } from './docLookup.js';

let grylls = tamagotchi;

// $(document).ready(function() {
//   $('#feedTamagotchi').click(function(event) {
//     event.preventDefault();
//     console.log("before "+grylls.foodLevel);
//     grylls.feed(10);
//     $('#hungerLevel').prepend("<div> The tamagotchi's hunger level is " + grylls.foodLevel +"</div>");
//     console.log("after "+grylls.foodLevel);
//   });
//
//   $('#feedTama').click(function() {
//     grylls.eatMedium();
    // -----grylls.feed(12); --- broken because somehow not a function
  // });
  // function isAliveCheck() {
  //   if (grylls.foodLevel <= 0) {
  //     $('#death').append('\u{1F480}');
  //     console.log('dead');
  //     return new Error("You're dead, food level too low");
  //   } else if (grylls.foodLevel >= 100){
  //     alert("Your Tamagotchi had an accident"+'\u{1F4A9}');
  //     $('#floor').append('\u{1F4A9}');
  //     return grylls.foodLevel = 100;
  //   } else {
  //     return true;
  //   }
  // }

  // ------it will check for low food level, output hunger bar,
  // ------also maybe update food level every second
  //let update_loop = setInterval(secCheck, 1000);
  //-----decrement food foodLevel

  //function secCheck(){
    // -----updating the progress bar
//     grylls.setHunger();
//     let danger;
//     if(grylls.foodLevel <= 20){
//       danger = "bg-danger";
//     }else{
//       danger = "bg-success";
//     }
//     $('#outputHungerLevel').html(`<div class="progress-bar ${danger} progress-bar-striped progress-bar-animated" aria-valuenow="${grylls.foodLevel}"; style="width:${grylls.foodLevel}%;height:20px">${grylls.foodLevel}%</div>`);
//     try {
//       const isAlive = isAliveCheck();
//       if (isAlive instanceof Error) {
//         console.error(isAlive.message);
//         throw RangeError("foodLevel too low");
//       }else {
//         console.log("you're safe");
//       }
//     } catch (error) {
//       console.error(`Red alert! We have an error: ${error.message}`);
//       clearInterval(update_loop);
//     }
//   }
// });
