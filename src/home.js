const homeContainer = () => {

  const home = document.createElement('div');
  home.id = 'home';
  home.style.background = `url('./assets/main-image.jpg') center`;
  home.classList.add('bg-light-blue-600', 'opacity-100');
  home.style.minHeight = '90vh';
  home.style.backgroundSize = 'cover';
  const mainText = document.createElement('h1');

  mainText.innerHTML = `
  <div class="flex flex-col py-44">
    <h1 class="flex mx-auto rounded p-2 text-center justify-center font-bold text-8xl font-bold italic text-white bg-gradient-to-b from-transparent to-yellow-500 bg-opacity-30 hover:bg-opacity-70">
      Eat. Drink. Indulge.
    </h1>
    <h2 class="flex mx-auto rounded p-2 text-center justify-center text-2xl space-y-4 italic text-white bg-gradient-to-b from-transparent to-yellow-800 bg-opacity-30 hover:bg-opacity-70">Bistro Ferdinand, La Liga Hotel, Barcelona</h2>

  </div>
  `
  home.appendChild(mainText);
  return home;

}
export default homeContainer;