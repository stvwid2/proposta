AOS.init();

function showPage(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(page).classList.add('active');
}

function abrirPresente(){
  document.getElementById("presente").style.display="block";
}

new Chart(document.getElementById('grafico1'), {
  type:'bar',
  data:{
    labels:['Antes','Depois'],
    datasets:[{
      data:[3,15]
    }]
  }
});
