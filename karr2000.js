$(function() {
  // Get custom data from local storage
  chrome.storage.sync.get('karrData', function(data) {
    if (data != undefined) {
      // TODO : replace matching elements in DOM
      walk(document.body, data.karrData);
    }
  });
});


function walk(node, replacements) {
  var child, next;

  switch (node.nodeType){
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child, replacements);
        child = next;
      }
      break;
    case 3: // Text node
      handleText(node, replacements);
      break;
  }
}

function handleText(textNode, replacements) {
  var v = textNode.nodeValue;
  replacements.forEach(function(replacement) {
    v = v.replace(new RegExp(replacement.match, 'i'), replacement.substitute);
    textNode.nodeValue = v;
  });
}
