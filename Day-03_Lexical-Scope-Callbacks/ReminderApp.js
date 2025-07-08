function setReminder(message , callback){
  console.log(message);
  setTimeout(()=>{
    console.log("⏳ Reminder coming in 3 seconds…");
    callback();
  } , 3000);
 
}

const username = "Saka"
setReminder("Going to the gym" , ()=>{
  console.log("✅ Reminder complete " + username +    "!");
});