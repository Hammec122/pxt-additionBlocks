/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace altblocks {
    //% block="play tone %freq Hz for %duration ms"
    //% freq.min=31 freq.max=4978
    //% duration.min=1 duration.max=5000
    export function playToneFor(freq: number, duration: number): void {
        music.playTone(freq, duration)
    }
}

