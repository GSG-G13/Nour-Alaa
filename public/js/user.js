const main = document.querySelector('main');

const renderProduct = () => {
  fetch('/all').then((result) => result.json()).then((data) => {
    data.forEach((ele) => {
      const divBox = document.createElement('div');
      divBox.className = 'box';
      divBox.id = ele.id;

      const imgEle = document.createElement('img');
      imgEle.src = ele.img;

      const divImgDisc = document.createElement('div');
      divImgDisc.className = 'img-discription';

      const addIcon = document.createElement('i');
      addIcon.className = 'fa-regular fa-heart';
      addIcon.textContent = 'add to cart';

      const h4Ele = document.createElement('h4');
      h4Ele.textContent = ele.title;

      const priceDiv = document.createElement('div');
      priceDiv.className = 'price';
      priceDiv.textContent = ele.price;

      const cate = document.createElement('div');
      cate.className = 'cate';
      cate.textContent = ele.category;

      divBox.appendChild(imgEle);
      divImgDisc.appendChild(addIcon);
      divImgDisc.appendChild(h4Ele);
      divImgDisc.appendChild(priceDiv);
      divBox.appendChild(divImgDisc);
      divBox.appendChild(cate);
      main.appendChild(divBox);
    });
  }).catch(console.log);
};

renderProduct();
