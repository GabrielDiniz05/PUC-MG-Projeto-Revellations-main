URL = 'https://api.rawg.io/api/games?dates=2022-01-01,2022-12-31&key=26d6777e304549f48572097e3f575b35';

let jogos;

$.ajax({
    url: URL,
    success: games => {
        let listar_games1 = '';
        let listar_games2 = '';
        for(let i = 0; i < 4; i++){
            listar_games1 += `
                <div class="card col-lg-3 col-md-6 p-1 bg-light" style="color: black;">
                    <a id="card-lancamento" href="detalhes.html?id=${games.results[i+15].id}" style="text-decoration: none;">
                        <img src="${games.results[i+15].background_image}" class="card-img-top" style="border-radius: 6%;">
                        <div class="card-body">
                            <h5 class="card-title" style="color: black;">${games.results[i+15].name}</h5>
                            <p class="card-text">Mais detalhes +</p>
                        </div>
                    </a>
                </div>`;
            document.getElementById('list-games').innerHTML = listar_games1;
        }
        for(let i = 0; i < 4; i++){
            listar_games2 += `
            <div class="card col-lg-3 col-md-6 p-1 bg-light" style="color: black;">
                <a id="card-lancamento2" href="detalhes.html?id=${games.results[i+4].id}" style="text-decoration: none;">
                    <div class="row">
                        <img src="${games.results[i+4].background_image}" class="card-img-top" style="border-radius: 6%;">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title" style="color: black;">${games.results[i+4].name}</h5>
                        <p class="card-text">Mais detalhes +</p>
                    </div>
                </a>
            </div>`;
            document.getElementById('list-games2').innerHTML = listar_games2;
        }
    }
})



