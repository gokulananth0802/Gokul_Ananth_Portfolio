 //menubar
 let menubar = document.querySelector('.menubar');
 let menu = document.querySelector('.menu');
 let scrollup = document.querySelector('.scroll');
 let menuIcon = document.querySelector('.scroll i');
 let newIcon;
 scrollup.addEventListener('click',() =>{
     menubar.classList.toggle("open");
     scrollup.classList.toggle("scrollup");
 })
var button = document.querySelector("button");
var menu1 = document.querySelector(".side-menu a:nth-child(1)");
var menu2 = document.querySelector(".side-menu a:nth-child(2)");
var menu3 = document.querySelector(".side-menu a:nth-child(3)");
var menu4 = document.querySelector(".side-menu a:nth-child(4)");
var allSpan = document.querySelector(".side-menu");
button.addEventListener("click", ()=> {
 allSpan.classList.toggle("side-menu-show");
 menu1.classList.toggle("grow-menu1");
 menu2.classList.toggle("grow-menu2");
 menu3.classList.toggle("grow-menu3");
 menu4.classList.toggle("grow-menu4");
})

//--------------

//Toggle_switch
var body = document.body;
var contactLight = document.querySelector(".contact");
var typeOfContact = document.querySelectorAll(".loc_add p,.phone p,.email p");
var allSubHeads = document.querySelectorAll("h1");
var airSpeed = document.querySelectorAll(".air-speed span");
var sslc = document.querySelectorAll(".sslc,.hsc,.degree");
var hsc = document.querySelectorAll(".sslc_img,.hsc_img,.degree_img");
var pageNoLight = document.querySelector(".page_no");
var qualifyHeadBefore = document.querySelectorAll(".qua-con h3::before");
var qualifyHeadAfter = document.querySelectorAll(".qua-con h3::after");
var slider = document.querySelector(".slider");
var countOfModes = 0;
slider.addEventListener("click",()=>{
    body.classList.toggle("lightmode");
    airSpeed.forEach((air)=>{
        air.style.backgroundColor = "rgb(45, 45, 45)";
        air.style.boxShadow = `5px 0px 1px rgb(87, 87, 87),
                    10px 0px 1px rgb(52, 52, 52),
                    15px 0px 1px rgb(52, 52, 52),
                    20px 0px 1px rgb(52, 52, 52),
                    25px 0px 1px rgb(52, 52, 52)`
    });
    allSubHeads.forEach((head)=>{
        head.style.color = "aqua";
        head.style.webkitTextStroke = "2px #041421";
        head.style.textShadow = `1px 2px 1px #041421,
                    1px 3px 1px #041421,
                    1px 4px 1px #041421,
                    1px 5px 1px #041421`;
    });
    qualifyHeadBefore.forEach((qua)=>{
        qua.style.backgroundColor = "black";
    });
    qualifyHeadAfter.forEach((qual)=>{
        qual.style.backgroundColor = "black";
    });
    sslc.forEach((s)=>{
        s.style.boxShadow = "0px 2px 10px 5px rgb(148, 148, 148)";
    })
    hsc.forEach((s)=>{
        s.style.boxShadow = "0px 2px 10px 5px rgb(148, 148, 148)";
    })
    pageNoLight.style.border = "2px solid grey";
    pageNoLight.style.color = "grey";
    contactLight.style.backgroundColor = "grey";
    contactLight.style.color = "black";
    typeOfContact.forEach((t)=>{
        t.style.border = "2px solid lightgrey";
    })
});

// Return to top
var returnHome = document.querySelector(".returnToTop");
returnHome.addEventListener("click",()=>{
 window.scrollTo({
     top:0,
     behavior:"smooth"
 });
});

