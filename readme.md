# String.nthIndexOf
This code snippet add function nthIndexOf() to String object and provides the ability to search for the nth occurrence of a substring in a string. It supports both forward and backward serach by providing positive or negative nthIndex. If you do not want to pollute the String.prototype, you can also use the nthIndexOf() version instead

## Function Signature
There are two versions of nthIndexOf available, the first one is appended to String Object can can be invoked using ```("foo").nthIndexOf("o", 2);```. The second one is defined in global environment can can be invoked using ```nthIndexOf("foo", "o", 2);```  
  
### String.prototype.nthIndexOf(searchValue, nthIndex, start)
  
| Argument    | Data Type | Description                                            |
|-------------|-----------|--------------------------------------------------------|
| searchValue | string    | The value to search for                                |
| nthIndex    | number    | Which occurrence to search for. If index is a negative number, it will perform a backward search. All index starts at 1                   |
| start       | number    | (Optional) At which position to start                  |
  
  
### nthIndexOf(string, searchValue, nthIndex, start)
  
| Argument    | Data Type | Description                                            |
|-------------|-----------|--------------------------------------------------------|
| string      | string    | The string to search with                              |
| searchValue | string    | The value to search for                                |
| nthIndex    | number    | Which occurrence to search for. If index is a negative number, it will perform a backward search. All index starts at 1                   |
| start       | number    | (Optional) At which position to start                  |
  
## Return value
Returns position where the search value of nth occurrence appears, -1 if it does not appears
  
## Usage
1) Find the 2nd occurrence of "t" in "tetst"  
```
("tetst").nthIndexOf("t", 2);
// return 2
```  
  
2) Find the 3rd last occurrence of "t" in "tetst"  
```
("tetst").nthIndexOf("t", -3);
// return 0
```  
  
3) Find the 2nd occurrence of "t" in "tetst" starting from position 1  
```
("tetst").nthIndexOf("t", 2, 1);
// return 4
```  
  
4) Find the 3rd last occurrence of "t" in "tetst" starting from position 1  
```
("tetst").nthIndexOf("t", -3, 1);
// return -1
```  
  
## History
* 4 May, 2016. Version 1.0.1
  * Support both forward and backward search
* 4 May, 2016. Version 1.0.0
  * First published
  
## License
Copyright (c) Lau Yu Hei  
Published under The MIT License (MIT)
