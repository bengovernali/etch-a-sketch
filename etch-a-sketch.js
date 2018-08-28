let i = 0;
const container = document.querySelector('#container');

while (i < 256) {
  let div = document.createElement('div');
  div.setAttribute('class', 'gridItemAlpha');
  div.setAttribute('style', 'width: 50px; height: 50px; border-width: 1px; border-color: black; border-style: solid');
  container.appendChild(div);
  i += 1;
}

function shadeGray() {
  div.setAttribute('style', 'background-color: gray');	
}

function shadeBlack() {
  div.setAttribute('style', 'backgrounf-color: black');	
}