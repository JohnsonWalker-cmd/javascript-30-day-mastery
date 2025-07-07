/*setTimeout(() => { 
  console.log("⏳ 1 second has passed...");
} , 1000); */

// Main code runs ➡️ Timer is set ➡️ JavaScript moves on ➡️ After 2s, callback is sent to run


let count = 5;
const countdown = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log("🚀 Lift off!");
    clearInterval(countdown);
  }
}, 1000);
// Main code runs ➡️ Countdown starts ➡️ Every second, callback runs ➡️ When count reaches 0, countdown stops