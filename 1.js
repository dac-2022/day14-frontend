const register = async () => {
  const usernameRef = document.querySelector("#username");
  const passwordRef = document.querySelector("#password");
  const emailRef = document.querySelector("#email");
  const mobileRef = document.querySelector("#mobile");

  const user = {
    username: usernameRef.value,
    password: passwordRef.value,
    email: emailRef.value,
    mobile: mobileRef.value,
  };
  console.log(user);

  // MAKE AJAX CALL TO SERVER
  const url = "http://localhost:4000/user";
  const res = await axios.post(url, user);
  console.log(res);

  // Clean the boxes
  usernameRef.value = "";
  passwordRef.value = "";
  emailRef.value = "";
  mobileRef.value = "";
};
