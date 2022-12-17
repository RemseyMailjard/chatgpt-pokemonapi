//     <!-- Developed by Remsey Mailjard and CHATGPT-->
const container = document.querySelector(".container");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => {
    // data is the JSON object returned by the API
    const pokemonname = data.name;
    const spriteURL = data.sprites.front_default;
    const spriteBackIMGURL = data.sprites.back_default;
    // Set the innerHTML of the element to include an image and the name of the Pokemon
    const imgElement = document.createElement("img");
    imgElement.src = spriteURL;
    const imgElement2 = document.createElement("img");
    imgElement2.src = spriteBackIMGURL;
    const pokemonElement = document.createElement("div");

    // Set the innerHTML of the element to include an image and the name of the Pokemon
    pokemonElement.innerHTML = `
     <h2>${data.name}</h2>
    `;

    // Append the element to the container
    container.appendChild(imgElement);
    container.appendChild(imgElement2);
    container.appendChild(pokemonElement);
  });
