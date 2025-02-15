ml.onStart(ml.event.Steps, function () {
    basic.showIcon(IconNames.Diamond)
    counter += 1
})
ml.onStart(ml.event.Run, function () {
    basic.showIcon(IconNames.Target)
    counter += 1
})
ml.onStop(ml.event.Steps, function () {
    counter += 0
})
ml.onStart(ml.event.Jump, function () {
    basic.showIcon(IconNames.SmallDiamond)
    counter += 1
})
ml.onStop(ml.event.Jump, function () {
    counter += 0
})
ml.onStop(ml.event.Run, function () {
    counter += 0
})
let counter = 0
basic.forever(function () {
    basic.showNumber(counter)
})
