const ul = document.querySelector('#my-ul')
const input = document.querySelector('#in')

const addProduct = () => {
  const li = document.createElement('li');
  li.innerHTML = `<p>${input.value}</p> <input type="checkbox">`
  ul.appendChild(li);
  input.value = '';
};
