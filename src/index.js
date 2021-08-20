const content = document.getElementById('content');
const nav = document.createElement('nav');
nav.className = 'bg-blue-100 border overflow-hidden border-2 border-gray-200';
nav.innerHTML = `
<div class='px-12 py-6 flex items-center justify-between text-3xl text-blue-700 font-gv font-bold italic'>
  <figure class="flex align-items items-center">
  <figcaption>Bistro Ferdinand &nbsp</figcaption>
  <img class="w-12 text-center text-blue-500" src="./assets/dish.png" alt="logo">
  </figure> 
  <ul class='flex justify-around w-1/4 text-xl'>
    <li><button class='tablinks p-3 bg-blue-100 text-blue-700 rounded font-bold'>Home</button></li>
    <li><button class='tablinks p-3 bg-blue-100 text-blue-700 rounded font-bold'>Menu</button></li>
    <li><button class='tablinks p-3 bg-blue-100 text-blue-700 rounded font-bold'>Contact</button></li>
  </ul>
</div>
`
content.appendChild(nav);

const home = document.createElement('div');

home.id = 'home';

home.style.background = `url('./assets/main-image.jpg') center`;

home.style.minHeight = '75vh';

home.style.backgroundSize = 'cover';

const mainText = document.createElement('h1');

mainText.innerHTML = `
<div class="flex flex-col py-44">
  <h2 class="flex text-center justify-center font-xs italic text-white">469 Nash Street, London</h2>
  <h1 class="flex text-center justify-center font-bold text-8xl font-bold italic text-white">
    Eat. Drink. Indulge.
  </h1>
</div>
`
home.appendChild(mainText);
content.appendChild(home);

const menu = document.createElement('div');

menu.id = 'menu';

menu.style.background = `url('./assets/wine.jpg') center`;

menu.style.minHeight = '75vh';

menu.style.backgroundSize = 'cover';

const menuText = document.createElement('h2');

menuText.innerHTML = `
  <h2 class='flex text-center justify-center space-y-6 py-6 font-bold text-6xl font-bold italic text-white'>Menu</h2>
    <div class="grid grid-cols-3 gap-4 p-4">
      <div class="w-full text-white text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/pancakes.jpg" alt="Bluberry Pancakes" />
          <figcaption class="font-bold rounded italic p-3 bg-blue-400 absolute top-9">Blueberry Pancakes - $10</figcaption>
        </figure>
      </div>
      <div class="w-full text-white text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/steak-fries.jpg" alt="Steak" />
          <figcaption class="font-bold rounded italic p-3 bg-blue-400 absolute top-9">Steak & Fries - $10</figcaption>
        </figure>
      </div>
      <div class="w-full text-white text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/frutti-di-mare.jpg" alt="Frutti di Mare" />
          <figcaption class="font-bold rounded italic p-3 bg-blue-400 absolute top-9">Frutti di Mare - $10</figcaption>
        </figure>
      </div>
      <div class="w-full text-white text-center">
        <figure class="relative">
          <img class="w-full max-h-72 object-cover bg-cover" src="./assets/main-image.jpg" alt="Hearty Pizza" />
          <figcaption class="font-bold rounded italic p-3 bg-blue-400 absolute top-9">Hearty Pizza - $10</figcaption>
        </figure>
      </div>
      <div class="w-full text-white text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/wine3.jpg" alt="Wine" />
          <figcaption class="font-bold rounded italic p-3 bg-blue-400 absolute top-9">Drink of the Day - $10</figcaption>
        </figure>
      </div>
      <div class="w-full text-white text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/coffee-dessert.jpg" alt="Coffee & Dessert of the Day" />
          <figcaption class="font-bold rounded italic p-3 bg-blue-400 absolute top-9">Coffee & Dessert of the Day - $10</figcaption>
        </figure>
      </div>
  </div>
`
menu.appendChild(menuText);
content.appendChild(menu);

const contact = document.createElement('div');

contact.id = 'contact';

contact.style.background = `url('./assets/cookie-cover.jpeg') center`;

contact.style.minHeight = '75vh';

contact.style.backgroundSize = 'cover';

const contactText = document.createElement('h2');

contactText.innerHTML = `
  <h2 class='flex text-center justify-center font-bold py-40 text-6xl font-bold italic text-white'>Eat. Drink. Relax.</h2>
`
contact.appendChild(contactText);
content.appendChild(contact);

// const footer = document.createElement('footer');

// footer.innerHTML = `
//   <footer class="px-4 py-6 flex items-center absolute bottom-0 justify-center text-blue-500 w-full bg-gray-100 font-sans italic z-50">
//     <p class="flex space-x-2">
//     <p> Copyright &copy; 2020-2021.&nbsp </p>
//     <p> Made by Shiver Tech&nbsp</p>
//     <div class='w-3'><img class='w-full h-full' src="./assets/logo-1.svg" alt="heart image"></div>

//   </footer>
// `
// content.appendChild(footer);