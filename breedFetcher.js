const request = require('request');
const searchName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${searchName}`;
request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  const breed = data[0];
  if (!breed) {
    console.log("Breed not found");
    return;
  }

  console.log(breed.description);

});


