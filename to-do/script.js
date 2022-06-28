const input = document.querySelector('.todo-item__newitem');
const todoList = document.querySelector('.todo-list');
const addBtn = document.querySelector('.add-item-main');

// Add new deal to our list
addBtn.addEventListener('click', (e) => {
    if(input.value === '') return;
    createItem(input.value);
    input.value = '';
});


const getBtnRemove = (li) => {
    const btn_remove = document.createElement('button');
    btn_remove.className = 'remove-item';
    btn_remove.insertAdjacentHTML('afterbegin', '<img src="img/remove.svg" alt="" width="40px" height="40px">' );
    btn_remove.addEventListener('click', e => {
        todoList.removeChild(li);
    });
    return btn_remove;
}

const getBtnTick = () => {
    const btn_tick = document.createElement('button');
    btn_tick.className = 'btn_tick';
    btn_tick.insertAdjacentHTML('afterbegin', '<img src="img/tick.svg" alt="" width="20px" height="20px"></img>' );
    return btn_tick;
}

const getLiElement = () => {
    // create random colors for li
    const a = Math.random()*256|20;
    const b = Math.random()*256|10;
    const c = Math.random()*256|10;

    const li = document.createElement('li');
    li.className = 'todo-item';
    li.style.background = `rgba(${a},${b},${c}, 0.7)`;
    return li;
}

const getItemText = (value) => {
    const item_text = document.createElement('div');
    item_text.className = 'todo-item__text';
    item_text.insertAdjacentHTML('afterbegin',`${value}`);
    return item_text;
}

const getItemIcons = () => {
    const item_icons = document.createElement('div');
    item_icons.className = 'todo-item__icons';
    return item_icons;
}

const getBtnEdit = () => {
    const btn_edit = document.createElement('button');
    btn_edit.className = 'edit-item';
    btn_edit.insertAdjacentHTML('afterbegin', '<img src="img/pencil.svg" alt="" width="40px" height="40px"></img>' );
    return btn_edit;
}

function createItem(value){

    const li = getLiElement()
    const item_text = getItemText(value);
    const btn_edit = getBtnEdit();
    const btn_remove = getBtnRemove(li);
    const item_icons = getItemIcons();

    // edit item onclick
    btn_edit.addEventListener('click', function edit() {
       const btn_tick = getBtnTick();
        // replace input into text onclick
       const newInput = document.createElement('input');
       newInput.classList = 'todo-item__newitem newInput';
       item_text.replaceWith(newInput);

       item_icons.insertAdjacentElement('afterbegin',btn_tick);

       btn_tick.addEventListener('click', e => newInput.value !== '' && newInput.replaceWith(newInput.value));

       btn_edit.removeEventListener('click', edit);
    });

    todoList.append(li);
    li.append(item_text);
    li.append(item_icons);
    item_icons.append(btn_edit);
    item_icons.append(btn_remove);
}


