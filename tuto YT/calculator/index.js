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

window.onkeydown = function (key) {
  switch (key['key']) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":

    case "/":
    case "*":
    case "-":
    case "+":
    case ".":
    case "(":
    case ")":
      
      result.textContent += key['key'];
      break;

    case 'Enter':
      result.textContent = eval(result.textContent);
      break;
    
    case 'Backspace':
      result.textContent = result.textContent.substring(0, result.textContent.length - 1);
      break;

    default:
      //console.log(key['key'])
      break;
  }
}