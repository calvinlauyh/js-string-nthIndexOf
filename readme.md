# String.nthIndexOf
This code snippet add function nthIndexOf() to String object and provides the ability to search for the nth occurrence of a substring in a string. If you do not want to pollute the String.prototype, you can also use the nthIndexOf() version instead

## Usage 
String.prototype.nthIndexOf(searchValue, nthIndex, start)  
  
| Argument    | Data Type | Description                                         |
|-------------|-----------|-----------------------------------------------------|
| searchValue | string    | The value to search for                             |
| nthIndex    | number    | Which occurrence to search for, index starts with 1 |
| start       | number    | (Optional) At which position to start               |
  
  
nthIndexOf(string, searchValue, nthIndex, start)
  
| Argument    | Data Type | Description                                         |
|-------------|-----------|-----------------------------------------------------|
| string      | string    | The value to search with                            |
| searchValue | string    | The value to search for                             |
| nthIndex    | number    | Which occurrence to search for, index starts with 1 |
| start       | number    | (Optional) At which position to start               |

There is two version of nthIndexOf available, the first one is appended to String Object can can be invoked using ```("foo").nthIndexOf("o", 2);```. The second one is defined in global environment can can be invoked using ```nthIndexOf("foo", "o", 2);```
  
## History
* 5 Apr, 2016. Version 1.0.0
  * First published
  
## License
Copyright (c) Lau Yu Hei  
Published under The MIT License (MIT)
