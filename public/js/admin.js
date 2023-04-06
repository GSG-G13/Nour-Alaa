const btn = document.querySelector('.add');
const main = document.querySelector('main');
const title = document.querySelector('.nameProduct');
const price = document.querySelector('.priceProduct');
const photo = document.querySelector('.photoProduct');
const description = document.querySelector('.description');
const category = document.querySelector('.category');

const renderProduct = () => {
  main.textContent = '';
  fetch('/all').then((result) => result.json()).then((data) => {
    data.forEach((ele) => {
      const divBox = document.createElement('div');
      divBox.className = 'box';
      divBox.id = ele.id;

      const imgEle = document.createElement('img');
      imgEle.src = ele.img;

      const divImgDisc = document.createElement('div');
      divImgDisc.className = 'img-discription';

      const h4Ele = document.createElement('h4');
      h4Ele.setAttribute('contenteditable', false);
      h4Ele.textContent = ele.title;

      const priceDiv = document.createElement('div');
      priceDiv.className = 'price';
      priceDiv.textContent = ele.price;

      const deletBtn = document.createElement('i');
      deletBtn.className = 'fa-solid fa-trash-can delBtn';

      const cate = document.createElement('div');
      cate.className = 'cate';
      cate.textContent = ele.catogery;

      divBox.appendChild(imgEle);
      divImgDisc.appendChild(h4Ele);
      divImgDisc.appendChild(priceDiv);
      divBox.appendChild(divImgDisc);
      divBox.appendChild(deletBtn);
      divBox.appendChild(cate);
      main.appendChild(divBox);
    });
  }).catch(console.log);
};

renderProduct();

btn.addEventListener('click', () => {
  if (title.value.trim() === '' || price.value.trim() === '' || photo.value.trim() === '') {
    return;
  }

  const newData = {
    title: title.value,
    img: photo.value,
    price: price.value,
    description: description.value,
    catogery_id: category.value,
  };
  fetch('/add', {
    method: 'POST',

    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),

  })
    .then((result) => result.json())
    .then((data) => renderProduct(data))
    .catch(console.log);
  title.value = '';
  photo.value = '';
  price.value = '';
  description.value = '';
});
