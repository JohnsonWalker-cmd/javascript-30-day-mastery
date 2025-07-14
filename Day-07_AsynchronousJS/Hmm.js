const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

/*fetchPromise.then((response)=>{
    const jsonPromise = response.json();

    jsonPromise.then((data) => {
        console.log(data[0].name);
    });
});*/

// promise chaining

/*fetchPromise
  .then(response => response.json())
  .then(data => console.log(data[0].name));

*/
// adding one more piece 

fetchPromise 
  .then((response) => {
      if(!response.ok){
        throw error(`HTTP error: ${response.status}`);
      }

      return response.json();
  })
  .then((data) => {
    console.log(data[0].name)
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

// last piece catching errors 