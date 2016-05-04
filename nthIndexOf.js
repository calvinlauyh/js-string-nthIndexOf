"use strict";
/**
 * String.nthIndexOf
 * Search for the nth occurrence of a substring in a string
 *
 * Copyright (c) 2016 Lau Yu Hei
 * 
 * @author Lau Yu Hei
 * @version 1.0.0
 * @license The MIT License (MIT)
 * https://opensource.org/licenses/MIT
 **/

 if (typeof String.prototype.nthIndexOf === "undefined") {
    /**
     * The function returns the position of the nth occurrence of a search 
     * value in a string.
     *
     * @param {string} searchValue  The value to search for
     * @param {number} nthIndex     Which occurence to search for, index
     *                              starts with st 1
     * @param {number} [start]      (Optional) At which position to start
     * @return {number}             Position where the search value of nth 
     *                              occurrence appears, -1 if it does not 
     *                              appears
     */
    String.prototype.nthIndexOf = function(searchValue, nthIndex, start) {
        var i, l, 
            tmp;
        
        if (nthIndex < 1) {
            throw new TypeError("nthIndex should starts with 1 in "+
                "String.nthIndexOf(searchValue, nthIndex, start)");
        }
        tmp = this.indexOf(searchValue, start);
        for(i=1,l=nthIndex; i<l; i++) {
            tmp = this.indexOf(searchValue, tmp+1);
            if (tmp === -1) {
                return -1;
            }
        }
        return tmp;
    }
}
/**
 * The function returns the position of the nth occurrence of a search 
 * value in a string.
 *
 * @param {string} str          The string to search with
 * @param {string} searchValue  The value to search for
 * @param {number} nthIndex     Which occurrence to search for, index
 *                              starts with st 1
 * @param {number} [start]      (Optional) At which position to start
 * @return {number}             Position where the search value of nth 
 *                              occurrence appears, -1 if it does not 
 *                              appears
 */
function nthIndexOf(str, searchValue, nthIndex, start) {
    var i, l, 
        tmp;
        
    if (nthIndex < 1) {
        throw new TypeError("nthIndex should starts with 1 in "+
            "nthIndexOf(string, searchValue, nthIndex, start)");
    }
    tmp = str.indexOf(searchValue, start);
    for(i=1,l=nthIndex; i<l; i++) {
        tmp = str.indexOf(searchValue, tmp+1);
        if (tmp === -1) {
            return -1;
        }
    }
    return tmp;
}
