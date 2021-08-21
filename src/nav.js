const navContainer = (content) => {
  const nav = document.createElement('nav');
  nav.className = 'bg-gray-100 border overflow-hidden border-2 border-gray-200';
  nav.innerHTML = `
<div class='px-8 lg:px-12 py-6 flex items-center justify-between text-xl md:text-3xl lg:text-5xl text-yellow-600 font-great-vibes font-bold italic'>
  <figure class="flex align-items items-center">
  <figcaption class="font-gv">Bistro Ferdinand &nbsp</figcaption>
  <img class="w-8 lg:w-12 text-center" src="./assets/dish.png" alt="logo">
  </figure> 
  <ul class='flex justify-around w-1/4 text-xs md:text-lg lg:text-xl'>
    <li><button class='tablink p-3 bg-yellow-500 text-white rounded italic font-bold '>Home</button></li>
    <li><button class='tablink p-3 text-yellow-700 rounded italic font-bold '>Menu</button></li>
    <li><button class='tablink p-3 text-yellow-700 rounded italic font-bold '>Contact</button></li>
  </ul>
</div>
`;

  content.appendChild(nav);
};
export default navContainer;