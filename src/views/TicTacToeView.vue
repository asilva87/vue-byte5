<script setup lang="ts">
import { ref } from 'vue'

enum Players {
    X = 'X',
    O = 'O'
}

const board = ref([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
])
const currentPlayer = ref(Players.X)
const gameOver = ref(false)
const winner = ref('')
const gameOverDueToExhaustion = ref(false)

const checkForWin = (): boolean => {
    const localBoard = [...board.value]

    // Taking a row as an example, if a row has ['x', 'o', 'o'], the resulting set will contain two characters,
    // 'x' and 'o'. Thus, length 2. If a row has ['x', 'x', 'x'], the resulting set will contain one characters, 'x'.
    // Thus, length 1. So if length is 1 and the resulting array conversion[0] equals to current player,
    // it means the player won. The same logic is applied to diagonals and columns.
    const leftDiagonal = Array.from(new Set([localBoard[0][0], localBoard[1][1], localBoard[2][2]]))
    const rightDiagonal = Array.from(
        new Set([localBoard[0][2], localBoard[1][1], localBoard[2][0]])
    )
    const rows = localBoard.map((row) => Array.from(new Set([row[0], row[1], row[2]])))

    // Check if player won in any of the diagonals
    if (
        (leftDiagonal.length === 1 && leftDiagonal[0] === currentPlayer.value) ||
        (rightDiagonal.length === 1 && rightDiagonal[0] === currentPlayer.value)
    ) {
        gameOver.value = true
        winner.value = currentPlayer.value
        return true
    }

    // Check if player won in a row
    for (let i = 0; i < localBoard.length; i++) {
        if (rows[i].length === 1 && rows[i][0] === currentPlayer.value) {
            gameOver.value = true
            winner.value  = currentPlayer.value
            return true
        }
    }

    // Check if player won in a column
    for (let col = 0; col < localBoard[0].length; col++) {
        const column = localBoard.map((row) => row[col])
        const uniqueColumn = Array.from(new Set(column))
        if (uniqueColumn.length === 1 && uniqueColumn[0] === currentPlayer.value) {
            gameOver.value = true
            winner.value = currentPlayer.value
            return true
        }
    }

    return false
}

const handleTurn = (coords: number[]): void => {
    if (gameOver.value) return

    if (!board.value[coords[0]][coords[1]]) {
        board.value[coords[0]][coords[1]] = currentPlayer.value

        const gameWon = checkForWin()

        if (gameWon) {
            return // Return early if there's a win
        }

        const gameDraw = checkForExhaustGameOver()
        if (gameDraw) {
            gameOver.value = true
            gameOverDueToExhaustion.value = true
            return // Return early if it's a draw
        }

        currentPlayer.value = currentPlayer.value === Players.X ? Players.O : Players.X
    }
}

const restartGame = (): void => {
    board.value = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
    gameOver.value = false
    gameOverDueToExhaustion.value = false
    currentPlayer.value = Players.X
}

const checkForExhaustGameOver = (): boolean => {
    for (let row of board.value) {
        if (!row[0] || !row[1] || !row[2]) return false
    }

    return true
}
</script>

<template>
    <main class="board-body">
        <!-- <div class="board__row" v-for="(row, rowIndex) in board" :key="rowIndex">
            <div class="board__row__cell">{{ row[0] }}</div>
            <div class="board__row__cell">{{ row[1] }}</div>
            <div class="board__row__cell">{{ row[2] }}</div>
        </div> -->

        <div class="game-info">Current player: <span class="blue">{{ currentPlayer }}</span></div>

        <div class="board">
            <!-- Not using for-loop due to each cell having their own specific styling. -->
        <div class="board__row">
            <div @click="handleTurn([0, 0])" class="board__row__cell">{{ board[0][0] }}</div>
            <div @click="handleTurn([0, 1])" class="board__row__cell" id="tc">
                {{ board[0][1] }}
            </div>
            <div @click="handleTurn([0, 2])" class="board__row__cell">{{ board[0][2] }}</div>
        </div>

        <div class="board__row">
            <div @click="handleTurn([1, 0])" class="board__row__cell" id="cl">
                {{ board[1][0] }}
            </div>
            <div @click="handleTurn([1, 1])" class="board__row__cell" id="cc">
                {{ board[1][1] }}
            </div>
            <div @click="handleTurn([1, 2])" class="board__row__cell" id="cr">
                {{ board[1][2] }}
            </div>
        </div>

        <div class="board__row">
            <div @click="handleTurn([2, 0])" class="board__row__cell">{{ board[2][0] }}</div>
            <div @click="handleTurn([2, 1])" class="board__row__cell" id="bc">
                {{ board[2][1] }}
            </div>
            <div @click="handleTurn([2, 2])" class="board__row__cell">{{ board[2][2] }}</div>
        </div>
        </div>

        <div class="game-info">
            <span v-if="gameOver && !gameOverDueToExhaustion">
                Player <span class="blue">{{ winner }}</span> wins!
            </span>
            <span v-if="gameOverDueToExhaustion">
                No one wins.
            </span>
        </div>
        <button @click="restartGame" v-if="gameOver" class="restart-button">Restart</button>
    </main>
</template>

<style scoped>
.board-body {
    display: flex;
    flex-direction: column;
    font-family: 'DaysOne';
    font-size: 3rem;
    text-transform: uppercase;
    border-radius: 20px;
    background-color: rgb(230, 230, 230);
    padding: 0 2rem;
}

.board {
    background-color: white;
    border-radius: 20px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem 0;
    min-width: 270px;
}

.board__row {
    display: flex;
    justify-content: center;
}

.board__row__cell {
    height: 5rem;
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
}

.board__row__cell:hover {
    cursor: pointer;
}

#tc,
#cc,
#bc {
    border-left: 1px solid var(--dark-blue);
    border-right: 1px solid var(--dark-blue);
}

#cl,
#cc,
#cr {
    border-top: 1px solid var(--dark-blue);
    border-bottom: 1px solid var(--dark-blue);
}

.blue {
    color: var(--blue);
    width: 3rem;
}

.game-info {
    font-size: 1.5rem;
    margin: 1rem auto;
    transition: 1s;
}

.restart-button {
    border: none;
    border-radius: 10px;
    background-color: white;
    color: var(--dark-blue);
    margin-left: auto;
    margin-right: auto;
    font-family: 'DaysOne';
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    padding: 5px 10px;
}

.restart-button:hover {
    color: var(--blue);
    cursor: pointer;
}
</style>
