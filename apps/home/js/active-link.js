const navLinks = document.querySelectorAll("#navMenu .nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active")); // সব লিঙ্ক থেকে active রিমুভ
        this.classList.add("active"); // ক্লিক করা লিঙ্কে active যোগ
    });
});
