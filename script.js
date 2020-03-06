const ADD_TODO_BUTTON = document.querySelector('[data-add-todo]')
const ADD_TODO_ITEM = document.querySelector('[data-todo-input]')
const TODO_TOOLTIP = document.querySelector('[data-todo-tooltip]')
const LIST = document.querySelector('[data-display-todo-list]')

let items = new Array()


const addNewItem = () => {
    ADD_TODO_BUTTON.addEventListener('click', checkInput)
}

const checkInput = () => {
    if(ADD_TODO_ITEM.value.length >=1) {
        TODO_TOOLTIP.classList.add('hide')
        items.push(ADD_TODO_ITEM.value)
        ADD_TODO_ITEM.value = ''
        displayList()
    } else {
        TODO_TOOLTIP.classList.remove('hide')
    }
}

const editItem = (event, item) => {
    const EDIT_BUTTON = document.querySelector('.edit-item')
    const SAVE_BUTTON = document.querySelector('.save-item')
    const INPUT_ITEM = document.querySelector('[data-input-item]')

    if(event.target.classList.contains('edit-item')) {
        EDIT_BUTTON.classList.add('hide')
        SAVE_BUTTON.classList.remove('hide')
        INPUT_ITEM.removeAttribute('readonly')
        INPUT_ITEM.focus()
    } else {
        items[item] = INPUT_ITEM.value

        EDIT_BUTTON.classList.remove('hide')
        SAVE_BUTTON.classList.add('hide')
        INPUT_ITEM.setAttribute('readonly', true)
    }
}

const removeItem = item => {
    items.splice(item, 1)
    displayList()
}

const displayList = () => {
    const ITEM_LIST = items.map((item, index) => (
        `
            <li>
                <input data-input-item type="text" value="${item}" readonly>
                <span class="edit-item" onclick="editItem(event, ${index})">EDIT</span>
                <span class="save-item hide" onclick="editItem(event, ${index})">SAVE</span>
                <span class="remove-item" onclick="removeItem(${index})">REMOVE</span>
            </li>
        `
    )).join('')

    LIST.innerHTML = ITEM_LIST
}

addNewItem()