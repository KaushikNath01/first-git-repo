// for the ham menu section

const ham = document.querySelector('.ham > .ham-menu');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

ham.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);


function toggleMenu () {
   if (menu.classList.contains('open')) {
     menu.classList.remove('open')
     document.body.classList.remove('lock-scroll');
   }else {
      menu.classList.add('open')
      document.body.classList.add('lock-scroll');
   }
}

// Adding a Loader

let spinnerWrapper = document.querySelector('.spinner-wrapper');
window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});

// Form Validation

const form = document.querySelector("form")
const fullName = document.querySelector('.fullName');
const mobileNo = document.querySelector('.mobileNo');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const cPassword = document.querySelector('.confirm-password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidate();
})

const sendData = (nameVal,sRate,count) => {
    if(sRate === count) {
        alert('Registration Success');
        swal("Welcome " + nameVal, "Registration Success", "success");
        // location.href = `demo.html?userrname=${nameVal}`;
    }
}

const successMsgs = (nameVal) => {
     let formCon = document.getElementsByClassName('form-control');
     var count = formCon.length - 1;
     for(var i = 0; i < formCon.length; i++) {
         if(formCon[i].className === 'form-control success') {
            var sRate = 0 + i; 
            sendData(nameVal,sRate,count);
         }else{
             return false;
         }
     }
}
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 3) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}

function formValidate(){
    const nameVal = fullName.value.trim();
    const mobVal = mobileNo.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cPasswordVal = cPassword.value.trim();
    

    if(nameVal === ''){
        setErrMsg(fullName,'enter a name value');
    }else if(nameVal.length <= 2){
        setErrMsg(fullName, 'length should be more than 2 characters');
    }else{
        setSuccessMsg(fullName);
    }

    if(mobVal === ''){
        setErrMsg(mobileNo,'enter a mobile value');
    }else if(mobVal.length != 10){
        setErrMsg(mobileNo, 'length should not be less than 10');
    }else{
        setSuccessMsg(mobileNo);
    }

    if(emailVal === ''){
        setErrMsg(email,'enter a email value');
    }else if(!isEmail(emailVal)){
        setErrMsg(email, 'email is not valid');
    }else{
        setSuccessMsg(email);
    }

    if(passwordVal === ''){
        setErrMsg(password,'enter a password value');
    }else if(passwordVal.length < 5){
        setErrMsg(password, 'password should be more than 5 characters');
    }else{
        setSuccessMsg(password);
    }

    if(cPasswordVal === ''){
        setErrMsg(cPassword,'enter a password value');
    }else if(passwordVal != cPasswordVal){
        setErrMsg(cPassword, 'password do not match');
    }else{
        setSuccessMsg(cPassword);
    }
    successMsgs(nameVal);
}


function setErrMsg(input, errMsg) {
    const formControl = input.parentElement;  
    const small = formControl.querySelector('small'); 
    small.innerText = errMsg;
    formControl.className = 'form-control error';
}

function setSuccessMsg(input){
    formControl = input.parentElement; 
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small'); 
    small.innerText = " ";
}



// I just want this code to run on index.html page

const instaNo = document.querySelector('.instaNos');
const fundsGenerated = document.querySelector('.fundsGenerated');
const RevenueGenerated = document.querySelector('.RevenueGenerated');
const SatisfiedCustomers = document.querySelector('.SatisfiedCustomers');

  if (window.location.pathname == '/index.html') {
    let count = 1;
    setInterval(() => {
        if (count < 1000) {
            count++;
            instaNo.innerText = count;
            fundsGenerated.innerText = count;
            RevenueGenerated.innerText = count;
            SatisfiedCustomers.innerText = count;
        }
    }, 5);
    
    setTimeout(() => {
            let contentOne = document.getElementById('content-change-one');
            let contentTwo = document.getElementById('content-change-two');
            let contentThree = document.getElementById('content-change-three')
            let contentFour = document.getElementById('content-change-four');
        
            contentOne.innerText = "Insta Followers";
            contentTwo.innerText = "Funds Generated";
            contentThree.innerText = "Revenue Generated";
            contentFour.innerText = "Satisfied Customers";
            
    }, 7500);
  }



  //   for the signIn page

  if (window.location.pathname == '/signIn.html') {

  const headBtn = document.querySelector('.signBtn');
  const anchor1 = document.querySelector('.anchor-forgot-pass');
  const anchor2 = document.querySelector('.anchor-create-act');
  const form1 = document.querySelector('.first-form');
  const form2 = document.querySelector('.second-form');
  const form3 = document.querySelector('.third-form');
    
        anchor1.addEventListener("click", () => {
             if(form1.classList.contains('on-click-hide')){
                 form1.classList.remove('on-click-hide');
             }else{
                 form1.classList.add('on-click-hide');
                 form2.classList.remove('on-click-hide')
             }
        })

        anchor2.addEventListener("click", () => {
            if(form1.classList.contains('on-click-hide')){
                form1.classList.remove('on-click-hide')
            }else{
                form1.classList.add('on-click-hide');
                form3.classList.remove('on-click-hide');
            }
        })
     }
        
