const btn = document.querySelector('.add');
const main = document.querySelector('main');
const title = document.querySelector('.nameProduct');
const price = document.querySelector('.priceProduct');
const photo = document.querySelector('.photoProduct');

const renderProduct = () => {
  fetch('/al').then((result) => result.json()).then((data) => {
    data.data.forEach((ele) => {
      let divBox = document.createElement("div");
      divBox.className = "box";
    
      let imgEle = document.createElement("img");
      imgEle.src = ele.img;
    
      let divImgDisc = document.createElement("div");
      divImgDisc.className = "img-discription";
      divImgDisc.textContent = ele.description;
    
      let h4Ele = document.createElement("h4");
      h4Ele.setAttribute("contenteditable", false);
      h4Ele.textContent = ele.title;
    
      let priceDiv = document.createElement("div");
      priceDiv.className = "price";
      priceDiv.textContent = ele.price;
    
      let deletBtn = document.createElement("i");
      deletBtn.className = "fa-solid fa-trash-can delBtn";
    
      let cate = document.createElement("div");
      cate.className = "cate";
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
}

btn.addEventListener('click', () => {
  if(title.value ==='' || price.value === '' || photo.value === ''){
    return
  }
  fetch('/add', {
    method: 'POST',
 headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
    body: JSON.stringify(data)
  })
  .catch(console.log)
  .then(result => result.json())
  .then(data => renderProduct(data))
  .catch(console.log)
})