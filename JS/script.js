$(document).ready(function(){
  //get curent date
  const date = new Date();
  const hour = date.getHours();
  let massage = "";
  if(hour <= 12 ){
    massage = "Good Morning";
  }
  if(hour > 12){
    massage = "Good Afternoon";
  }
  if(hour >= 17){
    massage = "Good Evening";
  }
  $('#headingtext').empty().append(massage +" "+ "From Ratanak");
})