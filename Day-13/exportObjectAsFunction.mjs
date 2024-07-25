
const username = "Mohd Kaif";
const login = true;


const printuser = () => {
  console.log(`username: ${username}\nlogin: ${login}`);
}

const user = {
  username,
  login,
  printuser
}

export { user }