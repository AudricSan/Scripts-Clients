const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');

buttons.forEach((button) =>{
  button.addEventListener('click', (e) => {
    //console.log(e.target.id);
    result.textContent += e.target.textContent;
  })
})

equal.addEventListener('click', () =>{
  result.textContent = eval(result.textContent);
})

clear.addEventListener('click', () => {
  result.textContent = "";
})