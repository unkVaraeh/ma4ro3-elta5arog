var image1 = document.querySelector(
  "body > div.content > div.landmark > div.image1"
);
var image2 = document.querySelector(
  "body > div.content > div.landmark > div.image2"
);
var image3 = document.querySelector(
  "body > div.content > div.landmark > div.image3"
);
var image4 = document.querySelector(
  "body > div.content > div.landmark > div.image4"
);
var image5 = document.querySelector(
  "body > div.content > div.landmark > div.image5"
);
var image6 = document.querySelector(
  "body > div.content > div.landmark > div.image6"
);
var image7 = document.querySelector(
  "body > div.content > div.landmark > div.image7"
);
var landmark = document.querySelector("body > div.content > div.landmark");
var describtion1 = document.querySelector(
  "body > div.content > div.landmark > div:nth-child(8)"
);
var describtion2 = document.querySelector(
  "body > div.content > div.landmark > div:nth-child(13)"
);
var describtion3 = document.querySelector(
  "body > div.content > div.landmark > div:nth-child(14)"
);
var describtion4 = document.querySelector(
  "body > div.content > div.landmark > div:nth-child(9)"
);
var describtion5 = document.querySelector(
  "body > div.content > div.landmark > div:nth-child(11)"
);
var describtion6 = document.querySelector(
  "body > div.content > div.landmark > div:nth-child(10)"
);
var describtion7 = document.querySelector(
  "body > div.content > div.landmark > div:nth-child(12)"
);

var bg = document.querySelector("#bg-image");

var bg2= bg.src

var imagebg1 = document.querySelector(
  "body > div.content > div.landmark > div.image1 > img"
);
var imagebg2 = document.querySelector(
  "body > div.content > div.landmark > div.image2 > img"
);
var imagebg3 = document.querySelector(
  "body > div.content > div.landmark > div.image3 > img"
);
var imagebg4 = document.querySelector(
  "body > div.content > div.landmark > div.image4 > img"
);
var imagebg5 = document.querySelector(
  "body > div.content > div.landmark > div.image5 > img"
);
var imagebg6 = document.querySelector(
  "body > div.content > div.landmark > div.image6 > img"
);
var imagebg7 = document.querySelector(
  "body > div.content > div.landmark > div.image7 > img"
);

image1.addEventListener("click", () => {
    image1.classList.toggle("active");
    image2.classList.toggle("goright");
    image3.classList.toggle("goright");
    image4.classList.toggle("goright");
    image5.classList.toggle("goright");
    image6.classList.toggle("goright");
    image7.classList.toggle("goright");

    if (image1.classList.contains("active")) {
        // تغيير الخلفية إلى الصورة الجديدة
        bg.classList.add("hidden"); // تخفي الخلفية الحالية
        setTimeout(() => {
            bg.src = imagebg1.src;
            bg.classList.remove("hidden"); // تُظهر الصورة الجديدة بعد تغيير المسار
            bg.style.display = "block";
        }, 200); // مطابقة لوقت الانتقال في CSS
    } else {
        // إعادة الخلفية إلى الصورة الأصلية
        bg.classList.add("hidden"); // تخفي الخلفية الحالية
        setTimeout(() => {
            bg.src = bg2;
            bg.classList.remove("hidden");
            bg.style.display = "none";
             // تُظهر الصورة الجديدة بعد تغيير المسار
        }, 200); // مطابقة لوقت الانتقال في CSS
    }

    describtion1.classList.toggle("aber");
});



image2.addEventListener("click", () => {
  image1.classList.toggle("goright");
  image2.classList.toggle("active");
  image3.classList.toggle("goright");
  image4.classList.toggle("goright");
  image5.classList.toggle("goright");
  image6.classList.toggle("goright");
  image7.classList.toggle("goright");
  if (image2.classList.contains("active")) {
    // تغيير الخلفية إلى الصورة الجديدة
    bg.classList.add("hidden"); // تخفي الخلفية الحالية
    setTimeout(() => {
        bg.src = imagebg2.src;
        bg.classList.remove("hidden"); // تُظهر الصورة الجديدة بعد تغيير المسار
        bg.style.display = "block";
    }, 200); // مطابقة لوقت الانتقال في CSS
} else {
    // إعادة الخلفية إلى الصورة الأصلية
    bg.classList.add("hidden"); // تخفي الخلفية الحالية
    setTimeout(() => {
        bg.src = bg2;
        bg.classList.remove("hidden");
        bg.style.display = "none";
         // تُظهر الصورة الجديدة بعد تغيير المسار
    }, 200); // مطابقة لوقت الانتقال في CSS
}
  describtion2.classList.toggle("aber");
});



image3.addEventListener("click", () => {
  image1.classList.toggle("goright");
  image2.classList.toggle("goright");
  image3.classList.toggle("active");
  image4.classList.toggle("goright");
  image5.classList.toggle("goright");
  image6.classList.toggle("goright");
  image7.classList.toggle("goright");
  if (image3.classList.contains("active")) {
    // تغيير الخلفية إلى الصورة الجديدة
    bg.classList.add("hidden"); // تخفي الخلفية الحالية
    setTimeout(() => {
        bg.src = imagebg3.src;
        bg.classList.remove("hidden"); // تُظهر الصورة الجديدة بعد تغيير المسار
        bg.style.display = "block";
    }, 200); // مطابقة لوقت الانتقال في CSS
} else {
    // إعادة الخلفية إلى الصورة الأصلية
    bg.classList.add("hidden"); // تخفي الخلفية الحالية
    setTimeout(() => {
        bg.src = bg2;
        bg.classList.remove("hidden");
        bg.style.display = "none";
         // تُظهر الصورة الجديدة بعد تغيير المسار
    }, 200); // مطابقة لوقت الانتقال في CSS
}
  describtion3.classList.toggle("aber");
});


