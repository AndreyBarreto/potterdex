fetch("http://hp-api.herokuapp.com/api/characters")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    //agora que começa a brincadeira
    const generateHTML = data
      .map((api) => {
        function houseColor() {
          if (api.house === "Gryffindor") {
            return "grifinoria";
          } else if (api.house === "Slytherin") {
            return "sonserina";
          } else if (api.house === "Ravenclaw") {
            return "corvinal";
          } else if (api.house === "Hufflepuff") {
            return "lufalufa";
          } else {
            api.house = "None";
            return "semcasa";
          }
        }
        return `
            <div class=" flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front ${houseColor()}">
                        <p class="name-character" >${api.name}</p>
                        <p class="house-character">${api.house}</p>
                        <img class="image-character" src=${api.image} /> 
                    </div>
                    <div class="flip-card-back ${houseColor()}">
                        <p class="name-character" >${api.name}
                        <p><span class=backgroundFeatures>Birth : </span>${api.dateOfBirth}</p>
                        <p><span class=backgroundFeatures>Eyes Color : </span>${api.eyeColour}</p>
                        <p><span class=backgroundFeatures>Ancestry : </span>${api.ancestry}</p>
                        <p><span class=backgroundFeatures>Hair Color : </span>${api.hairColour}</p>
                        <p><span class=backgroundFeatures>Patronus : </span>${api.patronus}</p>
                        <p><span class=backgroundFeatures>Wand Core : </span>${api.wand.core}</p>
                        <p><span class=backgroundFeatures>Wand Wood : </span>${api.wand.wood}</p>
                        <p><span class=backgroundFeatures>Wand length : </span>${api.wand.length}</p>
                        
                    </div>
                </div>
            </div>
        `;
      })
      .join("");
    document.getElementById("data").innerHTML = generateHTML;
  });
