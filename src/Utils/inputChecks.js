export const inputChecks = (type, name) => {
  const textFieldChecks = {
    required: "*Please fill this field",
  };

  const noNumbersCheck = {
    ...textFieldChecks,
    validate: (value) => !/\d/.test(value) || "This field should not contain numbers",
  };

  if (type === "text") {
    if (["firstName", "lastName", "country", "city"].includes(name)) {
      return noNumbersCheck;
    }
    return textFieldChecks;
  } else if (type === "email") {
    return {
      required: "*Please fill this field",
      pattern: {
        value: /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
        message: "Invalid email address",
      },
    };
  } else if (type === "number") {
    switch (name) {
      case "mobile":
        return {
          required: "*Please fill this field",
          minLength: { value: 10, message: "*Invalid mobile number" },
          maxLength: { value: 12, message: "*Invalid mobile number" },
        };
      case "postalCode":
        return {
          required: "*Please fill this field",
          minLength: { value: 6, message: "*Invalid postal code" },
          maxLength: { value: 6, message: "*Invalid postal code" },
        };
      default:
        return { required: "*Please fill this field" };
    }
  }
};