image4.addEventListener("click", () => {
  image1.classList.toggle("goright");
  image2.classList.toggle("goright");
  image3.classList.toggle("goright");
  image4.classList.toggle("active");
  image5.classList.toggle("goright");
  image6.classList.toggle("goright");
  image7.classList.toggle("goright");
  if (image4.classList.contains("active")) {
    // تغيير الخلفية إلى الصورة الجديدة
    bg.classList.add("hidden"); // تخفي الخلفية الحالية
    setTimeout(() => {
        bg.src = imagebg4.src;
        bg.classList.remove("hidden"); // تُظهر الصورة الجديدة بعد تغيير المسار
        bg.style.display = "block";
    }, 200); // مطابقة لوقت الانتقال في CSS
} else {
    // إعادة الخلفية إلى الصورة الأصلية
    bg.classList.add("hidden"); // تخفي الخلفية الحالية
    setTimeout(() => {
        bg.src = bg2;
        bg.classList.remove("hidden");
        bg.style.display = "none";
         // تُظهر الصورة الجديدة بعد تغيير المسار
    }, 200); // مطابقة لوقت الانتقال في CSS
}
  describtion4.classList.toggle("aber");
});


image5.addEventListener("click", () => {
  image1.classList.toggle("goright");
  image2.classList.toggle("goright");
  image3.classList.toggle("goright");
  image4.classList.toggle("goright");
  image5.classList.toggle("active");
  image6.classList.toggle("goright");
  image7.classList.toggle("goright");
  if (image5.classList.contains("active")) {
    // تغيير الخلفية إلى الصورة الجديدة
    bg.classList.add("hidden"); // تخفي الخلفية الحالية
    setTimeout(() => {
        bg.src = imagebg5.src;
        bg.classList.remove("hidden"); // تُظهر الصورة الجديدة بعد تغيير المسار
        bg.style.display = "block";
    }, 200); // مطابقة لوقت الانتقال في CSS
} else {
    // إعادة الخلفية إلى الصورة الأصلية
    bg.classList.add("hidden"); // تخفي الخلفية الحالية
    setTimeout(() => {
        bg.src = bg2;
        bg.classList.remove("hidden");
        bg.style.display = "none";
         // تُظهر الصورة الجديدة بعد تغيير المسار
    }, 200); // مطابقة لوقت الانتقال في CSS
}
  describtion5.classList.toggle("aber");
});


image6.addEventListener("click", () => {
  image1.classList.toggle("goright");
  image2.classList.toggle("goright");
  image3.classList.toggle("goright");
  image4.classList.toggle("goright");
  image5.classList.toggle("goright");
  image6.classList.toggle("active");
  image7.classList.toggle("goright");
  if (image6.classList.contains("active")) {
    // تغيير الخلفية إلى الصورة الجديدة
    bg.classList.add("hidden"); // تخفي الخلفية الحالية
    setTimeout(() => {
        bg.src = imagebg6.src;
        bg.classList.remove("hidden"); // تُظهر الصورة الجديدة بعد تغيير المسار
        bg.style.display = "block";
    }, 200); // مطابقة لوقت الانتقال في CSS
} else {
    // إعادة الخلفية إلى الصورة الأصلية
    bg.classList.add("hidden"); // تخفي الخلفية الحالية
    setTimeout(() => {
        bg.src = bg2;
        bg.classList.remove("hidden");
        bg.style.display = "none";
         // تُظهر الصورة الجديدة بعد تغيير المسار
    }, 200); // مطابقة لوقت الانتقال في CSS
}
  describtion6.classList.toggle("aber");
});
image7.addEventListener("click", () => {
  image1.classList.toggle("goright");
  image2.classList.toggle("goright");
  image3.classList.toggle("goright");
  image4.classList.toggle("goright");
  image5.classList.toggle("goright");
  image6.classList.toggle("goright");
  image7.classList.toggle("active");
  if (image7.classList.contains("active")) {
    // تغيير الخلفية إلى الصورة الجديدة
    bg.classList.add("hidden"); // تخفي الخلفية الحالية
    setTimeout(() => {
        bg.src = imagebg7.src;
        bg.classList.remove("hidden"); // تُظهر الصورة الجديدة بعد تغيير المسار
        bg.style.display = "block";
    }, 200); // مطابقة لوقت الانتقال في CSS
} else {
    // إعادة الخلفية إلى الصورة الأصلية
    bg.classList.add("hidden"); // تخفي الخلفية الحالية
    setTimeout(() => {
        bg.src = bg2;
        bg.classList.remove("hidden");
        bg.style.display = "none";
         // تُظهر الصورة الجديدة بعد تغيير المسار
    }, 200); // مطابقة لوقت الانتقال في CSS
}
  describtion7.classList.toggle("aber");
});
