import {
  INIT_GAME,
  CELL_CLICKED,
  GAME_OVER,
  CELL_MARKED
} from "../common/actionsTypes";
import initialState from "../store/initialState";

export default (state = initialState.board, action) => {
  switch (action.type) {
    case INIT_GAME: {
      const { width, height, mines } = action.payload;
      const result = createBoard(width, height, mines);
      return result;
    }
    case CELL_CLICKED: {
      const result = [...state];
      revealEdgesIterative(result)(action.payload);
      return result;
    }
    case CELL_MARKED: {
      const result = [...state];
      const cell = getCell(result, action.payload);
      cell.isMarked = cell.isMarked ? false : true;
      return result;
    }
    case GAME_OVER: {
      const result = [...state];
      const cell = getCell(result, action.payload);
      cell.isRevealed = true;
      return result;
    }

    default:
      return state;
  }
};

// ** Recoursive method does not good for big sized stack because of the js call stack limitation **
// const revealEdgesRecoursive = board => {
//   const innerRevealEdges = cellId => {
//     const cell = board.get(cellId);
//     if (cell.isRevealed) return;
//     const revealedCell = { ...cell };
//     revealedCell.isRevealed = true;
//     board.set(cellId, revealedCell);
//     cell.edges.forEach(cId => {
//       if (cell.value === 0) {
//         innerRevealEdges(board)(cId);
//       }
//     });
//   };
//   return innerRevealEdges;
// };

// DFS over the board to reveal all the cells
const revealEdgesIterative = board => {
  const traverseDFS = cellId => {
    const cell = getCell(board, cellId);
    let stack = [cell];
    while (stack.length) {
      let cell = stack.pop();
      if (cell.isRevealed) continue;
      cell.isRevealed = true;
      if (cell.value > 0) continue;

      cell.edges.forEach(cId => {
        const cell = getCell(board, cId);
        if (!cell.isRevealed && !cell.alreadyIncluded) {
          cell.alreadyIncluded = true;
          stack.push(cell);
        }
      });
    }

    return true;
  };

  return traverseDFS;
};

const createBoard = (width, height, mines) => {
  const result = [];
  const randomMiles = generateRandomMilesCords(mines, width, height);
  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    const row = [];
    for (let colIndex = 0; colIndex < width; colIndex++) {
      const cellId = generateIdKey(rowIndex, colIndex);
      const cellEdges = getCellEdges(rowIndex, colIndex, width, height);
      const isMined = randomMiles.includes(cellId);
      const value = isMined ? 0 : countMinedCells(cellEdges, randomMiles);
      row.push(createCell(cellId, value, isMined, cellEdges));
    }
    result.push(row);
  }
  return result;
};

const getCellEdges = (row, col, width, height) => {
  const result = [];
  // top edge
  if (row > 0) {
    result.push(generateIdKey(row - 1, col));
  }
  // top right edge
  if (row > 0 && col < width - 1) {
    result.push(generateIdKey(row - 1, col + 1));
  }
  // right
  if (col < width - 1) {
    result.push(generateIdKey(row, col + 1));
  }
  // bottom right
  if (row < height - 1 && col < width - 1) {
    result.push(generateIdKey(row + 1, col + 1));
  }
  // bottom
  if (row < height - 1) {
    result.push(generateIdKey(row + 1, col));
  }
  // bottom left
  if (row < height - 1 && col > 0) {
    result.push(generateIdKey(row + 1, col - 1));
  }
  // left
  if (col > 0) {
    result.push(generateIdKey(row, col - 1));
  }
  return result;
};

// generate random cordinates for the miles on the board
const generateRandomMilesCords = (numberOfMiles, width, height) => {
  const result = [];
  do {
    const row = Math.floor(Math.random() * height);
    const col = Math.floor(Math.random() * width);
    const key = generateIdKey(row, col);
    if (!result.includes(key)) result.push(key);
  } while (result.length < numberOfMiles);

  return result;
};

const countMinedCells = (edges, minedEdges) => {
  let result = 0;
  result = edges.reduce((result, curr) => {
    if (minedEdges.includes(curr)) {
      result++;
    }
    return result;
  }, 0);
  return result;
};

const createCell = (id, value, isMine, edges) => {
  const result = {};
  result.id = id;
  result.isMined = isMine;
  result.value = value;
  result.edges = edges;
  return result;
};

const generateIdKey = (row, col) => `${row}_${col}`;
const getCordsFromKey = key => key.split("_");
export const getCell = (board, key) => {
  const cords = getCordsFromKey(key);
  return board.length > 0 ? board[cords[0]][cords[1]] : {};
};
