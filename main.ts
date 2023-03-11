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
    bluetooth.startIOPinService()
    bluetooth.startTemperatureService()
    bluetooth.startLEDService()
    bluetooth.startMagnetometerService()
    bluetooth.startUartService()
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
