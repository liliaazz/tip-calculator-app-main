let billInput = document.querySelector('#billInput');
let customBtn = document.getElementById('customBtn');
let numOfPeople = document.getElementById('peopleInput');
let message = document.getElementById('message')
let warning = document.getElementById('warning')
let percentageBtn = document.querySelectorAll('.greenbtn')
let bill, tip;
let numOfperson = 1;
let tipPercentage = 5;
let tipAmountDisplay = document.getElementById('tipAmount')
let totalDisplay = document.getElementById('total')



numOfPeople.addEventListener('input', checkpeople);
billInput.addEventListener('input', userBill)
customBtn.addEventListener('input', personalizedtip)

percentageBtn.forEach(chosenBtn => chosenBtn.addEventListener('click' , (e) => {
      tipPercentage = e.target.id;
      calculate()
})) 

function personalizedtip(){
   if (customBtn.value > 0){
      tipPercentage = customBtn.value;
   }

   calculate()
}

function checkpeople(){
   if (numOfPeople.value <= 0){
      message.textContent = 'number should be higher than zero';
   } else if (numOfPeople.value > 0){
      message.textContent = ' ';
      numOfperson = numOfPeople.value;
      calculate()
      
   }

}

function userBill(){
   if (billInput.value <= 0){
      warning.textContent = 'number should be higher than zero';
   } else if (billInput.value > 0){
      warning.textContent = ' ';
      bill = billInput.value;
      calculate()
      return bill;
   }
}

function calculate(){

   let tipAmount =  parseFloat( (((Number(bill) * Number(tipPercentage)) / 100 ) / Number(numOfperson))).toFixed(2);
   let total = Number(tipAmount) + (Number(bill)/ Number(numOfperson));
   tipAmountDisplay.textContent = tipAmount;
   totalDisplay.textContent = total
   console.log(bill)
   console.log(tipPercentage)
   console.log(numOfperson)
   console.log(tipAmount)
}




