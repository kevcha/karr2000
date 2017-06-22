function save_options() {
  var data = JSON.parse(document.getElementById('data').value);

  chrome.storage.sync.set({'karrData': data}, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}


document.getElementById('save').addEventListener('click', save_options);
