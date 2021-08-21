import navContainer from './nav';
import homeContainer from './home';
import menuContainer from './menu';
import contactContainer from './contact';
import footerContainer from './footer';
import '../css/custom.css';


const content = document.getElementById('content');
navContainer(content);
const container = document.createElement('section');
container.appendChild(homeContainer());
content.appendChild(container);

const tablinks = document.querySelectorAll('.tablink');
tablinks.forEach((tablink) => {
  tablink.addEventListener('click', (e) => {
    const text = `${tablink.innerHTML}`;
    container.innerHTML = '';
    tablinks.forEach((tablink) => {
      tablink.classList.remove('bg-yellow-500', 'text-white');
    });
    e.target.classList.add('bg-yellow-500', 'text-white');
    e.target.classList.remove('text-yellow-700');
    switch (text) {
      case 'Home':
        container.appendChild(homeContainer());
        break;
      case 'Menu':
        container.appendChild(menuContainer());
        break;
      case 'Contact':
        container.appendChild(contactContainer());
        break;
      default:
        break;
    }
  });
});

footerContainer(content);