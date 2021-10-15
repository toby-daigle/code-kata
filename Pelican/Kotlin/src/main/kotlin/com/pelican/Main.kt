package com.pelican

fun main() {
    val RULES = arrayOf<String>(
            "A,50,3 for 130",
            "B,30,2 for 45",
            "C,20",
            "D,15"
    );

    val co: CheckOut = CheckOut(RULES);

    co.scan('A');
    println("Scanned A: ".plus(co.total));
    co.scan('B');
    println("Scanned B: ".plus(co.total));
    co.scan('A');
    println("Scanned A: ".plus(co.total));
    co.scan('A');
    println("Scanned A: ".plus(co.total));
    co.scan('B');
    println("Scanned B: ".plus(co.total));
}
