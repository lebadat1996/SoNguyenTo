let number = parseInt(prompt("20 so prime "));
let count = 0;
let i = 0;
let textResult = "";
function isPrime(n) {
    if (n >= 2){
        for (let i = 2; i <= Math.sqrt(n); i++){
            if (n % i === 0){
                return false;
            }
        }
        return true;
    }else {
        return false;
    }
}
while (count < number){
    if (isPrime(i)){
        textResult += i + " is a prime <br>"
        count ++;
    }
    i++;
}
document.getElementById("result").innerHTML = textResult;