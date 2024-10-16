const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const captcha = document.getElementById("captcha");
// add a submit event listener on the form and prevent the default behaviour of the form
// there ios something called event propagation. (e.g when you click on the submit buttom which affects the entire form)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
}); 
function setError (input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
};
function setSuccess (input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"; 
};

function checkInputs(){
    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const captchaValue = captcha.value.trim();
    // console.log(usernameValue, emailValue, passwordValue, password2Value, captchaValue); 


    if (usernameValue ===''){
        setError (username, "Username is required");
        // console.log('username is required');
        
    } else if (usernameValue.length < 5){
         setError(username, "Minimum username is 5");
        // console.log('minimum username length is 5');
    } else{
        setSuccess(username)
        // console.log(usernameValue);
        };
        // validate email (email value must not be empty and the email muust include @)
        if (emailValue === '') {
            setError(email, 'Email is required');

        } else if (!emailValue.includes('@')){
            setError(email, 'Email is not valid');
        }else{
            setSuccess(email)
        };
        // validate pw. pw must not be empty and the minimum pw length is 7
        if(passwordValue === ''){
            setError(password, "Password is required");
        } else if (passwordValue.length < 7){
            setError(password, "Minimum password is 7");
        }else{
            setSuccess(password);
        };
        
        if(password2Value === '') {
            setError(password2, "Password is required");
        } else if (password2Value !== passwordValue ){
            setError(password2, "Passwords do not match")
        }else {
            setSuccess(password2)
        };
        
        if (captchaValue === ''){
            setError (captcha, "required")
        } else {

        }

};
// validate the username to ensure that the user does not submit an empty field and that the minimum length is 5 

const showBtn = document.querySelector(".show-btn"); 
showBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    // preventing the default because you do not want the show button to behave as a submit button. 
    const inputType = password.getAttribute('type');
    if(inputType==='password'){
        password.setAttribute('type', 'text');
        showBtn.value = "Hide";
    } else {
        password.setAttribute('type','password')
        showBtn.value = "show"; 
    }
})

captcha.addEventListener("input", (e) => {
    const image = document.querySelector("img"); 
    const text = e.target.value;
    const blurValue = 20 - text.length;
    image.style.filter = `blur(${blurValue}px)`;
    if(blurValue <= 0){
        setSuccess(captcha);
    } else {
        setError(captcha, "Text is not long enough");
    };

});


