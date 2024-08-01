
/*page Loading Animation -----------------------------------------------------------
const items = document.querySelectorAll('.Load_Item');
 
function staggeredLoad() {
  items.forEach((item, index) => {
      setTimeout(() => {
      item.style.opacity = 1;
      
      }, (index + 1) * 250); // 1000 milliseconds (1 second) delay between each item
  });
}
 
staggeredLoad();

page Loading Animation -----------------------------------------------------------*/


/*

const apiKey = 'GTKZGX1qr6cVxMS1Dl88v1xUVe2edF3qaozGZMucbID3XTPE3Z2fSdbh';
const searchQuery = 'cat';
const apiUrl = `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=10`;
let Photo_Array = [];

fetch(apiUrl, {
  headers: {
    Authorization: apiKey
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    Photo_Array.push(data.photos[0].url);


    console.log(Photo_Array[0]);

  })
  .catch(error => {
    console.error('Error:', error);
  });
*/

/*
import bcrypt from "bcrypt";


function HashPassword(pass) {
  const password = pass;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return;
    }
    return hash;
  });
}



console.log(HashPassword("Hello"));

*/


