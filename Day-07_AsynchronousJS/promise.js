const promise = new Promise((resolve , reject) => {

      const success = true ;
      if(success){
        resolve("Yikes");
      }else{
        reject("Oops!");
      }
});


promise
    .then(response => console.log("Success:", response))
    .catch(error => console.log("Erro:" , error));