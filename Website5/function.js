var square = document.getElementById("square")
var button = document.getElementById("button")
var elements1 = document.querySelectorAll(".square2");
var counter1 = document.querySelector(".joCounters");
var counter2 = document.querySelector(".joCounters2");
var counter3 = document.querySelector(".joCounters3");
console.log(document.location)
function buttonOnclick() {

    square.style.transform = "translateX(-73.75em)";
    

    anime({
        targets: square,
        translateX: 0
      });
}

function buttonOnclick2() {

  for (var i = 0; i < elements1.length; i++) {
    elements1[i].style.transform = "translateX(-73.75em)"
  }
  

  anime({
      targets: elements1,
      translateX: 0
    });
}

function buttonOnclick3() {

    var counterelems = document.querySelector('.joCounters .joCounters2')

    var counters = {
      counter1: '0%',
      counter2: 0,
      counter3: 0
    }

    counter1.innerHTML = "Counter 1: 0"
    counter2.innerHTML = "Counter 2: 0"
    counter3.innerHTML = "Counter 3: 0"


    anime({
        targets: counters,
        counter1: '100%',
        counter2: '500',
        counter3: '10',
        easing: 'linear',
        round: 1,
        update: function() {
          counter1.innerHTML = "Counter 1: " + counters.counter1
          counter2.innerHTML = "Counter 2: " + counters.counter2
          counter3.innerHTML = "Counter 3: " + counters.counter3
        }
      });
}

function buttonOnclick4() {

  square.style.transform = "translateX(-70em)";
  square.style.borderRadius = "0px"
  square.style.backgroundColor = "rgba(255, 71, 71)"
  

  anime({
      targets: square,
      translateX: 0,
      backgroundColor: '#f2932e',
      borderRadius: ['0%', '50%'],
      easing: 'easeInOutQuad',
      duration: 2000
    });
}

function buttonOnclick5() {

  osquare.style.transform = "translateX(-70em)";
  osquare.style.borderRadius = "0px"
  

  anime({
      targets: osquare,
      translateX: -10,
      rotate: '1turn',
      scale: 2,
      duration: 2000
    });
}

function toDomNodeNodeList() {
  
    document.location.href = "http://127.0.0.1:5500/domNodeNodeList.html";

}

function toJavaObject() {
  
  document.location.href = "http://127.0.0.1:5500/JavaObject.html";

}

function toCSSProp() {
  
  document.location.href = "http://127.0.0.1:5500/cssproperties.html";

}

function toCSSTrans() {
  
  document.location.href = "http://127.0.0.1:5500/csstransforms.html";

}