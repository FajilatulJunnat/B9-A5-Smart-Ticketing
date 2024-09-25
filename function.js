const seatShow=document.getElementById('selected-seat-show')
const countSelected=document.getElementById('selected-seat-count')
const availableSeatList=document.getElementById('Available-seat')
const totalPrice=document.getElementById('totalprice')
// cupon
const cuponInput=document.getElementById('cupon-input')
const cuponbtn=document.getElementById('cupon-btn')
// defualt text
const defaultText=document.getElementById('default-text')
// grand
const grandTotal =document.getElementById('grand-total')
// next button
const nextBtn=document.getElementById('next-btn')
// input number
const inputNumber=document.getElementById('input-number')
let Price=0
let selectedSeatList=[];

function selectedSeat(event) {
   // one seat booked one time
   const value=event.innerText
   if (selectedSeatList.includes(value)) {
      
      return alert('seat already booked')
   }
   else if(selectedSeatList.length<4){
      // remove default text
      defaultText.classList.add('hidden')
      // when select seat remove diseable from input number
      inputNumber.removeAttribute('disabled')
      // add selected seat
   event.classList.add('bg-primary','text-white')
  
   seatShow.innerHTML +=`
    <li class="flex justify-between text-lg list-none">
                    <span>${ event.innerText}</span>
                    <span>Economy</span>
                    <span>550</span>
                  </li>
                  
   `
   // increase seat
   selectedSeatList.push(event.innerText)
   countSelected.innerText=selectedSeatList.length;
   const availableSeatValue=parseInt(availableSeatList.innerText)
   // decrease seat
   const newAvailableSeat=availableSeatValue-1;
   availableSeatList.innerText=newAvailableSeat;
   // update price
   Price+=550;
   totalPrice.innerText=Price.toFixed(2);
   if (selectedSeatList.length>3) {
      cuponInput.removeAttribute('disabled')
      cuponbtn.removeAttribute('disabled')
   }
   }
   else{
      return alert('Maximum four seat booked')
   }
   
}
// discount 
document.getElementById('cupon-btn').addEventListener('click',function(){
   let copunSave=0
   const cuponInputValue=cuponInput.value
   if (cuponInputValue !=='NEW50' && cuponInputValue !=='Couple 20') {
       alert('Your Provided Cupon is not Valid')
       return
   }
   if (cuponInputValue ==='NEW50') {
      copunSave = Price * (15/100);

   }else  if (cuponInputValue ==='Couple 20') {
      copunSave = Price * (20/100);

   }
   // show discount or cupon price
   const showCuponPrice=document.getElementById('show-cupon-price')
   showCuponPrice.innerHTML =`
   <p class="font-bold">Total Price</p>
                  <P class="font-bold">-Discount: <span>${copunSave}</span></P>
   `

   const grandTotalValue=Price - copunSave
  
   
   grandTotal.innerText=grandTotalValue.toFixed(2)
   
})
// enable next button
inputNumber.addEventListener('input',function(e){
   const inputValue=e.target.value
   console.log(inputValue);
   
   if (inputValue.length >= 11) {
      nextBtn.removeAttribute('disabled')
   }
})
document.getElementById('continue-btn').addEventListener('click',function(){
   window.location.reload()
})
