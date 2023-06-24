const imageUrl = 'https://fakestoreapi.com/products'; 


fetch(imageUrl).then(res=>res.json())
.then(
items=>items.forEach(item => {
    let imageDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src=item.image; 
    image.alt="lego api image";
    document.body.appendChild(imageDiv);
    imageDiv.appendChild(image);
    imageDiv.setAttribute("id", "imageContainer");
    image.setAttribute("class", "image");
})
);
