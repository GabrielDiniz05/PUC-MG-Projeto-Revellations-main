URL = 'https://api.rawg.io/api/publishers?key=26d6777e304549f48572097e3f575b35&page=2';

$.ajax({
    url: URL,
    success: publis => {
        let listar_publi_1 = '';
        listar_publi_1 += `
        <h4>${publis.results[0].name}</h4>
        <img class="plat-img rounded-3" src="${publis.results[0].image_background}">
        <p><b>Principais jogos: </b></p>
        <p> - ${publis.results[0].games[0].name}</p>
        <p> - ${publis.results[0].games[1].name}</p>
        <p> - ${publis.results[0].games[2].name}</p>`;
        document.getElementById('publi-1').innerHTML = listar_publi_1;

        let listar_publi_2 = '';
        listar_publi_2 += `
        <h4>${publis.results[4].name}</h4>
        <img class="plat-img rounded-3" src="imgs/background10.jpg">
        <p><b>Principais jogos: </b></p>
        <p> - ${publis.results[4].games[0].name}</p>
        <p> - ${publis.results[4].games[1].name}</p>
        <p> - ${publis.results[4].games[2].name}</p>`;
        document.getElementById('publi-2').innerHTML = listar_publi_2;

        let listar_publi_3 = '';
        listar_publi_3 += `
        <h4>${publis.results[7].name}</h4>
        <img class="plat-img rounded-3" src="imgs/background11.jpg">
        <p><b>Principais jogos: </b></p>
        <p> - ${publis.results[7].games[0].name}</p>
        <p> - ${publis.results[7].games[4].name}</p>
        <p> - ${publis.results[7].games[5].name}</p>`;
        document.getElementById('publi-3').innerHTML = listar_publi_3;
    }
})





// 0 - 4 - 7