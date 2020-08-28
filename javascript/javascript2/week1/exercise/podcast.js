const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];
let ul = document.createElement('ul');
const pageBody = document.querySelector("body");
pageBody.appendChild(ul);

for(let i= 0; i < podcasts.length; i++)
{
    
let li = document.createElement('li');
let h1 = document.createElement('h1');
h1.innerHTML = podcasts[i].name;
li.appendChild(h1);

ul.appendChild(li);


if(podcasts[i].imageUrl !== undefined)
{
    
let image = document.createElement('image');
image.src = podcasts[i].imageUrl;
li.appendChild(image);

}


}
function imageInserter(imageUrl, elementToAppendImageTo) {
    const image = document.createElement('IMG')
    image.src = imageUrl;
    elementToAppendImageTo.appendChild(image);
}
imageInserter('https://picsum.photos/536/355', document.querySelector('body'));