const tiles = Array.from(document.querySelectorAll(".tile"));
const playerDisplay = document.querySelector(".display-player");
let currentPlayer = "X";

// Indexes within the board
// [0] [1] [2]
// [3] [4] [5]
// [6] [7] [8]

const pushNumberToArray = (index) => {
    const arr = [];
    arr.push(index);
    console.log(arr);
  };


const clickHandler = (item, index) => {
  if (!item.innerText) {
    playerDisplay.innerText = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    item.innerText = currentPlayer;

    if (currentPlayer === "X") {
      pushNumberToArray(index)
    }
  }


  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
};

tiles.map((item, index) => {
  item.addEventListener("click", () => clickHandler(item, index));
});
