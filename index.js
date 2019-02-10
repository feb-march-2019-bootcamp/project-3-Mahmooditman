function palindrome(str) {
    str=str.toUpperCase().replace(/[\s+\W_/,.]/g,'');
        let l = 0;   //point to the first letter of string
        let h = str.length-1; //point to the last letter of string
        while (h > l) 
        { 
            if (str[l++] != str[h--])
            {  //in case of any difference occure it will return false
                return false;
            }     
                l++;                  // else it will compare the next letter and the last-1 letter an soon
                h--;     
        } 
      return true;
    }
console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("racecar"));
console.log(palindrome("RaceCar"));
console.log(palindrome("race CAR"));
console.log(palindrome("2A3*3a2"));
console.log(palindrome("2A3 3a2"));
console.log(palindrome("2_A3*3#A2"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));//1eyeforof1eye
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));


/*code By Mahmood Bashar*/