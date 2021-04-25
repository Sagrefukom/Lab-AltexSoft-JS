(async () => {

  let list = await(await fetch('./list.json')).json();
  
  const input = document.getElementById('query');

  input.addEventListener('input', ()=>{
    result.innerHTML  = '';
    let query = input.value;
    
    let listname = list.map(item=>{
      if(item.name.toLowerCase().startsWith(query.toLowerCase())){
          result.insertAdjacentHTML('beforeend',`<option id="option"> ${item.name} </option>`)
      }
    })
  });
})();

let option = document.getElementById('option');

 function makename() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length)).toUpperCase();

  return text;
}
option.textContent = makename();

function myFunction(e) {
  query.value = e.target.value
}