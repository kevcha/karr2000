$(function() {
  // Get custom data from local storage
  chrome.storage.sync.get('karrData', function(data) {
    if (data != undefined) {
      // TODO : replace matching elements in DOM
    }
  });
});
