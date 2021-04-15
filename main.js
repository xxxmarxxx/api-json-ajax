const getUsers = (e) => {
  e.preventDefault();

  const usersNumber = document.querySelector('[name="users-number"]').value;
  const usersGender = document.querySelector('[name="gender"]').value;
  // console.log(usersNumber, usersGender);
  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === 'both' ? 'male,female' : usersGender}`;
  console.log(url);
  fetch(url) // obietnica - stan oczekujacy (pending)
    // obietnica - spelniona | odrzucona
    // wykonuje sie then - pozytywnie
    .then((response) => {
      // console.log(response);
      if (response.status !== 200) {
        throw Error("to nie jest odpowiedz 200");
      } else {
        return response.json();
      }
    })
    .then((json) => console.log(json))
    // wykonuje gdy odrzucone
    .catch((err) => console.log(err));
};

document.querySelector(".generator").addEventListener("submit", getUsers);
