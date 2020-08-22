function addBorder(picture) {
    let longestLen = findLongestString(picture) + 2
    let stars = '*'.repeat(longestLen)
    let newString = ""
    let rect = []
    rect.push(stars)
    for(let i = 0; i < picture.length; i++){
      newString = '*' + picture[i] + '*'
      rect.push(newString)
    }
    rect.push(stars)
    return rect
}


function findLongestString(inputArray) {
    let len = 0; 
    for (let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > len){
            len = inputArray[i].length 
        }
    }
    return len
}