//Goto...
 var ttoEducation = document.querySelector(".side-menu a:nth-child(1)");
 var ttoSkill = document.querySelector(".side-menu a:nth-child(2)");
 var ttoCertificates = document.querySelector(".side-menu a:nth-child(3)");
 var ttoContact = document.querySelector(".side-menu a:nth-child(4)");

 var toEducation = document.querySelector("nav ul li:nth-child(2)");
 var toSkill = document.querySelector("nav ul li:nth-child(3)");
 var toCertificates = document.querySelector("nav ul li:nth-child(4)");
 var toContact = document.querySelector("nav ul li:nth-child(5)");

 toEducation.addEventListener("click",()=>{
     window.scrollTo({
         top:600,
         behavior:"smooth"
     });
 }); 
 ttoEducation.addEventListener("click",()=>{
    window.scrollTo({
        top:600,
        behavior:"smooth"
    });
}); 
 toSkill.addEventListener("click",()=>{
     window.scrollTo({
         top:1250,
         behavior:"smooth"
     });
 });
 ttoSkill.addEventListener("click",()=>{
    window.scrollTo({
        top:1250,
        behavior:"smooth"
    });
});
 toCertificates.addEventListener("click",()=>{
     window.scrollTo({
         top:1950,
         behavior:"smooth"
     });
 });
 ttoCertificates.addEventListener("click",()=>{
    window.scrollTo({
        top:1950,
        behavior:"smooth"
    });
});
 toContact.addEventListener("click",()=>{
     window.scrollTo({
         top:2600,
         behavior:"smooth"
     });
 });
 ttoContact.addEventListener("click",()=>{
    window.scrollTo({
        top:2600,
        behavior:"smooth"
    });
}); 
// Scroll
var sectionBoxes = document.querySelectorAll("#home,#education,#skill,#contact,#certifications");
var tireConBoxes = document.querySelectorAll(".tire-con");
var tireBoxes = document.querySelectorAll(".tire");
var qualifyCon = document.querySelectorAll(".qua-con");
var education = document.querySelector("#education");
var educationCon = document.querySelector(".education");
var skills = document.querySelectorAll(".html,.css,.js,.react");
var html = document.querySelector(".html .progress_bar");
var css = document.querySelector(".css .progress_bar");
var js = document.querySelector(".js .progress_bar");
var react = document.querySelector(".react .progress_bar");
var certifications = document.querySelector("#certifications");
function checkBoxes(){
 sectionBoxes.forEach((sectionBox) => {
     var rect1 = sectionBox.getBoundingClientRect();
     if(rect1.top < window.innerHeight / 5 * 4.9){
         sectionBox.classList.add("section_show");
     }
     else{
         sectionBox.classList.remove("section_show");
     }
 });
 tireConBoxes.forEach((tireConBox) => {
     var rect2 = tireConBox.getBoundingClientRect();
     if(rect2.top < window.innerHeight / 5 * 4){
         tireConBox.classList.add("tire-con_show");
     }
     else{
         tireConBox.classList.remove("tire-con_show");
     }
 });
 tireBoxes.forEach((tireBox) => {
     var rect3 = tireBox.getBoundingClientRect();
     if(rect3.top < window.innerHeight / 5 * 4){
         tireBox.classList.add("tire_show");
     }
     else{
         tireBox.classList.remove("tire_show");
     }
 });

 qualifyCon.forEach((qualify) => {
     var rect4 = qualify.getBoundingClientRect();
     if(rect4.top < window.innerHeight / 5 * 4){
         qualify.classList.add("qua-con_show");
     }
     else{
         qualify.classList.remove("qua-con_show");
     }
 });
 skills.forEach((skill) => {
     var rect5 = skill.getBoundingClientRect();
     if(rect5.top < window.innerHeight - 5*4){
         skill.classList.add("skills_show");
         html.classList.add("html_progress_bar_show");
         css.classList.add("css_progress_bar_show");
         js.classList.add("js_progress_bar_show");
         react.classList.add("react_progress_bar_show");
     }
     else{
         skill.classList.remove("skills_show");
         html.classList.remove("html_progress_bar_show");
         css.classList.remove("css_progress_bar_show");
         js.classList.remove("js_progress_bar_show");
         react.classList.remove("react_progress_bar_show");
     }
 });
 
}
window.addEventListener('scroll',checkBoxes);
checkBoxes();

