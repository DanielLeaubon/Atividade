function pessoa (){
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');

    const pessoas = [];
    
    function recebeEventoForm(evento){
    evento.preventDefault();
    const nome = form.querySelector('#Nome');
    const sobrenome = form.querySelector('#Sobrenome');
    const peso = form.querySelector('#Peso');
    const altura = form.querySelector('#Altura');
    
        let pessoas = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value 
        };
        console.log(pessoas);
        if (pessoas.nome == '' || pessoas.sobrenome == ''||pessoas.peso == '' || pessoas.altura == ''){
            resultado.innerHTML += `<p> Algum dado não confere</p> `
        } else {
            resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}`+
            ` ${peso.value}KG e ${altura.value}cm</p>`;
        }
        
    }
    form.addEventListener('submit',  recebeEventoForm);

}
pessoa()