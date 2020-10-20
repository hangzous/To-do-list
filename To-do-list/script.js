var tarefa = document.getElementById('tarefa_id');
var botao = document.getElementById('add_tarefa');
var container = document.getElementById('container-list');

botao.addEventListener('click', adicionar);

function adicionar() {
    var novo_elemento = document.createElement('input');
    novo_elemento.id = 'new_input';
    novo_elemento.value = tarefa.value;
    novo_elemento.disabled = true;
    container.appendChild(novo_elemento);

    var botao_remover = document.createElement('button');
    botao_remover.addEventListener('click', remover = () => {
        novo_elemento.style.display = 'none';
        botao_remover.style.display = 'none';
    })

    botao_remover.textContent = 'R';
    botao_remover.id = "remover_id";
    
    container.appendChild(botao_remover);

    if (novo_elemento.value === '') {
        alert('Um valor é necessário.');
        remover();
    } else {
        tarefa.value = '';
    }
}