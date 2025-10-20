window.addEventListener("load", function() {
    const loader = document.querySelector(".loader-wrapper");
  
    // tampil dulu  2 detik
    setTimeout(() => {
      loader.style.transition = "opacity 1.5s ease"; 
      loader.style.opacity = "0"; 
    }, 2000);
  
    
    setTimeout(() => {
      loader.style.display = "none";
    }, 3500);
  });
  


const currentPage = window.location.pathname.split("/").pop(); // ambil nama file sekarang
const navLinks = document.querySelectorAll(".navbar .nav-link");

navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
