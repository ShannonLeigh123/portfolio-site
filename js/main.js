document.querySelectorAll('.toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const sub = btn.nextElementSibling;
    sub.classList.toggle('hidden');
    btn.textContent = sub.classList.contains('hidden') ? '+' : '-';
  });
});




