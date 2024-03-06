const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const convert = document.getElementById('convert');
const reset = document.getElementById('reset');

convert.addEventListener('click', () => {
     if (celsius.value !== '') {
        fahrenheit.value = ((parseFloat(celsius.value) * 9/5) + 32).toFixed(2);
    }else if(fahrenheit.value!== '') {
        celsius.value = ((parseFloat(fahrenheit.value) - 32) * 5/9).toFixed(2);
    }
})
reset.addEventListener('click', () => {
   
    celsius.value = '';
    fahrenheit.value ='';
})
