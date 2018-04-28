const form = document.querySelector('form');

form.addEventListener('click', function(event) {
    if (event.target.id === 'add') {
        New();
    } else if (event.target.id === 'delete') {
        out();
    }
});

const New = function() {
    const input = document.querySelector('textarea');
    const title = document.querySelector('input');
    const tbody = document.querySelector('tbody#second');

    let newTable = document.createElement('table');
    newTable.id = title.value;
    newTable.classList.add('item');
    
    let newThead = document.createElement('thead');
    let newTh = document.createElement('th');
    newTh.textContent = title.value;
    newThead.appendChild(newTh);

    let newTbody = document.createElement('tbody');
    let newTr = document.createElement('tr');
    let newTd = document.createElement('td');
    let label = document.createElement('label');
    label.for = input.value;

    let br = document.createElement('br');

    let newOutput = document.createElement('output');
    newOutput.id = title.value;
    newOutput.textContent = input.value;

    let inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    
    newTd.appendChild(label);
    newTd.appendChild(br);
    newTd.appendChild(newOutput);
    newTd.appendChild(inputCheckbow);

    newTr.appendChild(newTd);
    newTbody.appendChild(newTr);
    newTable.appendChild(newTead);
    newTable.appendChild(newTbody);

    tbody.appendChild(newTable);

}

const out = function() {
    const vet = document.querySelectorAll('td');

    for (let element of vet) {
        if (element.lastChild.checked) {
            if (confirm('Deseja excluir a tarefa selecionada?')) {
                element.parentElement.parentElement.parentElement.remove();
            }
        }
    }
}
