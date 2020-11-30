document.querySelector('button').addEventListener('click', function(e) {
    var form = document.querySelector('form'),
        list = document.getElementById('list');
    
    list.innerHTML = [].map.call(form.querySelectorAll('input'), function(el) {
      return '<li>' + el.value + '</li>';
    }).join('');
  });