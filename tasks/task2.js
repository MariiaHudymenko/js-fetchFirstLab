"Ваш код повинен зробити POST-запит до вказаного URL.";
"Для створення нового користувача, передайте в запит наступні дані:";
"name: ваше ім’я";
"email: ваш email";
"Поверніть відповідь від сервера після створення користувача.";

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит";

function createUser(user) {
  return fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Користувач успішно створений", data);
      return data;
    })
    .catch((error) => console.error("Error:", error));
}

console.log(createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" }));

module.exports = createUser;
