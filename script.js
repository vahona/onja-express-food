console.log('good luck!');
/* Grabe some usful element */
  const headerDish = document.querySelector('.header button');
  const addDish = document.querySelector('.add-order');
  const modalInner = document.querySelector('.modal-inner');
  const modalOuter = document.querySelector('.modal-outer');
  const addList = document.querySelector('.submitOrder')
/* HTML of modal */
  function handleHeaderDishButtonClick(e){
    modalInner.innerHTML = `<form>
    <p class="enter-name">Your name :</p>
    <input
      class="input-form"
      type="text"
      id="name"
      name="name"
      placeholder="Enter your name here"
      required
    />
    <p class="preference-dish">Please select your dish :</p>
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
    <p class="size-plate">Please select the size of your plate :</p>
    <input type="radio" id="small" name="size" value="small" required />
    <label for="small">Small</label><br />
    <input type="radio" id="medium" name="size" value="medium" />
    <label for="medium">Medium</label><br />
    <input type="radio" id="large" name="size" value="large" />
    <label for="large">Large</label><br />
    <p class="amont">How many pieces do you want to order?</p>
    <input
      class="input-form"
      type="number"
      id="quantity"
      name="amount"
      placeholder="Enter a number here"
      required
    />
    <button class="submitOrder" type="submit">Add this order</button>
  </form>`
    
    modalOuter.classList.add('open');
};
  /* This listening the event e */
  addDish.addEventListener('click', handleHeaderDishButtonClick);

  /* Adding dish */

  /* Grabe some element which I might use */
  
  const head = document.querySelector('.header');
  const order = document.querySelector('.order');
  const nameown = document.querySelector('.title');
  const buttonDetail = document.querySelector('.details');
  const buttonDelete = document.querySelector('.served');
  const body = document.querySelector('body');
 


  window.addEventListener('submit', (e) => {
    e.preventDefault();
    /* After submited the content will removed */

    modalOuter.classList.remove('open');
    /* Variable of the div order list */

    const list = document.querySelector('.order-list');

    

    /* Creating an HTML */
  const myHTML =`<div class="header"></div>
  <div class="container">
    <div class="order-list">
      <div class="order" data-dish="romazava" data-size="large" data-amount="2">
      <span class="title">${nameown.value}
      </span>
        <button class="details">Details</button>
        <button class="served">Delete order</button>
      </div>
    </div>`
  
    e.target = myHTML;
  /* Insert the html */ 
    list.insertAdjacentHTML('beforeend', myHTML);
    
    if(e.target.matches("form")){
      const form = e.target;
      form.nameown.value;
      
    }

  });



