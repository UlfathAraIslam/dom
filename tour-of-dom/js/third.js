const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>My dynamic section</h1>
<p>Extra tag added inside paragraph</p>
<ul>
    <li>first item</li>
    <li>second</li>
    <li>third</li>
</ul>
`
main.appendChild(section);