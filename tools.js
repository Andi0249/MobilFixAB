/*Detta är en kod som vill lärde oss som gör att när klickar på något så kommer den ändra färg*/ 

var imgClicking = document.querySelectorAll(".col") 

for (let i = 0; i < document.querySelectorAll(".col").length; i++)
{
    document.querySelectorAll(".col")[i].addEventListener("click", function () {
    if ("click") 
    {
      this.style.color="#e97171";
    }
    else
    {
       
    }
   
       
    });
}


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  function myFunction2() {
    var popup2 = document.getElementById("myPopup2");
    popup2.classList.toggle("show2");
  }

  function myFunction3() {
    var popup3 = document.getElementById("myPopup3");
    popup3.classList.toggle("show3");
  }

  function myFunction4() {
    var popup4 = document.getElementById("myPopup4");
    popup4.classList.toggle("show4");
  }


