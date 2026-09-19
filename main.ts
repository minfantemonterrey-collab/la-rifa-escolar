let aleatorio = 0
input.onGesture(Gesture.Shake, function () {
    aleatorio = 0
    aleatorio += randint(1, 100)
    basic.showNumber(aleatorio)
})
