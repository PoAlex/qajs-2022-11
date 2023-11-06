/* eslint-disable no-unused-vars */

async function createUser(userName, password) {
  const response = await fetch("https://bookstore.demoqa.com/Account/v1/User", {
    method: "post",
    body: JSON.stringify({
      userName: userName,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response;
}
