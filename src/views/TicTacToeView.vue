<script setup lang="ts">
import { ref } from 'vue'

enum Players {
    X = 'X',
    O = 'O',
}

const board = ref([
    ['', '', ''], 
    ['', '', ''], 
    ['', '', '']
])
const currentPlayer = ref(Players.X)
const gameOver = ref(false)

const checkForWin = (): void => {
    const localBoard = [...board.value]

    const leftDiagonal = Array.from(new Set([localBoard[0][0], localBoard[1][1], localBoard[2][2]]))
    const rightDiagonal = Array.from(new Set([localBoard[0][2], localBoard[1][1], localBoard[2][0]]))
    const rows = localBoard.map((row) => new Set([row[0], row[1], row[2]]))
    // const cols = localBoard
}

// Change this
const handleTurn = (coords: number[]): void => {
    if (!board.value[coords[0]][coords[1]])
        board.value[coords[0]][coords[1]] = currentPlayer.value;
    
    currentPlayer.value = currentPlayer.value === Players.X ? Players.O : Players.X

    checkForWin()
}

</script>

<template>
    <main class="board">
        <!-- <div class="board__row" v-for="(row, rowIndex) in board" :key="rowIndex">
            <div class="board__row__cell">{{ row[0] }}</div>
            <div class="board__row__cell">{{ row[1] }}</div>
            <div class="board__row__cell">{{ row[2] }}</div>
        </div> -->

        <!-- Not using for-loop due to each cell having their own specific styling. -->
        <div class="board__row">
            <div @click="handleTurn([0, 0])" class="board__row__cell">{{ board[0][0] }}</div>
            <div @click="handleTurn([0, 1])" class="board__row__cell" id="tc">{{ board[0][1] }}</div>
            <div @click="handleTurn([0, 2])" class="board__row__cell">{{ board[0][2] }}</div>
        </div>

        <div class="board__row">
            <div @click="handleTurn([1, 0])" class="board__row__cell" id="cl">{{ board[1][0] }}</div>
            <div @click="handleTurn([1, 1])" class="board__row__cell" id="cc">{{ board[1][1] }}</div>
            <div @click="handleTurn([1, 2])" class="board__row__cell" id="cr">{{ board[1][2] }}</div>
        </div>

        <div class="board__row">
            <div @click="handleTurn([2, 0])" class="board__row__cell">{{ board[2][0] }}</div>
            <div @click="handleTurn([2, 1])" class="board__row__cell" id="bc">{{ board[2][1] }}</div>
            <div @click="handleTurn([2, 2])" class="board__row__cell">{{ board[2][2] }}</div>
        </div>
    </main>
</template>

<style scoped>
    .board {
        display: flex;
        flex-direction: column;
        font-family: 'DaysOne';
        font-size: 3rem;
        text-transform: uppercase;
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

    #tc, #cc, #bc {
        border-left: 1px solid var(--dark-blue);
        border-right: 1px solid var(--dark-blue);
    }

    #cl, #cc, #cr{
        border-top: 1px solid var(--dark-blue);
        border-bottom: 1px solid var(--dark-blue);
    }
</style>
