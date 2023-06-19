const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.IsIntersecting){
            document.querySelectorAll(".animated").classList.add("fadeInLeft");
        }
    })
})

observer.observe(document.querySelector(".main__container"));