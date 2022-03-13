var elList= document.querySelector(".list");

for(var pokemon of pokemons){

    var newitem= document.createElement("li");
    var newHeading= document.createElement("h3");
    var newImg= document.createElement("img");
    var newText= document.createElement("p");
    var newTime= document.createElement("time");
    var newSubList= document.createElement("ul");
    var newSubItem= document.createElement("li");

    newitem.setAttribute("class", "list__item");
    newImg.setAttribute("src", pokemon.img);
    newImg.setAttribute("class", "list__img");  
    newHeading.textContent= pokemon.name;
    newHeading.setAttribute("class", "list__title");
    newText.textContent= pokemon.candy;
    newText.setAttribute("class", "list__text");
    newTime.textContent=pokemon.spawn_time;
    newTime.setAttribute("class", "list__time");
    newSubList.setAttribute("class", "sublist");
    newSubItem.textContent= pokemon.type;
    newSubItem.setAttribute("class", "sublist__item");

    newitem.appendChild(newImg);
    newitem.appendChild(newHeading);
    newitem.appendChild(newText);
    newitem.appendChild(newTime);
    newitem.appendChild(newSubList);
    newSubList.appendChild(newSubItem);


    elList.appendChild(newitem);
}