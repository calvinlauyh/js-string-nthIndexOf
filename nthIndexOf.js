"use strict";
/**
 * String.nthIndexOf
 * Search for the nth occurrence of a substring in a string. Support both 
 * forward and backward searching
 *
 * Copyright (c) 2016 Yu H.
 * 
 * @author Yu H.
 * @version 1.0.1
 * @license The MIT License (MIT)
 * https://opensource.org/licenses/MIT
 **/

 if (typeof String.prototype.nthIndexOf === "undefined") {
    /**
     * The function returns the position of the nth occurrence of a search 
     * value in a string.
     *
     * @param {string} searchValue  The value to search for
     * @param {number} nthIndex     Which occurence to search for. If index 
     *                              is a negative number, it will perform
     *                              a backward search. All index starts at
     *                              1
     * @param {number} [start]      (Optional) At which position to start
     * @return {number}             Position where the search value of nth 
     *                              occurrence appears, -1 if it does not 
     *                              appears
     */
    String.prototype.nthIndexOf = function(searchValue, nthIndex, start) {
        var i, l, 
            tmp, position=[], posIndex=0, targetIndex;
        
        if (nthIndex === 0) {
            throw new TypeError("nthIndex cannot be 0 in "+
                "String.nthIndexOf(searchValue, nthIndex, start)");
        }
        // initialize the loop
        i=(typeof start === "undefined")? -1: start-1;
        l=this.length;
        /* 
         * loop throught the string using the string length as iteration 
         * condition
         */
        while(i<l) {
            /*
             * use indexOf with progressively increment i to search for 
             * substring occurence 
             */
            i = this.indexOf(searchValue, i+1);
            // position nthIndex reached
            if (posIndex+1 === nthIndex) {
                return i;
            }
            // no more occurence of the string found
            if (i === -1) {
                break;
            }
            // keep an array of position for negative nth index
            position[posIndex++] = i;
        }
        if (nthIndex < 0) {
            // calcuate the correct index for negative nth index
            targetIndex = posIndex + nthIndex;
            if (targetIndex >= 0) {
                return position[targetIndex];
            }
        }
        return -1;
    }
}
/**
 * The function returns the position of the nth occurrence of a search 
 * value in a string.
 *
 * @param {string} str          The string to search with
 * @param {string} searchValue  The value to search for
 * @param {number} nthIndex     Which occurence to search for. If index 
 *                              is a negative number, it will perform
 *                              a backward search. All index starts at
 *                              1
 * @param {number} [start]      (Optional) At which position to start
 * @return {number}             Position where the search value of nth 
 *                              occurrence appears, -1 if it does not 
 *                              appears
 */
function nthIndexOf(str, searchValue, nthIndex, start) {
        var i, l, 
            tmp, position=[], posIndex=0, targetIndex;
        
        if (nthIndex === 0) {
            throw new TypeError("nthIndex cannot be 0 in "+
                "String.nthIndexOf(searchValue, nthIndex, start)");
        }
        // initialize the loop
        i=(typeof start === "undefined")? -1: start-1;
        l=str.length;
        /* 
         * loop throught the string using the string length as iteration 
         * condition
         */
        while(i<l) {
            /*
             * use indexOf with progressively increment i to search for 
             * substring occurence 
             */
            i = str.indexOf(searchValue, i+1);
            // position nthIndex reached
            if (posIndex+1 === nthIndex) {
                return i;
            }
            // no more occurence of the string found
            if (i === -1) {
                break;
            }
            // keep an array of position for negative nth index
            position[posIndex++] = i;
        }
        if (nthIndex < 0) {
            // calcuate the correct index for negative nth index
            targetIndex = posIndex + nthIndex;
            if (targetIndex >= 0) {
                return position[targetIndex];
            }
        }
        return -1;
}
