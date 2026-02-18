namespace altblocks {
    //% block="play tone %freq Hz for %duration ms"
    //% freq.min=31 freq.max=4978
    //% duration.min=1 duration.max=5000
    export function playToneFor(freq: number, duration: number): void {
        music.playTone(freq, duration)
    }
}
