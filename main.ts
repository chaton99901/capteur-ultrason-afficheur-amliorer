let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance > 25) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (distance > 20) {
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (distance > 15) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (distance > 10) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            . . . . .
            . . . . .
            `)
    } else if (distance > 5) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
    }
})
