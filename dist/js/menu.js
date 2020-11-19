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
      const newItems = data.filter((item) => item.category === cat);

      html = `
          <div class="menu-heading">
            <h1 class="menu-title">${cat}</h1>
            <span class="bar"></span>
          </div>
        `;

      newItems.forEach((item) => {
        const { title, desc, price } = item;

        html += `
            
            <div class="menu-item">
              <h2>${title}</h2>
              <p>${desc}</p>
              <span class="price">$${price}</span>
            </div>     
          `;
      });
      menuList.innerHTML += html;
    });
  })
  .catch((err) => console.log('rejected:', err.message));
