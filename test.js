const imageUrl = 'https://fakestoreapi.com/products'; 


fetch(imageUrl).then(res=>res.json()).then(items=>{
    const itemContainer = document.getElementById('itemContainer');

    // Iterate over the items
    items.forEach(item => {
      // Create HTML elements to display item details
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <img src="${item.imageUrl}" alt="${item.name} Image">
      `;

      // Append the item element to the container
      itemContainer.appendChild(itemElement);
    });
  });
