<script setup lang="ts">
// I'm avoid using "eval" due to it being considered a security threat
import { ref } from 'vue'

enum Operations {
    CLEAR = 'CLEAR',
    CLEAR_SCREEN = 'CLEAR_SCREEN',
    ADD = 'ADD',
    SUB = 'SUB',
    MULT = 'MULT',
    DIV = 'DIV',
    EQUALS = 'EQUALS',
    MODULO = 'MODULO',
    ROOT = 'ROOT',
    SQUARED = 'SQUARED',
    NO_OPERATION = 'NO_OPERATION'
}

const prevValue = ref('0')
const curValue = ref('0')
const thereWasOperation = ref(false)
const curOperation = ref(Operations.NO_OPERATION)
const firstRun = ref(true)

const calcSimpleOperation = (operation: Operations, value1: number, value2: number): number => {
    switch (operation) {
        case Operations.ADD:
            return value1 + value2
        case Operations.SUB:
            return value1 - value2
        case Operations.MULT:
            return value1 * value2
        case Operations.DIV:
            return value1 / value2
        case Operations.SQUARED:
            return value1 * value1
        case Operations.ROOT:
            return Math.sqrt(value1)
        case Operations.MODULO:
            return value1 % value2
    }

    return 0
}

const keyPress = (keyValue: string | Operations) => {
    if (Number.isInteger(Number(keyValue)) || keyValue === '.') {
        if (curValue.value === '0' || thereWasOperation.value) {
            curValue.value = keyValue
            thereWasOperation.value = false
        } else {
            curValue.value += keyValue
        }
    } else {
        switch (keyValue) {
            // Screen/memory functions
            case Operations.CLEAR_SCREEN:
                curValue.value = '0'
                break
            case Operations.CLEAR:
                prevValue.value = '0'
                curValue.value = '0'
                curOperation.value = Operations.NO_OPERATION
                thereWasOperation.value = false
                break
            // Operations
            case Operations.ADD:
            case Operations.SUB:
            case Operations.MULT:
            case Operations.DIV:
            case Operations.MODULO:
            case Operations.ROOT:
            case Operations.SQUARED:
                thereWasOperation.value = true
                curOperation.value = keyValue
                prevValue.value = curValue.value

                if (!firstRun.value) {
                    prevValue.value = curValue.value = calcSimpleOperation(
                        curOperation.value,
                        Number(prevValue.value),
                        Number(curValue.value)
                    ).toString()
                } else {
                    firstRun.value = false
                }
                break
            case Operations.EQUALS:
                if (curOperation.value !== Operations.NO_OPERATION) {
                    curValue.value = calcSimpleOperation(
                        curOperation.value,
                        Number(prevValue.value),
                        Number(curValue.value)
                    ).toString()
                    curOperation.value = Operations.NO_OPERATION
                    prevValue.value = '0'
                    firstRun.value = true
                    thereWasOperation.value = false
                }
                break
        }
    }

    console.log(
        `prevValue: ${prevValue.value} | curValue: ${curValue.value} | curOperation: ${curOperation.value} | thereWasOperation: ${thereWasOperation.value}`
    )
}
</script>

<template>
    <main>
        <div class="calc">
            <div class="calc__display">{{ curValue }}</div>

            <div class="calc__key-row">
                <button class="calc__key-row__key">&lt;</button>
                <button class="calc__key-row__key">(</button>
                <button class="calc__key-row__key">)</button>
                <button class="calc__key-row__key">mod</button>
                <button @click="keyPress(Operations.CLEAR)" class="calc__key-row__key">C</button>
            </div>
            <div class="calc__key-row">
                <button @click="keyPress('7')" class="calc__key-row__key calc__key-row__key--digit">
                    7
                </button>
                <button @click="keyPress('8')" class="calc__key-row__key calc__key-row__key--digit">
                    8
                </button>
                <button @click="keyPress('9')" class="calc__key-row__key calc__key-row__key--digit">
                    9
                </button>
                <button @click="keyPress(Operations.DIV)" class="calc__key-row__key">
                    &divide;
                </button>
                <button class="calc__key-row__key">&#960;</button>
            </div>
            <div class="calc__key-row">
                <button @click="keyPress('4')" class="calc__key-row__key calc__key-row__key--digit">
                    4
                </button>
                <button @click="keyPress('5')" class="calc__key-row__key calc__key-row__key--digit">
                    5
                </button>
                <button @click="keyPress('6')" class="calc__key-row__key calc__key-row__key--digit">
                    6
                </button>
                <button @click="keyPress(Operations.MULT)" class="calc__key-row__key">
                    &times;
                </button>
                <button @click="keyPress(Operations.ROOT)" class="calc__key-row__key">
                    &radic;
                </button>
            </div>
            <div class="calc__key-row">
                <button @click="keyPress('1')" class="calc__key-row__key calc__key-row__key--digit">
                    1
                </button>
                <button @click="keyPress('2')" class="calc__key-row__key calc__key-row__key--digit">
                    2
                </button>
                <button @click="keyPress('3')" class="calc__key-row__key calc__key-row__key--digit">
                    3
                </button>
                <button @click="keyPress(Operations.SUB)" class="calc__key-row__key">
                    &minus;
                </button>
                <button @click="keyPress(Operations.SQUARED)" class="calc__key-row__key">
                    x<sup>2</sup>
                </button>
            </div>
            <div class="calc__key-row">
                <button @click="keyPress('0')" class="calc__key-row__key calc__key-row__key--digit">
                    0
                </button>
                <button @click="keyPress('.')" class="calc__key-row__key">.</button>
                <button class="calc__key-row__key">&percnt;</button>
                <button @click="keyPress(Operations.ADD)" class="calc__key-row__key">&plus;</button>
                <button
                    @click="keyPress(Operations.EQUALS)"
                    class="calc__key-row__key calc__key-row__key--equals"
                >
                    =
                </button>
            </div>
        </div>
    </main>
</template>

<style scoped>
.calc {
    display: flex;
    flex-direction: column;
    font-family: 'AvenirNext';
    background-color: rgb(230, 230, 230);
    padding: 2rem;
    border-radius: 20px;
}

.calc__display {
    font-size: 2rem;
    direction: rtl;
    border-radius: 20px;
    background-color: white;
    padding: 0.5rem;
    padding-top: 0.8rem;
    margin-bottom: 1rem;
}

.calc__key-row {
    display: flex;
}

.calc__key-row__key {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: none;
    background-color: white;
    margin: 5px;
    font-size: 1.2rem;
    color: var(--dark-blue);
}

.calc__key-row__key:hover {
    cursor: pointer;
    border: 1px solid var(--dark-blue);
}

.calc__key-row__key:active {
    cursor: pointer;
    border: 1px solid var(--blue);
    box-shadow: 1px 0px 8px -3px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 1px 0px 8px -3px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 1px 0px 8px -3px rgba(0, 0, 0, 0.75) inset;
}

.calc__key-row__key--equals {
    background-color: var(--red);
    color: white;
}

.calc__key-row__key--digit {
    background-color: rgb(230, 230, 230);
    border: 1px solid white;
}
</style>
