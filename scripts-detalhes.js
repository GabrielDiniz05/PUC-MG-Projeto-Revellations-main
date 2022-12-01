const param = new URLSearchParams(window.location.search);
let ident = param.get('id');

URL = `https://api.rawg.io/api/games/${ident}?key=26d6777e304549f48572097e3f575b35`

$.ajax({
    url:URL,
    success:game => {
        document.getElementById("background-div").style.backgroundImage = `url(${game.background_image_additional})`;
        document.getElementById("background-div3").style.backgroundImage = `url(${game.background_image_additional})`;

        let listar_NameDesc = '';
        listar_NameDesc += `
            <div class="row">
                <h1>${game.name}</h1>
            </div>
            <div class="row">
                <p><b>Sobre: </b>${game.description_raw}</p>
            </div>
            <div class="row container-fluid">
                <div class="col-lg-6">
                    <p class="mb-0"><b>Publishers:</b></p>
                    <p id="listar-publisher"></p>
                </div>
                <div class="col-lg-6">
                    <p><b>Data de Lançamento: </b>${game.released}</p>
                </div>
            </div>
            <div class="row">
                <p class="mb-0"><b>Plataformas: </b></p>
                <p id="listar-plataformas"><p>
            </div>
            <div class="row">
                <p class="mb-0"><b>Genêro: </b></p>
                <p id="listar-genero"></p>
            </div>
            <div class="row">
                <p><b>Avaliação: </b>${game.metacritic}</p>
            </div>`;
            document.getElementById('listar-destaque1').innerHTML = listar_NameDesc;

        for(let i = 0; i < game.publishers.length; i++){
            let listar_Publi= '';
            listar_Publi += `
                ${game.publishers[i].name}`;
            document.getElementById('listar-publisher').innerHTML = listar_Publi;
        }

        for(let i = 0; i < game.platforms.length; i++){
            let listar_Plat = '';
            listar_Plat += `
                ${game.platforms[i].platform.name}`;
                document.getElementById('listar-plataformas').innerHTML = listar_Plat;
        }
        for(let i = 0; i < game.genres.length; i++){
            let listar_Gen = '';
            listar_Gen += `
                ${game.genres[i].name}`;
                document.getElementById('listar-genero').innerHTML = listar_Gen;
        }
        let listar_Img = '';
        listar_Img += `
        <img class="destaque-frame rounded-4" src=${game.background_image}>
        `;
        document.getElementById('detalhe-imagem').innerHTML = listar_Img;
    }
})

