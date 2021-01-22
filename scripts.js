// 1.Aşağıdakı cümlədə ən böyük sözü tapın.
// console.log("EcmaCode üzvlərini salamlayırıq")

function long(longford){

    let spl =longford.split(" ");

    let total = 0 ;
    let result = '';

    for (let i=0 ; i < spl.length ; i++) {

        if(spl[i].length > total ) {

            total=spl[i].length;
            result = spl[i]
        }
    }
    
    return total;


}

let val1=long("EcmaCode üzvlərini salamlayırıq");

console.log(val1);


// Using .sort()

// function longestWord(text) {
//     var sortedArray = text.split(' ')
//                           .sort((wordA, wordB) => wordB.length - wordA.length)
//                           console.log(sortedArray)
//     return sortedArray[0]
// }

// let val1=longestWord("EcmaCode üzvlərini salamlayırıq");

// console.log(val1);

// ----------------------------------------------------------------------------

//2. Aşağıdakı cümlədə hər bir sözün ilk hərfinin böyük hərf olmasını təmin edin.
// example: 
// əvvəl: Javascript dili çox populyar dildir
// sonra: Javascript Dili Çox Populyar Dildir

function wordsfirst(text) {

    let worslet=text.split(" ");

    let capital=worslet.map(word=>{
        return word.replace(word[0], word[0].toUpperCase());
    })
  
    return capital.join(' ');
  }
  
  var val2 = wordsfirst("Javascript dili çox populyar dildi");
  console.log(val2); 
  
// ---------------------------------------------------


//3.Aşağıdakı arrayi sort edərək ən böyük rəqəmi çıxardın
// console.log(arr([1, 5, 8, 21, 4]))


var numArray = [1, 5, 8, 21, 4];
num=numArray.sort(function(a, b) {
  return a - b;
});

console.log(num[num.length - 1]);
