const content = document.getElementById('content');
const nav = document.createElement('nav');
nav.className = 'header bg-gray-100 border';
nav.innerHTML = `
      <ul class='px-6 flex justify-between w-full'>
        <li>home</li>
        <li>menu</li>
        <li>contact</li>
      </ul>
`
content.appendChild(nav);

content.style.background = `url('./assets/cookie-cover.jpeg') center`;

content.style.minHeight = '100vh';

content.style.backgroundSize = 'cover';

const footer = document.createElement('footer');