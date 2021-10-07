package com.passiflora

fun main() {
    val phrases = arrayOf(
            "Hello",
            "World"
    )

    val app = Passiflora();

    for (phrase in phrases) {
        println("----------------")
        println(phrase)
        println("===")
        println(app.sort(phrase))
    }
}
