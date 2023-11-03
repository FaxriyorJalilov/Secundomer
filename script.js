// let body = document.querySelector("#root");

// let card = document.createElement("div");
// card.style.padding = "20px";
// card.style.maxWidth = "286px";

// card.style.borderRadius = "15px";
// card.style.border = "2px solid #606060";

// let badgeBtn = document.createElement("button");
// badgeBtn.style.border = "2px solid #606060";
// badgeBtn.style.background = "#D6ED17";
// badgeBtn.style.padding = "8px 20px";
// badgeBtn.style.borderRadius = "5px";
// badgeBtn.textContent = "Badge";
// card.appendChild(badgeBtn);

// let cardImage = document.createElement("div");
// cardImage.style.borderRadius = "5px";
// cardImage.style.height = "190px";
// cardImage.style.background =
//   "url(https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/imwxqjajhtbjsxz9dspn)";

// cardImage.style.backgroundSize = "cover";
// cardImage.style.backgroundPosition = "center";
// cardImage.style.margin = "10px 0";

// card.appendChild(cardImage);

// let header = document.createElement("h1");
// header.textContent = "CHALLENGER RACE III";
// card.appendChild(header);
// header.style.fontSize = "20px";
// header.style.fontFamily = "Inter";

// let info = document.createElement("p");
// info.textContent =
//   " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil ad cupiditate cumque, aliquam nobis quas natus, obcaecati molestias maxime labore repellat asperiores facere quos, eos odit expedita sapiente atque!";
// card.appendChild(info);
// info.style.fontFamily = "Inter";
// info.style.margin = "10px 0";

// let shareBtn = document.createElement("button");
// shareBtn.style.border = "2px solid #606060";
// shareBtn.style.background = "#D6ED17";
// shareBtn.style.padding = "8px 20px";
// shareBtn.style.borderRadius = "5px";
// shareBtn.innerHTML = `Share <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
// <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
// </svg>`;
// shareBtn.style.width = "130px";
// card.appendChild(shareBtn);

// body.appendChild(card);

// let root = document.querySelector("#root");
// let btn = document.createElement("button");
// btn.style.background = "red";
// btn.textContent = "Start";
// root.appendChild(btn);
// let btn1 = document.createElement("button");
// btn1.style.background = "red";
// btn1.textContent = "pause";
// root.appendChild(btn1);
// let btn2 = document.createElement("button");
// btn2.style.background = "red";
// btn2.textContent = "reset";
// root.appendChild(btn2);

let root = document.querySelector("#root");
let box = document.createElement("div");
box.style.borderRadius = "15px";
box.style.Width = "100vw";
box.style.height = "100vh";
box.style.border = "2px solid #606060";
box.style.display = "flex";
box.style.alignItems = "center";
box.style.justifyContent = "center";
box.style.background = "url(./imgas/bg.png)";
box.style.backgroundSize = "cover";
box.style.backgroundPosition = "center";
root.appendChild(box);
let all = document.querySelectorAll("*");
for (let index = 0; index < all.length; index++) {
  all[index].style.margin = "0";
  all[index].style.padding = "0";
  all[index].style.boxSizing = "border-box";
}

//----box2 div

let box2 = document.createElement("div");
box2.style.borderRadius = "36px";
box2.style.width = "1049px";
box2.style.backgroundColor = "rgba(0, 161, 255, 0.58)";
box.appendChild(box2);

let text_h1 = document.createElement("h1");

text_h1.textContent = "Secundomer";
text_h1.style.fontSize = "32px";
text_h1.style.color = "#A5DEFF";
text_h1.style.textAlign = "center";
text_h1.style.marginTop = "38px";
text_h1.style.marginBottom = "43px";
box2.appendChild(text_h1);

let Box_elemens = document.createElement("div");
Box_elemens.style.display = "flex";
Box_elemens.style.alignItems = "center";
Box_elemens.style.justifyContent = "space-around";
Box_elemens.style.marginBottom = "81px";
box2.appendChild(Box_elemens);

//----Hours div----

let hours_Box = document.createElement("div");
hours_Box.style.backgroundColor = "#080F1A";
hours_Box.style.borderRadius = "22px";
hours_Box.style.width = "199px";
hours_Box.style.height = "199px";
Box_elemens.appendChild(hours_Box);

let text_number = document.createElement("h2");
text_number.textContent = "360";
text_number.style.color = "#fff";
text_number.style.fontSize = "64px";
text_number.style.marginTop = "46px";
text_number.style.marginBottom = "3px";
text_number.style.textAlign = "center";
hours_Box.appendChild(text_number);

let text_p = document.createElement("p");
text_p.textContent = "Hours";
text_p.style.color = "#fff";
text_p.style.fontSize = "16px";
text_p.style.textAlign = "center";
hours_Box.appendChild(text_p);

/// ----Minutes div

