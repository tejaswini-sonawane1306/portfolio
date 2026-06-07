 window.addEventListener("scroll",()=>{
        document.querySelector(".sec-div").classList.add("show");
    });

     window.addEventListener("scroll",()=>{
        document.querySelector("#skill").classList.add("show");
    });

    window.addEventListener("scroll",()=>{
        document.querySelector("header").classList.add("show")
    });

    //about Section

 function cv() {
        alert("downloading cv")
    }

    function mode(){
    const togglebtn = document.getElementById("theme-toggle");

    if(localStorage.getItem("theme")==="light"){
        document.body.classList.add("light-mode");
        togglebtn.textContent = "Light-Mode";
    }
    togglebtn.addEventListener("click", ()=>{
        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){
            localStorage.setItem("theme","light");
            togglebtn.textContent = "Light-Mode";
        }else{
            localStorage.setItem("theme","dark");
            togglebtn.textContent = "Dark Mode";
        }
        
    });

     document.getElementById("theme-switch").addEventListener("change",()=>{
        document.body.classList.toggle("light-mode");
    });

    }
    

