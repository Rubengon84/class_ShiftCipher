

class ShiftCipher {   // Create the class ShiftCipher
  constructor(shift) {
     this._shift = shift;
  }
  get shift() {       // Make a get for shift
    return this._shift;
  }

  encrypt(string) {

   let stringLowerCase = string.toLowerCase();   // Convert the string to lower case
   let str='';

    for (let i=0; i<stringLowerCase.length; i++) {
        
      let character = stringLowerCase.charCodeAt(i); // transform the character of the string in Utf-16
      
      if (character < 97 || character > 122) {  // The alphabet are between this two values (97-122)
      
        character = String.fromCharCode(character);  // transform Utf-16 code to letters
        str = str.concat('',character)
      
      }else{
    
        character = character + this.shift;   // Adding the extra number to change the code
     
        if(character > 122) {     // Check if the result is more than 122 so it will start at 97.
     
          let rest = character - 122; 
          character = 96 + rest; 
          character = String.fromCharCode(character);
          str = str.concat('',character)
     
        }else {
    
          character = String.fromCharCode(character);
          str = str.concat('',character)     
        }
      }
    }
   console.log(str.toUpperCase());
   return str.toUpperCase();
  }

  decrypt(string) {   //Is a copy of the first method only changing some values
   
    let stringLowerCase = string.toLowerCase();
    let str='';

    for (let i=0; i<stringLowerCase.length; i++) {
    
      let character = stringLowerCase.charCodeAt(i);
      
      if (character < 97 || character > 122) {

        character = String.fromCharCode(character); 
        str = str.concat('',character)
    
      }else{
    
        character = character - this.shift;   // Substract the extre number to the value of the character
        
        if(character < 97) {  // Check if the value is less than 97, so It will go to the end of the alphabet and start from there.
     
          let rest = 97 - character;
          character = 123 - rest; 
          character = String.fromCharCode(character);
          str = str.concat('',character)
     
        }else {
    
          character = String.fromCharCode(character);
          str = str.concat('',character)
        }
      }
    }
   console.log(str);
   return str;
  }

}


const cipher = new ShiftCipher(2);  // Examples
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'