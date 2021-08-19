const content = document.getElementById('content');
const nav = document.createElement('nav');
nav.className = 'bg-gray-100 border';
nav.innerHTML = `
    <div class='px-12 py-8 flex justify-between text-2xl text-blue-500 font-sans font-bold italic'>Tartookie
      <ul class='flex justify-around w-1/3 text-xl text-blue-500 font-bold'>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
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
  <footer class="px-4 py-6 flex items-center absolute bottom-0 justify-center text-blue-500 w-full bg-gray-100 font-mono italic z-50">
    <p class="flex space-x-2">
    <p> Copyright &copy; 2020-2021.&nbsp </p>
    <p> Made by Shiver Tech</p>
    <a href="logo-1.svg"></a>
  </footer>
`
content.appendChild(footer);