//like & shuffle button
$('.heart').click(function(){
    $(this).toggleClass('clicked');
  });
  
  $('.shuffle').click(function(){
    $(this).toggleClass('clicked');
  });
  
  //show info box on hover
  $('#player').hover(function(){ 
    $('.info').toggleClass('up');
  });
  
  //music player settings
  
  let audio = new Audio('https://zingmp3.vn/bai-hat/Pink-Heart-Meadowlark/ZW8077O0.html');
  
  $('.pause').hide(); //hide pause button until clicked
  
  //play button
  $('.play').click(function(){
    audio.play();
    $('.play').hide();
    $('.pause').show();
  });
  
  //pause button
  $('.pause').click(function(){
    audio.pause();
    $('.play').show();
    $('.pause').hide();
  });
  

  /*calendar*/
$(function() {
    $("#calendar").datepicker({
      inline: true,
      showOtherMonths: true,
      selectOtherMonths: false,
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    });
  });