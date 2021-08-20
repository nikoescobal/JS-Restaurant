const content = document.getElementById('content');
const nav = document.createElement('nav');
nav.className = 'bg-gray-100 border overflow-hidden border-2 border-gray-200';
nav.innerHTML = `
<div class='px-12 py-6 flex items-center justify-between text-3xl text-yellow-600 font-great-vibes font-bold italic'>
  <figure class="flex align-items items-center">
  <figcaption>Bistro Ferdinand &nbsp</figcaption>
  <img class="w-12 text-center" src="./assets/dish.png" alt="logo">
  </figure> 
  <ul class='flex justify-around w-1/4 text-xl'>
    <li><button class='tablinks p-3 bg-yellow-500 text-white rounded italic font-bold '>Home</button></li>
    <li><button class='tablinks p-3 text-yellow-700 rounded italic font-bold '>Menu</button></li>
    <li><button class='tablinks p-3 text-yellow-700 rounded italic font-bold '>Contact</button></li>
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
  <h1 class="flex text-center justify-center font-bold text-8xl font-bold italic text-white">
    Eat. Drink. Indulge.
  </h1>
  <h2 class="flex text-center justify-center text-2xl space-y-4 italic text-white">Bistro Ferdinand, La Liga Hotel, Barcelona</h2>

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
  <h2 class='flex text-center text-white justify-center space-y-6 py-6 font-bold text-6xl font-bold italic'>Menu</h2>
    <div class="grid grid-cols-3 gap-4 p-4">
      <div class="w-full text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/pancakes.jpg" alt="Bluberry Pancakes" />
          <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Blueberry Pancakes - $10</figcaption>
        </figure>
      </div>
      <div class="w-full text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/steak-fries.jpg" alt="Steak" />
          <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Steak & Fries - $10</figcaption>
        </figure>
      </div>
      <div class="w-full text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/frutti-di-mare.jpg" alt="Frutti di Mare" />
          <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Frutti di Mare - $10</figcaption>
        </figure>
      </div>
      <div class="w-full text-center">
        <figure class="relative">
          <img class="w-full max-h-72 object-cover bg-cover" src="./assets/main-image.jpg" alt="Hearty Pizza" />
          <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Hearty Pizza - $10</figcaption>
        </figure>
      </div>
      <div class="w-full text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/wine3.jpg" alt="Wine" />
          <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Drink of the Day - $10</figcaption>
        </figure>
      </div>
      <div class="w-full text-white text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/coffee-dessert.jpg" alt="Coffee & Dessert of the Day" />
          <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Coffee & Dessert of the Day - $10</figcaption>
        </figure>
      </div>
  </div>
`
menu.appendChild(menuText);
content.appendChild(menu);

const contact = document.createElement('div');

contact.id = 'contact';

contact.style.background = `url('./assets/cafe3.jpg') center`;

contact.style.minHeight = '75vh';

contact.style.backgroundSize = 'cover';

const contactText = document.createElement('h2');

contactText.innerHTML = `
<section class="text-gray-600 body-font relative">
<div class="absolute inset-0 ">
  <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61547933.122664824!2d23.8502446!3d19.6875872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sph!4v1629487793016!5m2!1sen!2sph" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
</div>
<div class="container px-5 py-24 mx-auto font-serif flex">
  <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
    <h2 class="text-gray-900 text-lg mb-1 font-3xl font-bold title-font">Contact Us</h2>
    <p class="leading-relaxed mb-5 text-gray-600">Your feedback on our food and service is a crucial factor to improving the experience. </p>
    <div class="relative mb-4">
      <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
      <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
    </div>
    <div class="relative mb-4">
      <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
      <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
    </div>
    <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
    <p class="text-xs text-gray-500 mt-3">We, your family from Bistro Ferdinand, La Liga Hotel, Barcelona, look forward to serving you again. Stay safe, friend. Adios! </p>

  </div>
</div>
</section>
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