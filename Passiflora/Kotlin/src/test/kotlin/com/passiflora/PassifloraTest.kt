package com.passiflora

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

internal class PassifloraTest {

    @Test
    fun sort() {
        val app = Passiflora()
        val phrase = "When not studying nuclear physics, Bambi likes to play beach volleyball."
        val expectedResult = "aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy"

        val result = app.sort(phrase)

        assertEquals(result, expectedResult)
    }

}


