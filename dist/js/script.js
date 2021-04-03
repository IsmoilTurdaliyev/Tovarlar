var isShow;
if(screen.width <=520){
    isShow= false;
}else{
    isShow = true
}
var options = {
    series: [
    {
      name: "chart 1",
      data: [38, 39, 43, 46, 42, 42, 43,44,40,45,43]
    },
    {
      name: "chart 2",
      data: [12, 11, 14, 18, 17, 13, 13,14,12,15,16]
    },
    {
      name: "chart 3",
      data: [10, 13, 15, 11, 10, 15, 10,12,11,9,12]
    },
    {
      name: "chart 4",
      data: [5, 7, 5, 7, 6, 8, 7,8,6,7,5,]
    }
    ,
    {
      name: "chart 5",
      data: [4, 5, 3, 6, 6, 3, 5,4,6,6,5]
    }
  ],
    chart: {
    height: 250,
    type: 'line',
    dropShadow: {
      enabled: false,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
        show: isShow      
    }
  },
  colors: ['#2DC1C9', '#5050D3','#908DFA','#F19423','#CD3588'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 3
  },
  
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sen','Oct','Nov'],
  },
  yaxis: {
    title: {
      text: 'Unique visitors'
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
  };
  var chart = new ApexCharts(document.querySelector("#charts"), options);
  chart.render();


 
  

window.onscroll = function () {
    if (scrollY >= 60 && screen.width <= 500) {
        menu.classList.add('fixed-menu');
    } else {
        menu.classList.remove('fixed-menu');
    }
} 

var slideProduct = document.getElementById("slideProduct")
var firstSlide = document.getElementById("first");
firstSlide.checked = true
var margin_right = 0;
var margin_left = 0;
var secondSlide = document.getElementById("second");
var thirdSlide = document.getElementById("third");
var fourthSlide = document.getElementById("fourth");
var fivethSlide = document.getElementById("fiveth");

firstSlide.addEventListener('click', function () {
    margin_right = 0;
    margin_left = 0;
    slideProduct.style.marginLeft = margin_left + '%'
    slideProduct.style.marginRight = margin_right + '%'
})
secondSlide.addEventListener('click', function () {
    margin_left = -100;
    margin_right = 100;
    slideProduct.style.marginLeft = margin_left + '%'
    slideProduct.style.marginRight = margin_right + '%'
})
thirdSlide.addEventListener('click', function () {
    margin_left = -200;
    margin_right = 200;
    slideProduct.style.marginLeft = margin_left + '%'
    slideProduct.style.marginRight = margin_right + '%'
})
fourthSlide.addEventListener('click', function () {
    margin_left = -300;
    margin_right = 300;
    slideProduct.style.marginLeft = margin_left + '%'
    slideProduct.style.marginRight = margin_right + '%'
})
fivethSlide.addEventListener('click', function () {
    margin_left = -400;
    margin_right = 400;
    slideProduct.style.marginLeft = margin_left + '%'
    slideProduct.style.marginRight = margin_right + '%'

})
var menu = document.getElementById("menu");
window.onscroll = function () {
    if (scrollY >= 60 && screen.width <= 560) {
        menu.classList.add('fixed-menu');
    } else {
        menu.classList.remove('fixed-menu');
    }
}
var left_arrow = document.getElementById("left_arrow");
var right_arrow = document.getElementById("right_arrow");
left_arrow.addEventListener('click', function () {
    if (margin_right != 0) {
        margin_right -= 100;
        margin_left += 100;
        slideProduct.style.marginLeft = margin_left + '%'
        slideProduct.style.marginRight = margin_right + '%'
        if (margin_left == 0) { firstSlide.checked = true }
        else if (margin_left == -100) { secondSlide.checked = true }
        else if (margin_left == -200) thirdSlide.checked = true
        else if (margin_left == -300) fourthSlide.checked = true
        else if (margin_left == -400) fivethSlide.checked = true
    }

})
right_arrow.addEventListener('click', function () {
    if (margin_right != 400) {
        margin_right += 100;
        margin_left -= 100;
        slideProduct.style.marginLeft = margin_left + '%'
        slideProduct.style.marginRight = margin_right + '%'
        if (margin_left == 0) { firstSlide.checked = true }
        else if (margin_left == -100) { secondSlide.checked = true }
        else if (margin_left == -200) thirdSlide.checked = true
        else if (margin_left == -300) fourthSlide.checked = true
        else if (margin_left == -400) fivethSlide.checked = true

    }

})