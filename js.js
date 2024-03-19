// count the biggest word



 const bigword = "The  big dog jump out of the wall"


let word =3
let newword = ""

 function wrd(wrds){
     wrds = wrds.split(" ")
    for(let i = 0 ;i< wrds.length;i++){
        if(wrds[i].length===word){
            newword += wrds[i]+ " "

        }
        return newword
    }
 }
 console.log(wrd(bigword))