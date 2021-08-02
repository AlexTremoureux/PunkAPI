const getBeer = async function () {
    let response = await fetch("https://api.punkapi.com/v2/beers")
    let data = await response.json()
    console.log(data)

    let beer = ( () => {
        const container = document.getElementById("container");
        data.forEach (element => {
        
            container.innerHTML+=`
            <article>
            <div class="info">
            <p>${element.tagline.replace(".","")}:</p>
            <p>${element.name}</p>
            </div>
            <img id="portraitBeer" src=${element.image_url} alt="">
            <div class="description">
            <p>${element.abv}°</p>
            <p>first_brewed : ${element.first_brewed}</p>
            <p>IBU : ${element.ibu}</p>
            <p>${element.description}</p>
            <p>${element.food_pairing}</p>
            </div>
            </article>
            `        
        });
    }) ();
}

getBeer()
