const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");



form.addEventListener("submit", (event) => {
  event.preventDefault();


  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if(!dividend || !divider) {
      result.innerText = 'Division not performed. Both values are required in inputs. Try again'
      return
    }

    if(isNaN(dividend) || isNaN(divider)) {
      throw new Error('Non numerical value insterted')
    }

    if(divider == 0) {
      console.error('Invalid divider value: '+ new Error().stack)
      result.innerText = 'Division not performed. Invalid number provided. Try again';
      return
    }


    result.innerText = Math.floor(dividend / divider);

  } catch (error) {
    console.error('Critical', error.stack)
    document.body.innerHTML = `<h1> Something critical went wrong. Please reload the page </h1>`
  }
});