document.querySelector('.button').addEventListener('click',function(event){
    event.preventDefault();
    var real = document.querySelector('.real').value
    document.querySelector('.dolar').textContent = `R$${Number(real * 5.70).toFixed(2)}`
    document.getElementById('campo').value=" "
})





