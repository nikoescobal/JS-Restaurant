const homeContainer = () => {

  const home = document.createElement('div');
  home.id = 'home';
  home.className = 'tabContent';
  home.style.background = `url('./assets/main-image.jpg') center`;
  home.style.minHeight = '90vh';
  home.style.backgroundSize = 'cover';
  const mainText = document.createElement('h1');

  mainText.innerHTML = `
  <div class="flex flex-col py-44">
    <h1 class="flex text-center justify-center font-bold text-8xl font-bold italic text-white">
      Eat. Drink. Indulge.
    </h1>
    <h2 class="flex text-center justify-center text-2xl space-y-4 italic text-white">Bistro Ferdinand, La Liga Hotel, Barcelona</h2>

  </div>
  `
  home.appendChild(mainText);
  // content.appendChild(home);
  return home;

}
export default homeContainer;