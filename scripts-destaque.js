window.onload = () => {
    document.getElementById('b-destaque-1').onclick = () => {
        document.getElementById("background-div").style.backgroundImage = "url('imgs/background7.jpg')";
        document.getElementById("background-div2").style.backgroundImage = "url('imgs/background7.jpg')";
        document.getElementById("background-div3").style.backgroundImage = "url('imgs/background7.jpg')";
    }
    document.getElementById('b-destaque-2').onclick = () => {
        document.getElementById("background-div").style.backgroundImage = "url('imgs/background2.jpg')";
        document.getElementById("background-div2").style.backgroundImage = "url('imgs/background2.jpg')";
        document.getElementById("background-div3").style.backgroundImage = "url('imgs/background2.jpg')";
    }
    document.getElementById('b-destaque-3').onclick = () => {
        document.getElementById("background-div").style.backgroundImage = "url('imgs/background9.jpg')";
        document.getElementById("background-div2").style.backgroundImage = "url('imgs/background9.jpg')";
        document.getElementById("background-div3").style.backgroundImage = "url('imgs/background9.jpg')";
    }
}

const URL_1 = 'https://api.rawg.io/api/games/elden-ring?key=26d6777e304549f48572097e3f575b35';
const URL_2 = 'https://api.rawg.io/api/games/horizon-zero-dawn-2?key=26d6777e304549f48572097e3f575b35';
const URL_3 = 'https://api.rawg.io/api/games/god-of-war-ragnarok?key=26d6777e304549f48572097e3f575b35';

$.ajax({
    url: URL_1,
    success: game => {
        let listar_game = '';
        listar_game += `
            <div class="row">
                <h1>${game.name}</h1>
            </div>
            <div class="row">
                <p><b>Sobre: </b>${game.description_raw}</p>
            </div>
            <div class="row container-fluid">
                <div class="col-lg-6">
                    <p><b>Publisher:</b>${game.publishers[0].name}, ${game.publishers[1].name}</p>
                </div>
                <div class="col-lg-6">
                    <p><b>Data de Lançamento: </b>${game.released}</p>
                </div>
            </div>
            <div class="row">
                <p><b>Plataformas: </b>${game.platforms[0].platform.name}, ${game.platforms[1].platform.name},
                ${game.platforms[2].platform.name}, ${game.platforms[3].platform.name}, ${game.platforms[4].platform.name}<p>
            </div>
            <div class="row">
                <p><b>Gênero: </b>${game.genres[0].name}, ${game.genres[1].name}</p>
            </div>
            <div class="row">
                <p><b>Avaliação: </b>${game.metacritic}</p>
            </div>`;
        document.getElementById('listar-destaque1').innerHTML = listar_game;
    }
})

$.ajax({
    url: URL_2,
    success: game => {
        let listar_game = '';
        listar_game += `
            <div class="row">
                <h1>${game.name}</h1>
            </div>
            <div class="row">
                <p><b>Sobre: </b>${game.description_raw}</p>
            </div>
            <div class="row container-fluid">
                <div class="col-lg-6">
                    <p><b>Publisher:</b>${game.publishers[0].name}, ${game.publishers[1].name}</p>
                </div>
                <div class="col-lg-6">
                    <p><b>Data de Lançamento: </b>${game.released}</p>
                </div>
            </div>
            <div class="row">
                <p><b>Plataformas: </b>${game.platforms[0].platform.name}, ${game.platforms[1].platform.name}<p>
            </div>
            <div class="row">
                <p><b>Gênero: </b>${game.genres[0].name}, ${game.genres[1].name}</p>
            </div>
            <div class="row">
                <p><b>Avaliação: </b>${game.metacritic}</p>
            </div>`;
        document.getElementById('listar-destaque2').innerHTML = listar_game;
    }
})

$.ajax({
    url: URL_3,
    success: game => {
        let listar_game = '';
        listar_game += `
            <div class="row">
                <h1>${game.name}</h1>
            </div>
            <div class="row">
                <p><b>Sobre: </b>${game.description_raw}</p>
            </div>
            <div class="row container-fluid">
                <div class="col-lg-6">
                    <p><b>Publisher:</b>${game.publishers[0].name}</p>
                </div>
                <div class="col-lg-6">
                    <p><b>Data de Lançamento: </b>${game.released}</p>
                </div>
            </div>
            <div class="row">
                <p><b>Plataformas: </b>${game.platforms[0].platform.name}, ${game.platforms[1].platform.name}<p>
            </div>
            <div class="row">
                <p><b>Gênero: </b>${game.genres[0].name}</p>
            </div>
            <div class="row">
                <p><b>Avaliação: </b>${game.metacritic}</p>
            </div>`;
        document.getElementById('listar-destaque3').innerHTML = listar_game;
    }
})