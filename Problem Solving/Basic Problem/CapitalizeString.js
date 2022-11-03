//Capitalize First word from given string
// I/O
// capitalize("love the way you lie") == "Love The Way You Lie"


function capitalize(str){
    const arrayOfStr = str.split(" ")
    let newStr = ''

    for(elm of arrayOfStr){
        newStr += elm.charAt(0).toUpperCase()  + elm.slice(1) + " "
    }
    return newStr

}

console.log(capitalize("love the way you lie"))