let i = 0;
const container = document.querySelector('#container');

while (i < 256) {
  const div = document.createElement('div');
  div.setAttribute('class', 'gridItem');
  div.setAttribute('style', 'width: 50px; height: 50px;')
  container.appendChild(div);
  i += 1;
}