let minutes_Box = document.createElement("div");
minutes_Box.style.backgroundColor = "#080F1A";
minutes_Box.style.borderRadius = "22px";
minutes_Box.style.width = "199px";
minutes_Box.style.height = "199px";
Box_elemens.appendChild(minutes_Box);

let text_number2 = document.createElement("h2");
text_number2.textContent = "24";
text_number2.style.color = "#fff";
text_number2.style.fontSize = "64px";
text_number2.style.marginTop = "46px";
text_number2.style.marginBottom = "3px";
text_number2.style.textAlign = "center";
minutes_Box.appendChild(text_number2);

let text_p2 = document.createElement("p");
text_p2.textContent = "Minutes";
text_p2.style.color = "#fff";
text_p2.style.fontSize = "16px";
text_p2.style.textAlign = "center";
minutes_Box.appendChild(text_p2);

//-----Seconds div

let seconds_Box = document.createElement("div");
seconds_Box.style.backgroundColor = "#080F1A";
seconds_Box.style.borderRadius = "22px";
seconds_Box.style.width = "199px";
seconds_Box.style.height = "199px";
Box_elemens.appendChild(seconds_Box);

let text_number3 = document.createElement("h2");
text_number3.textContent = "60";
text_number3.style.color = "#fff";
text_number3.style.fontSize = "64px";
text_number3.style.marginTop = "46px";
text_number3.style.marginBottom = "3px";
text_number3.style.textAlign = "center";
seconds_Box.appendChild(text_number3);

let text_p3 = document.createElement("p");
text_p3.textContent = "Seconds";
text_p3.style.color = "#fff";
text_p3.style.fontSize = "16px";
text_p3.style.textAlign = "center";
seconds_Box.appendChild(text_p3);

///-----Milliseconds div

let milliseconds_Box = document.createElement("div");
milliseconds_Box.style.backgroundColor = "#080F1A";
milliseconds_Box.style.borderRadius = "22px";
milliseconds_Box.style.width = "199px";
milliseconds_Box.style.height = "199px";
Box_elemens.appendChild(milliseconds_Box);

let text_number4 = document.createElement("h2");
text_number4.textContent = "24";
text_number4.style.color = "#fff";
text_number4.style.fontSize = "64px";
text_number4.style.marginTop = "46px";
text_number4.style.marginBottom = "3px";
text_number4.style.textAlign = "center";
milliseconds_Box.appendChild(text_number4);

let text_p4 = document.createElement("p");
text_p4.textContent = "Milliseconds";
text_p4.style.color = "#fff";
text_p4.style.fontSize = "16px";
text_p4.style.textAlign = "center";
milliseconds_Box.appendChild(text_p4);

//---Button box
let btn_box = document.createElement("div");
btn_box.style.marginBottom = "55px";
btn_box.style.textAlign = "center";
box2.appendChild(btn_box);

//--START button

let btn_Start = document.createElement("button");
btn_Start.textContent = "Start";
btn_Start.style.width = "185px";
btn_Start.style.height = "61px";
btn_Start.style.borderRadius = "13px";
btn_Start.style.color = "#fff";
btn_Start.style.fontSize = "32px";
btn_Start.style.backgroundColor = "#080F1A";
btn_box.appendChild(btn_Start);

//---Pouse button

let btn_Pause = document.createElement("button");
btn_Pause.textContent = "Pause";
btn_Pause.style.width = "185px";
btn_Pause.style.height = "61px";
btn_Pause.style.borderRadius = "13px";
btn_Pause.style.marginLeft = "40px";
btn_Pause.style.marginRight = "40px";
btn_Pause.style.color = "#fff";
btn_Pause.style.fontSize = "32px";
btn_Pause.style.backgroundColor = "#080F1A";
btn_box.appendChild(btn_Pause);

//---Reset button

let btn_Reset = document.createElement("button");
btn_Reset.textContent = "Reset";
btn_Reset.style.width = "185px";
btn_Reset.style.height = "61px";
btn_Reset.style.borderRadius = "13px";
btn_Reset.style.color = "#fff";
btn_Reset.style.fontSize = "32px";
btn_Reset.style.backgroundColor = "#080F1A";
btn_box.appendChild(btn_Reset);

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let count = true;

let intervalID;

btn_Start.addEventListener("click", () => {
  btn_Start.setAttribute("disabled", true);
  intervalID = setInterval(showMilliseconds, 10);
});

btn_Pause.addEventListener("click", () => {
  btn_Start.removeAttribute("disabled");
  clearInterval(intervalID);
});

btn_Reset.onclick = () => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  showMilliseconds();
};

function showMilliseconds() {
  console.log(milliseconds);
  if (milliseconds == 100) {
    seconds++;
    milliseconds = 0;
  }
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes == 60) {
    hours++;
    minutes = 0;
  }
  text_number4.textContent = milliseconds++;
  text_number3.textContent = seconds;
  text_number2.textContent = minutes;
  text_number.textContent = hours;
}
