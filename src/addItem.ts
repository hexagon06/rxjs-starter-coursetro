
function additem(value: any): void {
  const node = document.createElement('li');
  const textNode = document.createTextNode(value);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
