function Validation(values, existingEmails = []) {
  let errors = {};

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name.trim() === "") {
    errors.name = "Name should not be empty";
  } else {
    errors.name = "";
  }

  if (values.email.trim() === "") {
    errors.email = "Email should not be empty";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Invalid email format";
  } else if (existingEmails.includes(values.email)) {
    errors.email = "This email is already registered";
  } else {
    errors.email = "";
  }

  if (values.password.trim() === "") {
    errors.password = "Password should not be empty";
  } else if (!passwordPattern.test(values.password)) {
    errors.password = "Invalid password format";
  } else {
    errors.password = "";
  }

  return errors;
}

export default Validation;
