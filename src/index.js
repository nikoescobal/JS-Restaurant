const content = document.getElementsByClassName('content')[0]

console.dir(content)
const header = document.createElement('header');

header.id = 'header-id'

header.className = 'header flex bg-gray-100 border'

header.innerHTML = `

      <ul class='flex'>
        <li>home</li>
        <li>menu</li>
        <li>contact</li>
      </ul>
    
`
content.appendChild(header);