const contactContainer = () => {
  const contact = document.createElement('div');
  contact.id = 'contact';
  contact.className = 'tabContent';
  contact.style.background = `url('./assets/cafe3.jpg') center`;
  contact.style.minHeight = '100vh';
  contact.style.backgroundSize = 'cover';
  const contactText = document.createElement('h2');

  contactText.innerHTML = `
<section class="text-gray-600 body-font relative">
<div class="absolute inset-0 ">
  <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61547933.122664824!2d23.8502446!3d19.6875872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sph!4v1629487793016!5m2!1sen!2sph" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
</div>
<div class="container px-5 py-24 mx-auto font-serif flex">
  <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
    <h2 class="text-gray-900 text-lg mb-1 font-3xl font-bold title-font">Contact Us</h2>
    <p class="leading-relaxed mb-5 text-gray-600">Your feedback on our food and service is a crucial factor to improving the experience. </p>
    <div class="relative mb-4">
      <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
      <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
    </div>
    <div class="relative mb-4">
      <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
      <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
    </div>
    <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
    <p class="text-xs text-gray-500 mt-3">We, your family from Bistro Ferdinand, La Liga Hotel, Barcelona, look forward to serving you again. Stay safe, friend. Adios! </p>

  </div>
</div>
</section>
`
  contact.appendChild(contactText);
  return contact;

}
export default contactContainer;