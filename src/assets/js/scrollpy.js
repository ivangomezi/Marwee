function inView(e) { //scroll click option
    let element = document.getElementById(e);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    //active nav
    document.getElementById("services").classList.remove("txt-true");
    document.getElementById("partners").classList.remove("txt-true");
    document.getElementById("task").classList.remove("txt-true");
    document.getElementById("about").classList.remove("txt-true");

    let id_ = e.replace("section_", "");
    if(id_ != "talk"){
        document.getElementById(id_).classList.add("txt-true");
    }
}


window.onscroll = function() { //header background
    let scroll = window.scrollY;
    if(scroll >= 58) {
        document.getElementById("header_").classList.add("bg-true");
    }
    else {
        document.getElementById("header_").classList.remove("bg-true");
    }

    validator();
};

function validator() { //validar position scroll
    let scroll = window.scrollY;

    //active nav
    document.getElementById("services").classList.remove("txt-true");
    document.getElementById("partners").classList.remove("txt-true");
    document.getElementById("task").classList.remove("txt-true");
    document.getElementById("about").classList.remove("txt-true");

    if (scroll >= 0 && scroll < 790) {
        document.getElementById("services").classList.remove("txt-true");
        document.getElementById("partners").classList.remove("txt-true");
        document.getElementById("task").classList.remove("txt-true");
        document.getElementById("about").classList.remove("txt-true");
    }
    else if (scroll >= 799 && scroll < 1590) {
        document.getElementById("services").classList.add("txt-true");
    }
    else if (scroll > 1599 && scroll < 2390) {
        document.getElementById("task").classList.add("txt-true");
    }
    else if (scroll > 2399 && scroll < 3190) {
        document.getElementById("partners").classList.add("txt-true");
    }
    else if (scroll > 3199 && scroll < 3990) {
        document.getElementById("about").classList.add("txt-true");
    }
    else if (scroll > 4000) {
        document.getElementById("services").classList.remove("txt-true");
        document.getElementById("partners").classList.remove("txt-true");
        document.getElementById("task").classList.remove("txt-true");
        document.getElementById("about").classList.remove("txt-true");
    }
};