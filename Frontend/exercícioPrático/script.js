function hidePassword() {
  var x = document.getElementById("passwordLogin");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function checkInput(){
  const x = document.getElementById("userLogin");
  const num = /^\d+$/;
  x.addEventListener("input", (e) =>{
    if(num.test(x.value)){
      x.type = "number";
    }
    else{
      x.type = "email";
      validateEmail();
    }
  });
}

function validateEmail(){
  const emailInput = document.getElementById("userLogin");
  const errorSpan = document.getElementById("userError");
  const isEmailValid = (email) =>{
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };
  emailInput.addEventListener("invalid", (event) =>{
    event.preventDefault();
    emailInput.style.borderBottom = "2px solid red";
    errorSpan.textContent = "Informe um email válido";
  });
  emailInput.addEventListener("input", () =>{
    if(isEmailValid(emailInput.value)){
      emailInput.style.borderBottom = "2px solid #555";
      errorSpan.textContent = ""; 
      emailInput.setCustomValidity("");
    } else{
      emailInput.setCustomValidity("Inválido");
    }
  });
}

function validateSubmit() {
  const botao = document.getElementById("submit");
  const userInput = document.getElementById("userLogin");
  const passwordInput = document.getElementById("passwordLogin");
  const userError = document.getElementById("userError");
  const passwordError = document.getElementById("passwordError");

  botao.addEventListener("click", (e) => {
    const isUserEmpty = userInput.value.trim() === "";
    const isPasswordEmpty = passwordInput.value.trim() === "";
    if (isUserEmpty || isPasswordEmpty) {
      e.preventDefault(); 
    }
    if(isUserEmpty){
      userInput.style.borderBottom = "2px solid red";
      userError.textContent = "Este campo precisa ser preenchido";
    }else{
      userInput.style.borderBottom = "2px solid #555";
      userError.textContent = "";
    }
    if (isPasswordEmpty) {
      passwordInput.style.borderBottom = "2px solid red";
      passwordError.textContent = "Este campo precisa ser preenchido";
    } else {
      passwordInput.style.borderBottom = "2px solid #555";
      passwordError.textContent = "";
    }
  });
}
validateSubmit();