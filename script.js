
const goods = [
    { title: 'N1', price: 150, image: 'img/1.jpg'},
    { title: 'N2', price: 50, image: 'img/2.jpg' },
    { title: 'N3', price: 350, image: 'img/3.jpg' },
    { title: 'N4', price: 250, image: 'img/4.jpg' },
    { title: 'N5', price: 450, image: 'img/5.jpg' },
    { title: 'N6', price: 550, image: 'img/6.jpg' },

  ];
  
  const renderGoodsItem = (title='carpet', price='100', image) => {
    return `
      <div class="goods-item">
        <h3 class="goods-item-text">${title}</h3>
        <p class="goods-item-price">${price}</p>
        <button class="goods-item-button"><image class="goods-item-image" src="${image}"></image></button>
        </div>`;
  };
  
  const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.image));
    document.querySelector('.goods-list').innerHTML = goodsList;
  }
  
  renderGoodsList(goods);