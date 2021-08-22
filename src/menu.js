/* eslint-disable */
import menuItems from './menudata';

const menuContainer = () => {
  const menu = document.createElement('div');

  menu.id = 'menu';
  menu.style.background = 'url(\'./assets/wine.jpg\') center';
  menu.style.minHeight = '100vh';
  menu.style.backgroundSize = 'cover';
  const menuText = document.createElement('h2');

  let output = '';
  menuItems.forEach((el) => {
    output += ` 
    <div class="w-full text-center">
    <figure class="relative">
      <img class="rounded w-full object-cover max-h-96" src=${el.image} alt=${el.alt} />
      <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">${el.figcaption}</figcaption>
    </figure>
  </div>`;
  });

  menuText.innerHTML = `

  <h2 class='flex text-center text-white justify-center space-y-6 py-6 font-bold text-6xl font-bold italic'>Menu</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-3 lg:p-4">
    ${output}
  </div>
`;
  menu.appendChild(menuText);
  return menu;
};
export default menuContainer;