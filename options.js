function saveOptions() {
  var data = JSON.parse(document.getElementById('data').value);

  chrome.storage.sync.set({'karrData': data}, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function fillTextarea() {
  chrome.storage.sync.get('karrData', function(data) {
    if (data.karrData != undefined) {
      document.getElementById('data').value = JSON.stringify(data.karrData, null, '\t');
    }
  });
}

document.addEventListener('DOMContentLoaded', fillTextarea);
document.getElementById('save').addEventListener('click', saveOptions);
