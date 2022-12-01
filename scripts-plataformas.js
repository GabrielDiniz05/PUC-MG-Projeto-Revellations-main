URL = 'https://api.rawg.io/api/platforms?key=26d6777e304549f48572097e3f575b35';

$.ajax({
    url: URL,
    success: plats => {
        let listar_plat_1 = '';
        listar_plat_1 += `
        <h4>${plats.results[0].name}</h4>
        <img class="plat-img rounded-3" src="${plats.results[0].image_background}"> 
        <p><b>Principais jogos: </b></p>
        <p> - ${plats.results[0].games[1].name}</p>
        <p> - ${plats.results[0].games[3].name}</p>
        <p> - ${plats.results[0].games[5].name}</p>`;
        document.getElementById('plat-1').innerHTML = listar_plat_1;

        let listar_plat_2 = '';
        listar_plat_2 += `
        <h4>${plats.results[1].name}</h4>
        <img class="plat-img rounded-3" src="${plats.results[1].image_background}"> 
        <p><b>Principais jogos: </b></p>
        <p> - ${plats.results[1].games[4].name}</p>
        <p> - ${plats.results[1].games[3].name}</p>
        <p> - ${plats.results[1].games[5].name}</p>`;
        document.getElementById('plat-2').innerHTML = listar_plat_2;

        let listar_plat_3 = '';
        listar_plat_3 += `
        <h4>${plats.results[4].name}</h4>
        <img class="plat-img rounded-3" src="${plats.results[4].image_background}"> 
        <p><b>Principais jogos: </b></p>
        <p> - ${plats.results[4].games[4].name}</p>
        <p> - ${plats.results[4].games[3].name}</p>
        <p> - ${plats.results[4].games[5].name}</p>`;
        document.getElementById('plat-3').innerHTML = listar_plat_3;
    }
})