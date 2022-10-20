let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance < 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (distance < 5) {
        basic.showLeds(`
            # # # # #
            # # . # #
            # . . . #
            # # . # #
            # # # # #
            `)
    } else if (distance < 7) {
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            # . . . #
            # # . # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
