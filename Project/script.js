
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');
console.dir(innerModal.parentNode);
const addOrderBtn = document.querySelector('button.add-order');
const orderForm = document.querySelector('form');
const orderList = document.querySelector('.order-list');

// function that will handle a new order, through a new modal and a form
const addOrder = event => {
  const orderHTML = `
    <form id="orderForm">
    <p>Your name :</p>
    <input
        class="input-form"
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name here"
        required
    />
    <p>Please select your dish :</p>
    <select name="dish" class="select-form" required>
        <option value="romazava">Romazava</option>
        <option value="koba">Koba</option>
        <option value="ravitoto">Ravitoto</option>
        <option value="mokary">Mokary</option>
        <option value="achard">Achard</option>
        <option value="masikita">Masikita</option>
        <option value="sambos">Sambos</option>
        <option value="mofo-baolina">Mofo baolina</option>
        <option value="ranonapango">Ranonapango</option>
    </select>
    <p>Please select the size of your plate :</p>
    <input type="radio" id="small" name="size" value="small" required />
    <label for="small">Small</label><br />
    <input type="radio" id="medium" name="size" value="medium" />
    <label for="medium">Medium</label><br />
    <input type="radio" id="large" name="size" value="large" />
    <label for="large">Large</label><br />
    <p>How many pieces do you want to order?</p>
    <input
        class="input-form"
        type="number"
        id="quantity"
        name="amount"
        placeholder="Enter a number here"
        required
    />
    <button class="submitOrder" type="submit">Add this order</button>
</form>
    `;
  innerModal.innerHTML = orderHTML;
  outerModal.classList.add('open');
};

// ************ Functions to close Modals *************
const handleCloseModal = event => {
  const isOutside = !event.target.closest('.inner-modal');
  if (isOutside) {
    closeModal();
  }
};

const handleEscapeKey = event => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

const closeModal = () => {
  outerModal.classList.remove('open');
};

// ************

const handleSubmit = event => {
  console.log('hello?');
  event.preventDefault(); // prevent the page from reloading

  // checked if the form that emit the submit is REALLY our form
  if (event.target.matches('#orderForm')) {
    const form = event.target;
    // DESCTRUCTURED the form to get all the inputs values
    const { name, dish, size, amount } = form;
    // create the new Order html, and we put the input values inside custom data attributes
    const orderHTML = `
            <div class="order" data-dish="${dish.value}" data-size="${size.value}" data-amount="${amount.value}">
                <span class="title">
                    ${name.value}
                </span>
                <button class="details">Details</button>
                <button class="delete">Delete order</button>
            </div>
        `;
    orderList.innerHTML += orderHTML;
    closeModal();
    form.reset();
  }
};

const showDetailModal = order => {
  // grab the detail
  const { dish, size, amount } = order.dataset;
  const orderName = order.querySelector('.title').textContent;
  // create the innerHTML of the modal
  // todo, add some image
  const detailHTML = `
        <h4>${orderName}</h4>
        <h5>Order :</h5>
        <p>${amount} ${size} ${dish}</p>
        <img src="./images/${dish}.jpg"/>
    `;
  // open the modal
  innerModal.innerHTML = detailHTML;
  outerModal.classList.add('open');
};
const deleteOrder = order => {
  order.remove();
};

// event delegation for the buttons
const handleBtnClick = event => {
  if (event.target.matches('button.details')) {
    const order = event.target.closest('.order');
    showDetailModal(order);
  }
  if (event.target.matches('button.delete')) {
    // pass the order
    const order = event.target.closest('.order');
    deleteOrder(order);
  }
};

// ************ Listeners ************
window.addEventListener('click', handleBtnClick);
window.addEventListener('submit', handleSubmit);
window.addEventListener('keydown', handleEscapeKey);
outerModal.addEventListener('click', handleCloseModal);
addOrderBtn.addEventListener('click', addOrder);