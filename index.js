document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const btn = document.getElementById('add');
    const alert = document.getElementById('alert');
    let id = 1;
    btn.onclick = addTodo;//en este caso si una funcion no retorna nada se la llama sin parentesis para evitar el undefined


    function addTodo() {
        if (title.value === '' || description.value === '') {
            alert.classList.remove('d-none');
            alert.innerText = 'Title and description are required';
            return;
        }
        alert.classList.add('d-none');
        const row = table.insertRow();
        row.setAttribute('id', id++)
        row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;
        const removeBtn = document.createElement('button');//crea button
        removeBtn.classList.add('btn', 'btn-danger' ,'mb-1','ml-1');//agrega las clases al button
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>'//agrega iconos
        removeBtn.onclick = function(){
            removeToDo(row.getAttribute('id'));
        }
        row.children[3].appendChild(removeBtn);//coloca el button dentro de text-right

        function removeToDo(id){
            document.getElementById(id).remove()
        }
    }
});


