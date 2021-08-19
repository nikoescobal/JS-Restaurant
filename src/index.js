const content = document.getElementById('content');
const nav = document.createElement('nav');
nav.className = 'bg-gray-100 border overflow-hidden border-2 border-gray-200';
nav.innerHTML = `
    <div class='px-12 py-8 flex items-center justify-between text-2xl text-blue-500 font-sans font-bold italic'>Tartookie
      <ul class='flex justify-around w-1/4 text-xl'>
        <li><button class='p-3 bg-blue-100 text-blue-500 rounded font-bold'>Home</button></li>
        <li><button class='p-3 bg-blue-100 text-blue-500 rounded font-bold'>Menu</button></li>
        <li><button class='p-3 bg-blue-100 text-blue-500 rounded font-bold'>Contact</button></li>
      </ul>
    </div>
`
content.appendChild(nav);

content.style.background = `url('./assets/cookie-cover.jpeg') center`;

content.style.minHeight = '100vh';

content.style.backgroundSize = 'cover';

const mainText = document.createElement('h1');

mainText.innerHTML = `
  <h1 class='flex text-center justify-center font-bold py-40 text-6xl font-bold italic text-white'>Eat. Drink. Indulge.</h1>
`
content.appendChild(mainText);


const footer = document.createElement('footer');

footer.innerHTML = `
  <footer class="px-4 py-6 flex items-center absolute bottom-0 justify-center text-blue-500 w-full bg-gray-100 font-sans italic z-50">
    <p class="flex space-x-2">
    <p> Copyright &copy; 2020-2021.&nbsp </p>
    <p> Made by Shiver Tech&nbsp</p>
    <div class='w-3'><img class='w-full h-full' src="./assets/logo-1.svg" alt="heart image"></div>
    
  </footer>
`
content.appendChild(footer);