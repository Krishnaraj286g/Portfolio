// navbar

// document.addEventListener("DOMContentLoaded",()=>{
// let navbar=document.getElementById("navbar");

// window.addEventListener("scroll",()=>{
//     navbar.classList.toggle("zoom-out",window.scrollY > 0);
// });
// });



 // about sec

        var tablinks = document.getElementsByClassName('tab-links');
        var tabcontents = document.getElementsByClassName('tab-contents');

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");

        }


        // sidemenu

        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right ="0";
        }

        function closemenu(){
            sidemenu.style.right = "-200px";
        }



        // Contact

          const scriptURL = 'https://script.google.com/macros/s/AKfycbylPHObaMH3E2E_G1Trt_p7sqyPNqjBggGPxc_j9OKVi5LAlzOGDGg31K04eAI72YmVog/exec'
          const form = document.forms['submit-to-google-sheet'];
          const msg = document.getElementById("msg");

          form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => { 
                msg.innerHTML = "Message send Successfully !";
                setTimeout(function(){
                    msg.innerHTML = "";
                },3000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
  })



//   Project slider

            let prev = document.querySelector('.prev');
        let next = document.querySelector('.next');

        next.addEventListener("click", function(){
            let items = document.querySelectorAll(".work-container");
            document.querySelector(".work-list").appendChild(items[0]);
        })
        prev.addEventListener("click", function(){
            let items = document.querySelectorAll(".work-container");
            document.querySelector(".work-list").prepend(items[items.length - 1]);
        })

//slide

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  
  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Optional: auto-slide every 5 seconds
// setInterval(nextSlide, 5000);

// projects
let seemorebtn = document.getElementById("seemorebtn");
let work = document.querySelectorAll(".project-item");

seemorebtn.addEventListener("click",() => {
    work.forEach((item,index) => {
        if(index >= 2){
            item.style.display = "block";

        }
    });
    seemorebtn.style.display = "none";
})


// reaveal

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1
});

reveals.forEach(reveal => {
  observer.observe(reveal);
});
