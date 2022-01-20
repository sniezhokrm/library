$.prototype.parser = function(selector) {
  window.addEventListener('DOMContentLoaded', () => {

if (selector) {
  for (var i = 0; i < this.length; i++) {
    let textNodes = [];

    function recursy(element) {
      element.childNodes.forEach((node) => {
        if (node.nodeName.match(selector)) {
          const obj = {
            header: node.nodeName,
            content: node.textContent
          };
          textNodes.push(obj);
        } else {
          recursy(node);
        }
      });
    }

    recursy(this[i]);

    fetch('https://jsonplaceholder.typicode.com/posts/', {
      method: "POST",
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify(textNodes)
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }

}


  });


};
