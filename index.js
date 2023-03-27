var cardowner=document.getElementById('cardnum');
var number=document.getElementById('card-number');
var ownerName=document.getElementById('card-owner');
var nameincard=document.getElementById('name');
var months=document.getElementById('month');
var cardMonth=document.getElementById('card-month');
var cardYear=document.getElementById('card-year');
var years=document.getElementById('year');
var cvc=document.getElementById('cvc');
var cvv=document.getElementById('backp');
var button=document.getElementById('confirm');
var cardinfo=document.getElementById('cardinfo');
var thank=document.getElementById('thankyou');
var continuee=document.getElementById('continue');

cardowner.addEventListener('input', () => {
    if(cardowner.value==""){
        number.textContent="0000 0000 0000 000"
    }else{
        let formattedValue = cardowner.value.substring(0, 16);
        formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ');
        number.textContent = formattedValue;
     }}
);

ownerName.addEventListener('input',()=>{
    if(ownerName.value==""){
        nameincard.textContent="JANE APPLESEED"
    }else{
        nameincard.textContent=ownerName.value;
    }
});


months.addEventListener('input', () => {
    let value = parseInt(months.value);
    if (isNaN(value) || value < 0) {
      cardMonth.textContent = "00";
    } else {
      cardMonth.textContent = value.toString().padStart(2, "0");
    }
  });


years.addEventListener('input',()=>{
    if(years.value==""){
        cardYear.textContent="00"
    }else{
        cardYear.textContent=years.value;
    }
});

cvc.addEventListener('input',()=>{
   if(cvc.value==""){
    cvv.textContent="000"
   }else{
    cvv.textContent=cvc.value;
   }
});

button.addEventListener('click', handleButtonClick);

function handleButtonClick(e) {
  e.preventDefault();
  button.removeEventListener('click', handleButtonClick);

  if(cardowner.value != "" && ownerName.value !="" && months.value !="" && years.value !="" && cvc.value !=""){
    cardinfo.style.display="none";
    thank.style.display="block";
    button.addEventListener('click', handleButtonClick);
  }
}

continuee.addEventListener('click', function() {
  cardowner.value = "";
  ownerName.value = "";
  months.value = "";
  years.value = "";
  cvc.value = "";
  number.textContent="0000 0000 0000 0000";
  nameincard.textContent="JANE APPLESEED";
  cardMonth.textContent="00";
  cardYear.textContent="00";
  cvv.textContent="000";
  cardinfo.style.display = "flex";
  thank.style.display = "none";
});
