
let output = document.querySelector(".output");
let button = document.querySelector("#button");
function evaluator(e){
    e.preventDefault();
    let input = document.querySelector("#input").value;
    var i,j=0;
    var matcher = /^[a-zA-Z0-9]*$/;
    var inputUpperCase = input.toUpperCase();
    var inputArray=[];
    var outputArray = [];
    for(i = 0; i < input.length; i++){
        if(inputUpperCase[i].match(matcher)){
            j++;
            inputArray[j-1] = inputUpperCase[i];
        }
    }

    for(i=inputArray.length; i>= 1; i--){
        outputArray[inputArray.length-i] = inputArray[i-1];
    }

  
    var counter = 0;

    for(i =0; i<inputArray.length; i++){
        if(inputArray[i]== outputArray[i]){
            counter++;
        }
    }
    if(input == ""){
        alert("Please enter the input first.");
    }else{
    if(counter == inputArray.length){
        output.style.display="block";
        output.innerHTML = `<h2>${input} is a palindrome.</h2>`;
    }else{
        output.style.display = "block";
        output.innerHTML = `<h2>${input} is not a palindrome.</h2>`;
    }
}
}

button.onclick = evaluator;
