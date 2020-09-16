// // display win messge pop up
// const winMsg = (player) => {
//   let color;
//   if (player === 1) {
//     color = 'yellow';
//   } else { color = 'red'; }
//   $('#winMsg').css('color', color);
//   $('#winMsg').fadeIn(200);
//   $('#winMsg').fadeOut(2500);
// };

// const dispWins = (rWins, yWins) => {
//   $('#rCount').text(rWins);
//   $('#yCount').text(yWins);
// };

// const boardClick = (event) => {
//   const col = parseInt(event.target.id.split('-')[1], 10);
//   const body = {
//     colClicked: col,
//   };
//   $.ajax({
//     type: 'POST',
//     url: '/clicked',
//     data: JSON.stringify(body),
//     contentType: 'application/json',
//     success: (result) => {
//       dispWins(result[0].rWins, result[0].yWins);
//       if (result[0].winner) {
//         winMsg((result[1].playerCount % 2) + 1);
//       }
//       const game = result[1];
//       // clear and re-render the board.
//       $('#grid').empty();
//       renderBoard(game);
//     },
//   });
// };

// const renderBoard = (game) => {
//   const grid = $('#grid');
//   for (let i = 0; i < game.rows + 1; i++) {
//     const row = $('<div> </div>');
//     row.attr('id', `row-${i}`);
//     row.attr('class', 'row row-md-12');
//     grid.prepend(row);
//     for (let j = 0; j < game.cols; j++) {
//       if (i === 0) { // assign buttons to register take turn.
//         const button = $('<button> </button>');
//         button.attr('id', `button-${j}`);
//         button.attr('class', 'btn btn-primary btn-lg counterButtons column');
//         button.text('🖖');
//         if (game.inPlay) {
//           button.click({ arr: game.board }, boardClick);
//         }
//         $(`#row-${i}`).append(button);
//       } else { // assign tokens: 0->empty, 1->yellow, 2->red.
//         const column = $('<div> </div>');
//         column.attr('id', `row-${i}-col-${j}`);
//         const token = ['⚪', '🟡', '🔴'][game.board[i][j]];
//       if (game.playerCount > 0 && j === game.colAnim && i === game.rowAnim && game.board[i][j]) {
//           // If clicked, apply animation
//           const text = $('<div></div>');
//           text.attr('class', 'movetxt');
//           text.text(token);
//           column.attr('class', 'column cell');
//           column.text('⚪');
//           column.append(text);
//         } else {
//           column.attr('class', 'columm');
//           column.text(token);
//         }
//         $(`#row-${i}`).append(column);
//       }
//     }
//   }
// };

// module.exports = {
//   renderBoard,
// };