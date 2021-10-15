package com.pelican

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

internal class PelicanTest {
    private val RULES = arrayOf<String>(
            "A,50,3 for 130",
            "B,30,2 for 45",
            "C,20",
            "D,15"
    );

    fun price(items: String): Int {
        val co: CheckOut = CheckOut(RULES);
        for (item in items.toCharArray()) {
            co.scan(item);
        }
        return co.total;
    }

    @Test
    fun shouldWorkTotal() {
        assertEquals(price(""), 0);
        assertEquals(price("A"), 50);
        assertEquals(price("AB"), 80);
        assertEquals(price("CDBA"), 115);
        assertEquals(price("AA"), 100);

        assertEquals(price("AAA"), 130);
        assertEquals(price("AAAA"), 180);
        assertEquals(price("AAAAA"), 230);
        assertEquals(price("AAAAAA"), 260);

        assertEquals(price("AAAB"), 160);
        assertEquals(price("AAABB"), 175);
        assertEquals(price("AAABBD"), 190);
        assertEquals(price("DABABA"), 190);
    }

    @Test
    fun shouldWorkIncrement() {
        val co: CheckOut = CheckOut(RULES);
        assertEquals(co.total, 0);
        co.scan('A');
        assertEquals(co.total, 50);
        co.scan('B');
        assertEquals(co.total, 80);
        co.scan('A');
        assertEquals(co.total, 130);
        co.scan('A');
        assertEquals(co.total, 160);
        co.scan('B');
        assertEquals(co.total, 175);
    }
}


