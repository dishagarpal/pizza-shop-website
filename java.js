const button = document.getElementById('orderBtn');

button.addEventListener('click', () => {
  button.textContent = "Done"; 
  button.disabled = true;        
});
