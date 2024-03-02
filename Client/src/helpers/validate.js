export function validation(userData) {
    let errors = {};
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let numbersRegex = /\d/;
  
    // if (!input.correo) {
    //   errors.correo = "Enter your correo";
    // }
    if (!emailRegex.test(userData.correo)) {
      errors.correo = "Invalid correo";
    }
    if (userData.correo.length >= 35) {
      errors.correo = "No more than 35 characters please";
    }
    if (!numbersRegex.test(userData.password)) {
      errors.password = "Password must contain a number";
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password = "Passwors tiene que tener entre 6 y 10 letras";
    } else{
      errors.password = ""
    }
  
    return errors;
  }