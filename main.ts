radio.setGroup(80)
let moje_cislo = control.deviceSerialNumber()
// basic pause
basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("answer", 65)
    }
    
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("answer", 66)
    }
    
    if (input.pinIsPressed(TouchPin.P0)) {
        radio.sendValue("answer", 67)
    }
    
    if (input.pinIsPressed(TouchPin.P1)) {
        radio.sendValue("answer", 68)
    }
    
    if (input.pinIsPressed(TouchPin.P2)) {
        radio.sendValue("answer", 69)
    }
    
})
radio.onReceivedValue(function on_received_value(odeslano: string, value: number) {
    if (value == moje_cislo) {
        music.playMelody("C", 120)
    }
    
})
