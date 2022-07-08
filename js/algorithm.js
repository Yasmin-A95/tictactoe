const oRandomMove = function () {
  const num1 = Math.floor(Math.random() * wins.length);
  const num2 = Math.floor(Math.random() * wins[num1].length);

  const move = wins[num1][num2];
  if (boardState[move] === "*") {
    //boardstate[move] ends up just being the tilenumber
    boardState[move] = Player_O;
    $(tiles[move]).text(Player_O);
    turn = Player_X;
  } else if (boardState.includes("*")) {
    oRandomMove();
  }
};

const miniMaxConvertedBoardState = function (boardState) {
  let newBoardState = [];
  if (boardState.includes("*")) {
    for (let i = 0; i < (boardState.length -1); i++) {
      let num = boardState.indexOf("*");
      newBoardState.push(num);``
    }
  }
  console.log(newBoardState);
};

console.log(miniMaxConvertedBoardState(boardState));

const people = [
  { firstName: 'Jacklyn', lastName: 'Rose' },
  { firstName: 'Yasmin', lastName: 'Booey' }
]


const loggedIn = false

const LoggedInButton = () => {
  return <button onClick={() => loggedIn = true}>Log me in</button>
}

const DisplayName = ({ nameToDisplay }) => {
  return (<h2>{nameToDisplay}</h2>)
}

const Username = ({ username }) => {
  return (<p style="text-style: italic;">{username}</p>)
}

<Page>
  { !loggedIn && <LoginButton /> }
  { loggedIn && (
    <>
      <DisplayName nameToDisplay="Jacklyn" />
      <Username username="jacklynrose" />
    </>
  )}
</Page>

// const peopleWithFullnames = people.map(person => ({
//   ...person,
//   fullName: person.firstName + ' ' + person.lastName
// }))
// peopleWithLongNames = peopleWithFullnames.filter(person => person.lastName.length > 4)

// // => [{ firstName: 'Jacklyn', lastName: 'Rose', fullName: 'Jacklyn Rose' }, ...]

// const obj = { 'a': '1', 'b': '2' }

// const { a, b } = obj

// const objWithC = {
//   ...obj,
//   // a: obj.a,
//   // b: obj.b,
//   c: 3
// }

// const person = {
//   name: 'Jacklyn Rose',
//   address: {
//     streetNumber: '12/4-10',
//     street: 'Prospect Street'
//   }
// }

// const updatedPerson = {
//   ...person,
//   address: {
//     ...person.address,
//     town: 'Erskineville'
//   }
// }