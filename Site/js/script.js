var myWindow;

function openWin() {
    myWindow = window.open("dropdown.html", "", "width=520, height=820");
}

function bordecopado() {
  $('#bordehov1').animate({padding:'5px'});
  $('#bordehov1').animate({borderColor:'#665600'});
}
function bordechau() {
  $('#bordehov1').animate({padding:'0px'});
  $('#bordehov1').animate({borderColor:'#000000'});
}
function bordecopado2() {
  $('#bordehov2').animate({padding:'5px'});
  $('#bordehov2').animate({borderColor:'#665600'});
}
function bordechau2() {
  $('#bordehov2').animate({padding:'0px'});
  $('#bordehov2').animate({borderColor:'#000000'});
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function precio1() {
  $("#rp").text("110");
  $("#drop1").text("420");
}

function precio2() {
  $("#rp").text("220");
  $("#drop1").text("1050");
}
function precio3() {
  $("#rp").text("410");
  $("#drop1").text("2150");
}

function precio4() {
  $("#rp").text("650");
  $("#drop1").text("3700");
}
function precio5() {
  $("#rp").text("1450");
  $("#drop1").text("7650");
}

function precio6() {
  $("#rp").text("2700");
  $("#drop1").text("1610");
}
