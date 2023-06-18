const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.IsIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
        }
    })
})

observer.observe(document.querySelector(".main__container"));