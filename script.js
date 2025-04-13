document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const preco = parseFloat(document.getElementById('preco').value);
    const consumo = parseFloat(document.getElementById('consumo').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
  
    if (preco > 0 && consumo > 0 && distancia > 0) {
      const litrosNecessarios = distancia / consumo;
      const custoTotal = litrosNecessarios * preco;
  
      document.getElementById('resultado').innerHTML = `
        <p>Você precisará de <strong>${litrosNecessarios.toFixed(2)} L</strong> de combustível.</p>
        <p>O custo total será de <strong>R$ ${custoTotal.toFixed(2)}</strong>.</p>
      `;
    } else {
      document.getElementById('resultado').innerHTML = `
        <p>Por favor, insira valores válidos em todos os campos.</p>
      `;
    }
  });
  