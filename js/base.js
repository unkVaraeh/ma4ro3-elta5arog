var image1=document.querySelector("body > div.content > div.landmark > div.image1");
var image2=document.querySelector("body > div.content > div.landmark > div.image2");
var image3=document.querySelector("body > div.content > div.landmark > div.image3");
var image4=document.querySelector("body > div.content > div.landmark > div.image4");
var image5=document.querySelector("body > div.content > div.landmark > div.image5");
var image6=document.querySelector("body > div.content > div.landmark > div.image6");
var image7=document.querySelector("body > div.content > div.landmark > div.image7");
var landmark=document.querySelector("body > div.content > div.landmark");
var describtion1=document.querySelector("body > div.content > div.landmark > div:nth-child(8)");
var describtion2=document.querySelector("body > div.content > div.landmark > div:nth-child(13)");
var describtion3=document.querySelector("body > div.content > div.landmark > div:nth-child(14)");
var describtion4=document.querySelector("body > div.content > div.landmark > div:nth-child(9)");
var describtion5=document.querySelector("body > div.content > div.landmark > div:nth-child(11)");
var describtion6=document.querySelector("body > div.content > div.landmark > div:nth-child(10)");
var describtion7=document.querySelector("body > div.content > div.landmark > div:nth-child(12)");

image1.addEventListener("click",()=>{
    image1.classList.toggle("active");
    image2.classList.toggle("goright");
    image3.classList.toggle("goright");
    image4.classList.toggle("goright");
    image5.classList.toggle("goright");
    image6.classList.toggle("goright");
    image7.classList.toggle("goright");
    landmark.classList.toggle("addbg1");
    describtion1.classList.toggle("aber")
});
image2.addEventListener("click",()=>{
    image1.classList.toggle("goright");
    image2.classList.toggle("active");
    image3.classList.toggle("goright");
    image4.classList.toggle("goright");
    image5.classList.toggle("goright");
    image6.classList.toggle("goright");
    image7.classList.toggle("goright");
    landmark.classList.toggle("addbg2");
    describtion2.classList.toggle("aber")
});
image3.addEventListener("click",()=>{
    image1.classList.toggle("goright");
    image2.classList.toggle("goright");
    image3.classList.toggle("active");
    image4.classList.toggle("goright");
    image5.classList.toggle("goright");
    image6.classList.toggle("goright");
    image7.classList.toggle("goright");
    landmark.classList.toggle("addbg3");
    describtion3.classList.toggle("aber")
});
image4.addEventListener("click",()=>{
    image1.classList.toggle("goright");
    image2.classList.toggle("goright");
    image3.classList.toggle("goright");
    image4.classList.toggle("active");
    image5.classList.toggle("goright");
    image6.classList.toggle("goright");
    image7.classList.toggle("goright");
    landmark.classList.toggle("addbg4");
    describtion4.classList.toggle("aber")
});
image5.addEventListener("click",()=>{
    image1.classList.toggle("goright");
    image2.classList.toggle("goright");
    image3.classList.toggle("goright");
    image4.classList.toggle("goright");
    image5.classList.toggle("active");
    image6.classList.toggle("goright");
    image7.classList.toggle("goright");
    landmark.classList.toggle("addbg5");
    describtion5.classList.toggle("aber")
});
image6.addEventListener("click",()=>{
    image1.classList.toggle("goright");
    image2.classList.toggle("goright");
    image3.classList.toggle("goright");
    image4.classList.toggle("goright");
    image5.classList.toggle("goright");
    image6.classList.toggle("active");
    image7.classList.toggle("goright");
    landmark.classList.toggle("addbg6");
    describtion6.classList.toggle("aber")
});
image7.addEventListener("click",()=>{
    image1.classList.toggle("goright");
    image2.classList.toggle("goright");
    image3.classList.toggle("goright");
    image4.classList.toggle("goright");
    image5.classList.toggle("goright");
    image6.classList.toggle("goright");
    image7.classList.toggle("active");
    landmark.classList.toggle("addbg7");
    describtion7.classList.toggle("aber")
});
