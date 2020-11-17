const menuList = document.getElementById('menuList');
let html = '';

const getMenu = async () => {
  const response = await fetch('data/foodItems.json');

  if (response.status !== 200) {
    throw new Error('cannot fetch the data');
  }
  const data = await response.json();

  return data;
};

getMenu()
  .then((data) => {
    const uniqueCategories = [...new Set(data.map((item) => item.category))];

    uniqueCategories.forEach((cat) => {
      if (cat === 'starter') {
        html = `
      <div class="menu-heading">
        <h1 class="menu-title">${cat}</h1>
        <span class="bar"></span>
      </div>
      `;
        data.forEach((item) => {
          const { category, title, desc, price } = item;
          if (category === cat) {
            html += `
            
            <div class="menu-item">
              <h2>${title}</h2>
              <p>${desc}</p>
              <span class="price">$${price}</span>
            </div>     
          `;
          }
        });
      }
      if (cat === 'soups & salads') {
        html = `
      <div class="menu-heading">
        <h1 class="menu-title">${cat}</h1>
        <span class="bar"></span>
      </div>
      `;
        data.forEach((item) => {
          const { category, title, desc, price } = item;
          if (category === cat) {
            html += `
            
            <div class="menu-item">
              <h2>${title}</h2>
              <p>${desc}</p>
              <span class="price">$${price}</span>
            </div>     
          `;
          }
        });
      }
      if (cat === 'steaks & chops') {
        html = `
      <div class="menu-heading">
        <h1 class="menu-title">${cat}</h1>
        <span class="bar"></span>
      </div>
      `;
        data.forEach((item) => {
          const { category, title, desc, price } = item;
          if (category === cat) {
            html += `
            
            <div class="menu-item">
              <h2>${title}</h2>
              <p>${desc}</p>
              <span class="price">$${price}</span>
            </div>     
          `;
          }
        });
      }
      if (cat === 'favorites') {
        html = `
      <div class="menu-heading">
        <h1 class="menu-title">${cat}</h1>
        <span class="bar"></span>
      </div>
      `;
        data.forEach((item) => {
          const { category, title, desc, price } = item;
          if (category === cat) {
            html += `
            
            <div class="menu-item">
              <h2>${title}</h2>
              <p>${desc}</p>
              <span class="price">$${price}</span>
            </div>     
          `;
          }
        });
      }
      menuList.innerHTML += html;
    });
  })
  .catch((err) => console.log('rejected:', err.message));
