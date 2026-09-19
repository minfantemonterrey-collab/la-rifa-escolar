let aleatorio = 0
input.onGesture(Gesture.Shake, function () {
    aleatorio = 0
    aleatorio += randint(1, 1000)
    basic.showNumber(aleatorio)
})
