let aleatorio = 0
input.onGesture(Gesture.Shake, function () {
    aleatorio = 0
    aleatorio += randint(1, 1000)
    basic.showNumber(aleatorio)
    music.play(music.stringPlayable("C C E E D B G E ", 120), music.PlaybackMode.UntilDone)
})
