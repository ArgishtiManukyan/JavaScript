function checkNumber(){
    const userinput = document.querySelector('input').value;
    const number = 45;
    const messageElement = document.querySelector('.message');
    if(userinput === ''){
        messageElement.style.display = "block";

        messageElement.textContent = 'Խնդրում ենք մուտքագրել թիվ';
        messageElement.style.background = "red";
    }
   else  if(parseInt(userinput) === number){
        messageElement.style.display = "block";
        messageElement.textContent = 'Հաղթեցիր';
        messageElement.style.background = "green";
    }
    else if(parseInt(userinput) > number){
        messageElement.style.display = "block";
        messageElement.textContent='Սառ ես';
        messageElement.style.background = "while";
    }
    else {
        messageElement.style.display = "block";
        messageElement.textContent='Տաք ես'
        messageElement.style.background = "yellow";
    }

}