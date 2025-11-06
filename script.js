//biar tombol landing page smooth
const learnBtn = document.querySelector('.btn[href="#testimoni"]');
if (learnBtn) {
    learnBtn.addEventListener("click",e=> {
        e.preventDefault();
        const target = document.querySelector("#testimoni");
        if (target) {
            target.scrollIntoView({behavior: "smooth"});
        }
    })
}