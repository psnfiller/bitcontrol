bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        # . . . #
        . # # # .
        `)
    bluetooth.startAccelerometerService()
    bluetooth.startButtonService()
    bluetooth.startUartService()
    bluetooth.startIOPinService()
    bluetooth.startLEDService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
