let input_1 = document.getElementById('inputbox')
let input_2 = document.getElementById('inputboxx')
let temp = ""

const swapp=()=>{
   if(input_1.value && input_2.value == ""){
      window.alert("enter the element")
   }
   else if (input_1.value === input_2.value){
      alert("Please Enter Different Value")
   }
   else{
      temp = input_1.value
      input_1.value = input_2.value
      input_2.value = temp 

   }
}