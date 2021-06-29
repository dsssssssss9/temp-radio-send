input.onButtonPressed(Button.A, function () {
    for (let Loop1 = 0; Loop1 <= 4; Loop1++) {
        for (let Loop2 = 0; Loop2 <= 4; Loop2++) {
            if (led.point(Loop1, Loop2)) {
                radio.sendString("" + convertToText(Loop1) + convertToText(Loop2) + convertToText(1))
            } else {
                radio.sendString("" + convertToText(Loop1) + convertToText(Loop2) + convertToText(0))
            }
            basic.pause(28)
        }
    }
})
radio.setGroup(42)
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
	
})