//skills
 var con_img = document.querySelector(".con_img");
 document.querySelector(".link_to_cer input").addEventListener('click',() => {
 con_img.classList.toggle("rotateY");
 con_img.classList.toggle("con_img1");
});
document.querySelector(".link_to_pro input").addEventListener('click',() => {
 con_img.classList.toggle("rotateY");
 con_img.classList.toggle("con_img1");
});

 //Certificates
var cerImg = document.querySelector(".cer-img-con");
 var cerImgs = document.querySelectorAll(".cer-img-con img")
 var leftBtn = document.querySelector(".slide-con .left");
 var rightBtn = document.querySelector(".slide-con .right");
 var pageNo = document.querySelector(".page_no");

 var images = ["nature1","nature2","nature3","nature4","nature5","nature6"];
 
 var active = Math.floor(cerImgs.length/2);
 pageNo.textContent = active+1;
 function loadSlides(){
 var s = 0;
 cerImgs[active].style.transform = `none`;
 cerImgs[active].style.zIndex = 1;
 cerImgs[active].style.filter = `none`;
 cerImgs[active].style.opacity = 1;
 
 for(let i=active+1;i<cerImgs.length;i++){
     s++;
     cerImgs[i].style.transform = `translateX(${-140*s}px) scale(${1 - 0.3*s}) perspective(16px) rotateY(1deg)`;
     cerImgs[i].style.zIndex = -s;
     cerImgs[i].style.filter = `blur(3px)`;
     cerImgs[i].style.opacity = s > 2 ? 0:0.6;
     cerImgs[i].style.transition = `1s`;
 }
 s = 0;
 for(let i=active-1;i>=0;i--){
     s++;
     cerImgs[i].style.transform = `translateX(${140*s}px) scale(${1 - 0.3*s}) perspective(16px) rotateY(-1deg)`;
     cerImgs[i].style.zIndex = -s;
     cerImgs[i].style.filter = `blur(3px)`;
     cerImgs[i].style.opacity = s > 2 ? 0:0.6;
     cerImgs[i].style.transition = `1s`;
 }
 
}
loadSlides();
leftBtn.addEventListener("click",()=>{
 active = active+1<cerImgs.length ? active+1 : active;
 pageNo.textContent = cerImgs.length-active;
 loadSlides();
});
rightBtn.addEventListener("click",()=>{
 active = active-1>=0 ? active-1 : active;
 pageNo.textContent = cerImgs.length-active;
 loadSlides();
});

// -------------



//Contact Map
const map = L.map('map').setView([11.453850, 77.704438], 13);

 const customIcon = L.icon({
     iconUrl: 'marker.png', 
     iconSize: [25, 25], 
     iconAnchor: [12, 41],
     popupAnchor: [1, -34] 
 });

 const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19
 });

 const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
     maxZoom: 20,
     subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
 });

 const googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
     maxZoom: 20,
     subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
 });

 const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
     maxZoom: 20,
     subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
 }).addTo(map);

 // Add a custom marker
 const marker = L.marker([11.453850, 77.704438], {icon: customIcon}).addTo(map);
 marker.bindPopup("Hi, I am in Komarapalayam");

 // Hover behavior for marker
 marker.on('mouseover', () => {
     marker.openPopup();
 });
 marker.on('mouseout', () => {
     marker.closePopup();
 });

 // Base Layers
 const baseLayers = {
     "OpenStreetMap": osm,
     "Satellite": googleSat,
     "Google Street": googleStreets,
     "Google Hybrid": googleHybrid
 };

 // Overlays
 const overlays = {
     "Marker": marker
 };

 // Add Layer Control
 L.control.layers(baseLayers, overlays).addTo(map);