import navContainer from "./nav";
import homeContainer from "./home";
import menuContainer from "./menu";
import contactContainer from "./contact";
import footerContainer from "./footer";

const content = document.getElementById('content');
navContainer();
const container = document.createElement('section');
container.appendChild(homeContainer());
content.appendChild(container);

const tablinks = document.querySelectorAll('.tablink');
tablinks.forEach(tablink => {
  tablink.addEventListener('click', () => {
    let text = tablink.innerHTML + '';
    container.innerHTML = ''
    switch (text) {
      case 'Home':
        console.log(container)
        container.appendChild(homeContainer())
        break;
      case 'Menu':
        console.log(container)
        container.appendChild(menuContainer())
        break;
      case 'Contact':
        console.log(container)
        container.appendChild(contactContainer())
        break;
      default:
        break;
    }
  });
})

footerContainer();
