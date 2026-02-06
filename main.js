const Captcha = document.getElementById("captcha");
const InputField = document.getElementById("field");
const CaptchaResult = document.getElementById("result");
const CaptchaSubmit = document.getElementById("formsubmit")

const CharList = [ "one", "cat", "first", "sword", "saw", "who", "fish", "xeno" ];
const CharList1 = ["!", "#", "&", "$", "@", "%"];
const CharList2 = [".", "-", "_"];

const FalseList = [
    "Dont do stupid things"
]

let i = Math.floor(Math.random(5) * 8)
let c = Math.floor(Math.random(1) * 3)
let e = Math.floor(Math.random(1) * 6)

console.log(i)



Captcha.innerHTML = CharList1[e] + CharList[i] + Math.floor(Math.random(1) * 10) + CharList2[c] + CharList[e]

console.log(Captcha.innerHTML)
console.log(CaptchaSubmit.innerHTML)

Captcha.addEventListener("mouseover", () =>  {
    Captcha.innerHTML = FalseList
    
   
    
    window.location.reload()
});

CaptchaSubmit.addEventListener("click", () => {


if (Captcha.innerHTML.toString == InputField.innerHTML.toString) {
    CaptchaResult.innerHTML = "Correct";
}
else {
    CaptchaResult.innerHTML = "False";
    console.log(false);
}

});

