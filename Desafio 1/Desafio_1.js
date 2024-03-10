let array = [
  { nome: "Clara", idade: 20, email: "clara@gmail.com" },
  { nome: "Carlos", idade: 27, email: "carlosf@gmail.com" },
  { nome: "Dean", idade: 25, email: "deansilva@gmail.com" },
  { nome: "João", idade: 24, email: "joaogabriel@gmail.com" },
];

let searchArray = new Promise(function (foundSearch, notFound) {
  let search = array.find((search) => search.nome === "Dean");

  if (search != undefined) {
    foundSearch(search);
  } else {
    notFound("Este elemento do array não existe");
  }
});

searchArray.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
