"use strict";
function startGame() {
  //Let's begin the Game

  let root = document.getElementById("root");
  let points = document.getElementById("points");
  let congo = document.getElementById("congo");
  let newGame = document.getElementById("newGame");

  let gameOver = false;
  let visited = [];
  let score = 0;

  let bombIndexes = generateRandomArray();
  console.log(bombIndexes);

  //Declaring Variables for loops, always good practice to declare them outside loop and then use :)
  //   **When  declaring varaible here insead of declaring them inside loops,
  // then, EventListener is not behaving properly, strange ! **
  // let row;
  // let cell;
  // let currentIndex;

  //   let abhishek = 0;

  for (let i = 0; i < 9; i += 1) {
    // Creating rows for MineSweeper
    let row = document.createElement("div");

    row.style.height = "50px";
    row.style.display = "block";

    for (let x = 0; x < 9; x += 1) {
      // Creating Cell for MineSweeper
      let currentIndex = i * 9 + x;
      let abhishek = 0;
      abhishek++;
      console.log(abhishek);
      let cell = document.createElement("div");

      cell.style.width = "50px";
      cell.style.height = "50px";

      cell.style.background = "grey";
      cell.style.border = "1px solid black";

      cell.style.display = "inline-block";
      cell.setAttribute("id", currentIndex);
      // cell.innerHTML = currentIndex;
      row.appendChild(cell);

      // EventListenr for each cell
      console.log("line 48", cell.id);
      cell.addEventListener("click", () => {
        console.log(abhishek);
        console.log("line 50 ", cell.id);
        console.log(visited);
        console.log(currentIndex);
        if (!bombIndexes.has(currentIndex) && !gameOver) {
          if (!visited.includes(currentIndex)) {
            console.log("Abhishek");

            visited.push(currentIndex);

            cell.style.background = "green";
            score += 1;

            if (score == 5) {
              congo.style.display = "block";
            }
            points.innerHTML = score;

            let neighbours = 0;
            // console.log(typeof Number(cell.id));
            // console.log(bombIndexes.has(Number(cell.id) - 10));
            if (
              Number(cell.id) - 10 >= 0 &&
              bombIndexes.has(Number(cell.id) - 10)
            ) {
              //   console.log("Safer Index");
              neighbours += 1;
            }
            if (
              Number(cell.id) - 9 >= 0 &&
              bombIndexes.has(Number(cell.id) - 9)
            ) {
              //   console.log("Safer Index");
              neighbours += 1;
            }

            if (
              Number(cell.id) - 8 >= 0 &&
              bombIndexes.has(Number(cell.id) - 8)
            ) {
              //   console.log("Safer Index");
              neighbours += 1;
            }

            if (
              Number(cell.id) - 1 >= 0 &&
              bombIndexes.has(Number(cell.id) - 1)
            ) {
              //   console.log("Safer Index");
              neighbours += 1;
            }
            if (
              Number(cell.id) + 1 >= 0 &&
              bombIndexes.has(Number(cell.id) + 1)
            ) {
              //   console.log("Safer Index");
              neighbours += 1;
            }
            if (
              Number(cell.id) + 8 >= 0 &&
              bombIndexes.has(Number(cell.id) + 8)
            ) {
              //   console.log("Safer Index");
              neighbours += 1;
            }
            if (
              Number(cell.id) + 9 >= 0 &&
              bombIndexes.has(Number(cell.id) + 9)
            ) {
              //   console.log("Safer Index");
              neighbours += 1;
            }
            if (
              Number(cell.id) + 10 >= 0 &&
              bombIndexes.has(Number(cell.id) + 10)
            ) {
              //   console.log("Safer Index");
              neighbours += 1;
            }
            cell.innerHTML = neighbours;
            cell.style.verticalAlign = "top";
            // cell.style.textAlign = "center";
            // cell.style.justifyContent = "center";
            // cell.style.alignItems = "center";
            cell.style.margins = 0;
            cell.style.padding = 0;
          }
        } else {
          console.log("bomb");
          congo.style.display = "block";
          congo.innerHTML = "You Lost Buddy !!!".bold();
          // Means, we have stepped on bombIndex => GameOver
          gameOver = true;
          let bombArray = Array.from(bombIndexes);
          console.log(bombArray);
          let bomb;
          let bombIndex;
          for (let j = 0; j < 9; j += 1) {
            bombIndex = bombArray[j];
            console.log(bombIndex);
            bomb = document.getElementById(bombIndex);
            console.log(bomb.id);
            bomb.style.background = "red";
          }
          newGame.style.display = "block";
          newGame.addEventListener("click", () => {
            location.reload();
          });
        }
      });
    }
    root.appendChild(row);
  }
}

function generateRandomArray() {
  let set = new Set();
  for (let i = 0; set.size != 9; i += 1) {
    set.add(Math.floor(Math.random() * 81));
  }
  return set;
}
startGame();
