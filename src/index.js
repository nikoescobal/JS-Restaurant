import navContainer from "./nav";
import homeContainer from "./home";
import menuContainer from "./menu";
import contactContainer from "./contact";

const content = document.getElementById('content');
navContainer();
homeContainer();
menuContainer();
contactContainer();
footerContainer();

const tablinks = document.querySelectorAll('.tablink');

tablinks.forEach(clickedTab => {
      // Add onClick event listener on each tab
      clickedTab.addEventListener('click', () => {
            // Remove the active class from all the tabs (this acts as a "hard" reset)
            tablinks.forEach(tablink => {
              console.log(tablink)
              tablinks.classList.remove('active');
            });




            // const nav = document.createElement('nav');
            // nav.className = 'bg-gray-100 border overflow-hidden border-2 border-gray-200';
            // nav.innerHTML = `
            // <div class='px-12 py-6 flex items-center justify-between text-3xl text-yellow-600 font-great-vibes font-bold italic'>
            //   <figure class="flex align-items items-center">
            //   <figcaption>Bistro Ferdinand &nbsp</figcaption>
            //   <img class="w-12 text-center" src="./assets/dish.png" alt="logo">
            //   </figure> 
            //   <ul class='flex justify-around w-1/4 text-xl'>
            //     <li><button class='tablinks p-3 bg-yellow-500 text-white rounded italic font-bold '>Home</button></li>
            //     <li><button class='tablinks p-3 text-yellow-700 rounded italic font-bold '>Menu</button></li>
            //     <li><button class='tablinks p-3 text-yellow-700 rounded italic font-bold '>Contact</button></li>
            //   </ul>
            // </div>
            // `

            // content.appendChild(nav);

            // const home = document.createElement('div');
            // home.id = 'home';
            // home.style.background = `url('./assets/main-image.jpg') center`;
            // home.style.minHeight = '90vh';
            // home.style.backgroundSize = 'cover';
            // const mainText = document.createElement('h1');

            // mainText.innerHTML = `
            // <div class="flex flex-col py-44">
            //   <h1 class="flex text-center justify-center font-bold text-8xl font-bold italic text-white">
            //     Eat. Drink. Indulge.
            //   </h1>
            //   <h2 class="flex text-center justify-center text-2xl space-y-4 italic text-white">Bistro Ferdinand, La Liga Hotel, Barcelona</h2>

            // </div>
            // `
            // home.appendChild(mainText);
            // content.appendChild(home);

            // const menu = document.createElement('div');

            // menu.id = 'menu';

            // menu.style.background = `url('./assets/wine.jpg') center`;

            // menu.style.minHeight = '100vh';

            // menu.style.backgroundSize = 'cover';

            // const menuText = document.createElement('h2');

            // menuText.innerHTML = `
            //   <h2 class='flex text-center text-white justify-center space-y-6 py-6 font-bold text-6xl font-bold italic'>Menu</h2>
            //     <div class="grid grid-cols-3 gap-4 p-4">
            //       <div class="w-full text-center">
            //         <figure class="relative">
            //           <img class="w-full max-h-72" src="./assets/pancakes.jpg" alt="Bluberry Pancakes" />
            //           <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Blueberry Pancakes - $16.00</figcaption>
            //         </figure>
            //       </div>
            //       <div class="w-full text-center">
            //         <figure class="relative">
            //           <img class="w-full max-h-72" src="./assets/steak-fries.jpg" alt="Steak" />
            //           <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Steak & Fries - $149.99</figcaption>
            //         </figure>
            //       </div>
            //       <div class="w-full text-center">
            //         <figure class="relative">
            //           <img class="w-full max-h-72" src="./assets/frutti-di-mare.jpg" alt="Frutti di Mare" />
            //           <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Frutti di Mare - $79.99</figcaption>
            //         </figure>
            //       </div>
            //       <div class="w-full text-center">
            //         <figure class="relative">
            //           <img class="w-full max-h-72 object-cover bg-cover" src="./assets/main-image.jpg" alt="Hearty Pizza" />
            //           <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Hearty Pizza - $60.00</figcaption>
            //         </figure>
            //       </div>
            //       <div class="w-full text-center">
            //         <figure class="relative">
            //           <img class="w-full max-h-72" src="./assets/wine3.jpg" alt="Wine" />
            //           <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Drink of the Day - $22.99</figcaption>
            //         </figure>
            //       </div>
            //       <div class="w-full text-white text-center">
            //         <figure class="relative">
            //           <img class="w-full max-h-72" src="./assets/coffee-dessert.jpg" alt="Coffee & Dessert of the Day" />
            //           <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Coffee & Dessert of the Day - $18.99</figcaption>
            //         </figure>
            //       </div>
            //   </div>
            // `
            // menu.appendChild(menuText);
            // content.appendChild(menu);


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