const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["绘趣教育，专注描绘世界。"];
const typingSpeed = 200;
const erasingSpeed = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0; // textArray index
let charIndex = 0; // character index

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	// setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingSpeed + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  setTimeout(type, newTextDelay + 250);
});

/******** 时间线 timeline ******/
var times = [
  {id: 1, year: 2019, month: 7, content: '君不见，黄河之水天上来。'},
  {id: 2, year: 2019, month: 12, content: '烹羊宰牛且为乐，会须一饮三百杯。'},
  {id: 3, year: 2020, month: 5, content: '钟鼓馔玉不足贵，但愿长醉不愿醒。'},
  {id: 4, year: 2021, month: 2, content: '主人何为言少钱，径须沽取对君酌。'},
  {id: 5, year: 2021, month: 6, content: '古来圣贤皆寂寞，惟有饮者留其名。'},
  {id: 6, year: 2022, month: 1, content: '与君歌一曲，请君为我倾耳听。'},
  {id: 7, year: 2022, month: 4, content: '高堂明镜悲白发，朝如青丝暮成雪。人生得意须尽欢。'},
]

function renderTimeLine(){
  var timeDom = document.getElementById('clearfix-time');
  if(timeDom){
    var str = '';
    for(var i = 0; i < times.length; i++){
      str += `<li>
      <h4 class="f30">${times[i].year}年·<span>${times[i].month}月</span></h4>
      <p class="f14">${times[i].content}</p>
    </li>`;
    }
    timeDom.innerHTML = str;
  }
}

renderTimeLine();