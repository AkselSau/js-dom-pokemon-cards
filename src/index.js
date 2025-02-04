
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }

function MakePokemonCards() {
    for (const element of data) {
        const listed = document.createElement("LI");
        listed.className = "card";
        const header = document.createElement("h2");
        header.className = "card--title";
        const named = capitalizeFirstLetter(element.name);
        header.append(named);
        const img = document.createElement("img");
        img.width = "256";
        img.className = "card--img";
        img.src = element.sprites.other["official-artwork"].front_default;

        const attributes = document.createElement("UL");
        attributes.className = "card--text";

        for (const att of element.stats) {
            const stat = document.createElement("LI");
            const name = att.stat.name.toUpperCase();
            const base = att.base_stat;
            const stat_text = `${name}: ${base}`;
            stat.append(stat_text);

            attributes.appendChild(stat);
        }
        const appeared = document.createElement("UL");
        appeared.className = "card--game";

        for (const att of element.game_indices) {
            const stat = document.createElement("LI");
            const name = att.version.name;
            const capitalized = capitalizeFirstLetter(name)
            stat.append(capitalized);

            appeared.appendChild(stat);
        }
        listed.appendChild(header);
        listed.appendChild(img);
        attributes.append("Appeared in games:");
        listed.appendChild(attributes);
        listed.appendChild(appeared);

        const cards = document.querySelector(".cards");
        cards.appendChild(listed);
    }
}
MakePokemonCards();