package com.myawesomemodule

import com.margelo.nitro.myawesomemodule.HybridMyAwesomeModuleSpec

class HybridMyAwesomeModule: HybridMyAwesomeModuleSpec() {    
    override fun sum(num1: Double, num2: Double): Double {
        return num1 + num2
    }
}
