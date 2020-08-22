# Add Border

> Given a rectangular matrix of characters, add a border of asterisks(*) to it.

## Solution 

Write a helper function to find the longest string(s) in the matrix. 

```
function findLongestString(inputArray) {
    let len = 0; 
    for (let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > len){
            len = inputArray[i].length 
        }
    }
    return len
}
```

Use the result of findLongestString and add two to it. 
Create a stars variable. This will be for our top and bottom border. Use the repeat method to create as many stars as the longest string plus 2. 
Create a variable called newString to store our new strings.
Create a variable called rect to create a new array. 

```
  let longestLen = findLongestString(picture) + 2
    let stars = '*'.repeat(longestLen)
    let newString = ""
    let rect = []
```

Loop through the input string (called picture). 
Add a * to the beginning and end of each line in picture. 
Push newString into rect. 

Finally, push the stars bottom border to rect and return rect.

```
  for(let i = 0; i < picture.length; i++){
      newString = '*' + picture[i] + '*'
      rect.push(newString)
    }
    rect.push(stars)
    return rect
 ```
