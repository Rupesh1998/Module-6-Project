let error = false;
// ============= Validation for first name ==============
function validFirstName(){
    let firstNameInput = document.getElementById('first-name').value
    if(firstNameInput.length >= 3 && 
       firstNameInput.match(/^[A-Za-z]+$/)
    ){
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }    
    else{
        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('first-name-invalid').style.display = 'block'
        error = true;
    }
}

// ============= Validation for last name ==============
function validLastName(){
    let lastNameInput = document.getElementById('last-name').value
    if(lastNameInput.length >= 3 &&
        lastNameInput.match(/^[a-zA-Z]+$/)){  
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('last-name-invalid').style.display = 'block'
        error = true;
    }
}

// ============= Validation for MAIL ID ==============
function validEmail(){
    let emailInput = document.getElementById('email').value
    if(emailInput && 
        emailInput.includes('@') &&
        emailInput.includes('.') &&
        emailInput.indexOf('@') != 0 &&
        emailInput.lastIndexOf('.') <= emailInput.length - 3
        ){
         document.getElementById('email-valid').style.display = 'block'
         document.getElementById('email-invalid').style.display = 'none'
     }
     else{
         document.getElementById('email-invalid').style.display = 'block'
         document.getElementById('email-valid').style.display = 'none'
         error = true;
     }
}

// ============= Validation for Phone Number ==============
function validPhone(){
    let phoneInput = document.getElementById('phone').value
    if(phoneInput.length == 10 &&  
       phoneInput.match(/^[0-9]+$/) 
       ){
        document.getElementById('phone-valid').style.display = 'block'
        document.getElementById('phone-invalid').style.display = 'none'
    }
    else{
        document.getElementById('phone-invalid').style.display = 'block'
        document.getElementById('phone-valid').style.display = 'none'
        error = true;
    }
}

// ============= Validation for Batch Number ==============
function validBatchNo(){
    let batchNoInput = document.getElementById('batch-no').value
    if(batchNoInput != 'none'){
        document.getElementById('batch-no-valid').style.display = 'block'
        document.getElementById('batch-no-invalid').style.display = 'none'
    }
    else{
        document.getElementById('batch-no-invalid').style.display = 'block'
        document.getElementById('batch-no-valid').style.display = 'none'
        error = true;
    }
}

// ============= Validation for Module Number ==============
function validModuleNo(){
    let moduleNoInput = document.getElementById('module-no').value
    if(moduleNoInput != 'none'){
        document.getElementById('module-no-valid').style.display = 'block'
        document.getElementById('module-no-invalid').style.display = 'none'
    }
    else{
        document.getElementById('module-no-invalid').style.display = 'block'
        document.getElementById('module-no-valid').style.display = 'none'
        error = true;
    }
}

// ============= Validation for Terms And Conditions ==============
function validtnC(){
    let tnCInput = document.getElementById('tnC').checked
    if(tnCInput){
        document.getElementById('tnC-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnC-invalid').style.display = 'block'
        error = true;
    }
}

// ============= Validation for SUBMIT Button ==============
function validate(){
    validFirstName()
    validLastName()
    validEmail()
    validPhone()
    validBatchNo()
    validModuleNo()
    validtnC()
    if(!error){
        alert("Your details have been saved Successfully...!")
        document.getElementById('first-name').value = ''
        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name').value = ''
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email').value = ''
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('phone').value = ''
        document.getElementById('phone-valid').style.display = 'none'
        document.getElementById('batch-no').value = 'none'
        document.getElementById('batch-no-valid').style.display = 'none'
        document.getElementById('module-no').value = 'none'
        document.getElementById('module-no-valid').style.display = 'none'
        document.getElementById('tnC').checked = false
    }
    else{
        error = false;
    }
}