const footerContainer = () => {
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

}
export default footerContainer;