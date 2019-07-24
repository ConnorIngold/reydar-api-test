// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");

const logo = document.createElement("img");
logo.src = "logo.png";

app.appendChild(logo);
app.appendChild(container);

// Open a new connection, using the GET request on the URL endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

// Send request
request.send();

request.onload = function() {
  // Begin accessing JSON data here

  // parse (convet) the JSON to a javascript object
  var data = JSON.parse(this.responseText);

  if (request.status >= 200 && request.status < 400) {
    // for each item in the object
    // console.log the title
    data.forEach(item => {
      // Create a div with a card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // Create an h1 and set the text content to the film's title
      const h1 = document.createElement("h1");
      h1.textContent = item.title;

      // Create a p and set the text content to the film's description
      const p = document.createElement("p");
      item.description = item.description.substring(0, 300); // Limit to 300 chars
      p.textContent = `${item.description}...`; // End with an ellipses
      p.textContent = "".concat(item.description, "..."); // End with an ellipses

      // Append the cards to the container element
      container.appendChild(card);

      // Each card will contain an h1 and a p
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('p')
    errorMessage.textContent = `Gah, it's not working! send a lovely email over to lorem@ipsum.com`
    app.appendChild(errorMessage)
  }
};

console.log(request);
