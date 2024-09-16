
function salvarCarro(){
    
    let marca = document.getElementById ('marcaCarro').value
    let cor = document.getElementById('corCarro').value
    let modelo = document.getElementById('modeloCarro').value
    
    const carro ={
        marca: marca,
        cor: cor, 
        modelo: modelo
    };

    localStorage.setItem("carro", JSON.stringify(carro))
    alert("O carro foi cadastrado com sucesso!")
}