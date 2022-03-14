function linkactive(e){
    if (document.querySelector(".active") !== null) {
        document.querySelector(".active").classList.remove("active")
      }
    e.target.classList.add("active")
}


