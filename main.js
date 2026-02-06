const Captcha = document.getElementById("captcha");
const InputField = document.getElementById("field");


const CharList = [ "one", "cat", "first", "sword", "saw", "who", "fish", "xeno" ];
const CharList1 = ["!", "#", "&", "$"];


let i = Math.floor(Math.random(5) * 8)

let e = Math.floor(Math.random(1) * 4)

console.log(i)


Captcha.innerHTML = CharList1[e] + CharList[i] + Math.floor(Math.random(1) * 10)

console.log(Captcha.innerHTML)

function CaptchaSetIndex() {

if (Captcha.innerHTML == InputField) {
    alert("Right")
}
else {
    console.log(false)
}
}

CaptchaSetIndex()

