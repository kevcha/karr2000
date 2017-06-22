function save_options() {
  var data = document.getElementById.value;
  chrome.storage.sync.set({'karrData': 'test'}, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// function restore_defaults() {

// }

// document.addEventListener('restore', restore_defaults);
document.getElementById('save').addEventListener('click', save_options);
