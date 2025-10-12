// Small demo JS that toggles a class on the container
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('actionBtn');
  const container = document.querySelector('.container');
  if(btn && container){
    btn.addEventListener('click', ()=>{
      container.classList.toggle('active');
      btn.textContent = container.classList.contains('active') ? 'Reset' : 'Activate';
    });
  }
});
