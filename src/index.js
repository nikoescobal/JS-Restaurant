const content = document.getElementById('content');
const nav = document.createElement('nav');
nav.className = 'bg-gray-100 border';
nav.innerHTML = `
      <div class='p-6 flex justify-between text-2xl text-blue-500 font-mono font-bold'>Cafe Ferdinand
      <ul class='flex justify-between w-1/2 text-2xl text-blue-500 font-mono font-bold'>
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

const footer = document.createElement('footer');