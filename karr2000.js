console.log('Hello world');
console.log(localStorage.getItem('test'));

// StorageArea.get('value', function(data) {
//   console.log(data)
// });

$(function() {
  chrome.storage.sync.get('karrData', function(data) {
  // Notify that we saved.
    console.log(data);
  });
});
