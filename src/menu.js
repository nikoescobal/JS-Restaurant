const menuContainer = () => {
  const menu = document.createElement('div');

  menu.id = 'menu';
  menu.style.background = `url('./assets/wine.jpg') center`;
  menu.style.minHeight = '100vh';
  menu.style.backgroundSize = 'cover';
  const menuText = document.createElement('h2');

  menuText.innerHTML = `
  <h2 class='flex text-center text-white justify-center space-y-6 py-6 font-bold text-6xl font-bold italic'>Menu</h2>
    <div class="grid grid-cols-3 gap-4 p-4">
      <div class="w-full text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/pancakes.jpg" alt="Bluberry Pancakes" />
          <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Blueberry Pancakes - $16.00</figcaption>
        </figure>
      </div>
      <div class="w-full text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/steak-fries.jpg" alt="Steak" />
          <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Steak & Fries - $149.99</figcaption>
        </figure>
      </div>
      <div class="w-full text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/frutti-di-mare.jpg" alt="Frutti di Mare" />
          <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Frutti di Mare - $79.99</figcaption>
        </figure>
      </div>
      <div class="w-full text-center">
        <figure class="relative">
          <img class="w-full max-h-72 object-cover bg-cover" src="./assets/main-image.jpg" alt="Hearty Pizza" />
          <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Hearty Pizza - $60.00</figcaption>
        </figure>
      </div>
      <div class="w-full text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/wine3.jpg" alt="Wine" />
          <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Drink of the Day - $22.99</figcaption>
        </figure>
      </div>
      <div class="w-full text-white text-center">
        <figure class="relative">
          <img class="w-full max-h-72" src="./assets/coffee-dessert.jpg" alt="Coffee & Dessert of the Day" />
          <figcaption class="font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2">Coffee & Dessert of the Day - $18.99</figcaption>
        </figure>
      </div>
  </div>
`
  menu.appendChild(menuText);
  return menu;
}
export default menuContainer;