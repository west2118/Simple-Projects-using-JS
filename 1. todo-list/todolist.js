const submit = document.querySelector('.submit');
const todoText = document.querySelector('.todo-text');
const todoList = document.querySelector('.todo-list');

submit.addEventListener('click', addToDo);
todoList.addEventListener('click', handleClicks);

function addToDo() {
  if (todoText.value.length !== 0) {
    const markup = `
    <div class="list">
        <div class="list-item">
            <input type="checkbox" class="check">

            <div class="display">
                <input type="text" class="display-text" value="${todoText.value}" readonly>
            </div>

            <div class="buttons">
                <button class="edit">EDIT</button>
                <button class="delete">DELETE</button>
            </div>
        </div>
    </div>  
    `;

    todoList.insertAdjacentHTML('beforeend', markup);
    todoText.value = '';
  } else {
    alert('Please Write Your Todo-list');
  }
}

function handleClicks(e) {
  const listItem = e.target.closest('.list-item');
  if (!listItem) return;

  const displayItem = listItem.querySelector('.display-text');

  if (e.target.type === 'checkbox') {
    handleCheckBox(e.target, displayItem);
  }

  if (e.target.classList.contains('delete')) {
    listItem.remove();
  }

  if (e.target.classList.contains('edit')) {
    handleEdit(e.target, displayItem);
  }
}

function handleCheckBox(checkbox, displayItem) {
  if (checkbox.checked) {
    displayItem.classList.add('done');
  } else {
    displayItem.classList.remove('done');
  }
}

function handleEdit(edit, displayItem) {
  if (edit.textContent === 'EDIT') {
    displayItem.removeAttribute('readonly');
    displayItem.focus();
    edit.textContent = 'SAVE';
  } else {
    displayItem.setAttribute('readonly', true);
    edit.textContent = 'EDIT';
  }
}

// Before Refactoring
// const submit = document.querySelector('.submit');
// const todoText = document.querySelector('.todo-text');
// const todoList = document.querySelector('.todo-list');

// submit.addEventListener('click', function () {
//   if (todoText.value.length !== 0) {
//     const markup =
//     <div class="list">
//         <div class="list-item">
//             <input type="checkbox" class="check">

//             <div class="display">
//                 <input type="text" class="display-text" value="${todoText.value}" readonly>
//             </div>

//             <div class="buttons">
//                 <button class="edit">EDIT</button>
//                 <button class="delete">DELETE</button>
//             </div>
//         </div>
//     </div>
//     ;

//     todoList.insertAdjacentHTML('beforeend', markup);
//     todoText.value = '';
//   } else {
//     alert('Please Write Your Todo-list');
//   }
// });

// todoList.addEventListener('click', e => {
//   const listItem = e.target.closest('.list-item');
//   const displayItem = listItem.querySelector('.display-text');

//   if (e.target.type === 'checkbox') {
//     if (e.target.checked) {
//       displayItem.classList.add('done');
//     } else {
//       displayItem.classList.remove('done');
//     }
//   }

//   if (e.target.classList.contains('delete')) {
//     listItem.remove();
//   }

//   if (e.target.classList.contains('edit')) {
//     if (e.target.textContent === 'EDIT') {
//       displayItem.removeAttribute('readonly');
//       displayItem.focus();
//       e.target.textContent = 'SAVE';
//     } else {
//       displayItem.setAttribute('readonly', true);
//       e.target.textContent = 'EDIT';
//     }
//   }
// });
