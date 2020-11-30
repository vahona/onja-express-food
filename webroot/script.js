console.log('it works');
const addBtn = document.querySelector('#add-btn');
const form = document.querySelector('form');
const handleSubmit = event => {
  event.preventDefault();
  const form = event.target;
  if (event.target.matches('form')) {
    const input = document.querySelector('#todo');
    const myHTML = `
    <div class="todo-list">
      <div class="input-choice">
        <span>${input.value}</span>
      </div>
      <button class="finished">Delete</button>
    </div>
    `;

    event.target = myHTML;
    const todoLists = document.querySelector('.todo-list');
    todoLists.insertAdjacentHTML('beforeend', myHTML);
    form.reset();
  };
}

window.addEventListener('submit', handleSubmit);

