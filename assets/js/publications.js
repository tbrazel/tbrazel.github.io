document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.pub-abstract-toggle');

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var targetId = this.getAttribute('data-target');
      if (!targetId) return;

      // Just in case any stray whitespace sneaks in
      targetId = targetId.trim();

      var row = document.getElementById(targetId);
      if (!row) {
        console.warn('No abstract row found for', targetId);
        return;
      }

      var isHidden = (row.style.display === 'none' || row.style.display === '');

      // Toggle visibility
      row.style.display = isHidden ? 'table-row' : 'none';

      // Swap caret icon classes
      var icon = this.querySelector('i');
      if (icon) {
        if (isHidden) {
          icon.classList.remove('fa-caret-down');
          icon.classList.add('fa-caret-up');
        } else {
          icon.classList.remove('fa-caret-up');
          icon.classList.add('fa-caret-down');
        }
      }
    });
  });
});