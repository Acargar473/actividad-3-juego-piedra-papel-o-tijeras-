input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(2000)
    juego = randint(1, 3)
    if (juego == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (juego == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        // Piedra
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
let juego = 0
basic.pause(500)
basic.showString("Hello!")
basic.pause(500)
basic.clearScreen()
basic.showString("Shake it!")
