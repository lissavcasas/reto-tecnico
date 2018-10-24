
const showButton = (e) => {
  const id = e.target.id;
  alert(`Le diste click a ${id}`)
};

window.onload = () => {
  const containerBtns = document.getElementById('container-btns')
  const arrCountries = ['Brasil', 'Chile', 'Mexico', 'Peru'];
  const arrNames = ['Primero', 'Segundo', 'Tercero', 'Cuarto'];

  arrCountries.forEach((e, i) => {
    const btnCountry = document.createElement('button');
    btnCountry.textContent = arrNames[i];
    btnCountry.id = arrCountries[i];
    containerBtns.appendChild(btnCountry);
  });

  containerBtns.addEventListener('click', showButton);
};








