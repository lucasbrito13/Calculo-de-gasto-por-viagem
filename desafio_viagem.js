function calcular() {
    let precoCombustivel = document.getElementById('preco_combu');
    let gastoCombustivel = document.getElementById('gasto_combu');
    let distancia = document.getElementById('km_dis');

    if (precoCombustivel.value.length == 0 || gastoCombustivel.value.length == 0 || distancia.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Faltam dados')
    } else {
        let preC = Number(precoCombustivel.value)
        let gastC = Number(gastoCombustivel.value)
        let dis = Number(distancia.value)

        const litrosConsumidos = dis / gastC;
        const pagoPorKM = litrosConsumidos * preC;


        const imagemDiv = document.getElementById('foto');
        const imagem = document.createElement('img');
        imagem.src = "imagens/fazoL.jpeg";
        imagem.alt = "Faz o L";
        imagem.id = "imagemResultado";
        imagem.classList.add("minha-imagem");
        imagemDiv.appendChild(imagem);

        res.innerHTML = `O custo gasto nessa viagem é de R$ ${pagoPorKM.toFixed(2)}`;
        
    }
}