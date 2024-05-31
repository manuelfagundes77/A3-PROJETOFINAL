const y2 = document.querySelectorAll('.y2');

y2.forEach(num => {
   num.addEventListener('click', selecionou);
});


function selecionou() {
   if (this.classList.contains('clicou')) {
      this.classList.remove('clicou');
   } else {
      y2.forEach(num => {
         num.classList.remove('clicou');
      });
      this.classList.add('clicou');
       

     
   }
}