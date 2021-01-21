const readLineSync = require('readline-sync');
console.log("Welcome to RGB Hex Convertor Utility App\n");
function componentToHex(c) {
  
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(red,green,blue){

  const redHex = componentToHex(red);
  const greenHex = componentToHex(green);
  const blueHex = componentToHex(blue);


   console.log(`The converted hex value is :#${redHex}${greenHex}${blueHex}\n`);

}
function hexToRgb(hexValue){

  let hex = hexValue.substring(1);
  //const intValue = parseInt(hex, 16);
  console.log(`${intValue}\n`);
  const r = (intValue >> 16) & 255;
  const g = (intValue>> 8) & 255;
  const b = intValue & 255;

  console.log(`Red : ${r} Green : ${g} Blue : ${b}\n`);


}

function rgbHexConvertor(){
  
  let selectedOption = parseInt(readLineSync.question("Option 0 to leave the RGB HEX Utility Application\nOption 1: To convert RGB to Hex\nOption 2: To convert Hex to RGB\nPlease provide your input\n"));

  console.log(`Hi, you have selected option: ${selectedOption}\n`);

  if(selectedOption==0){
     return selectedOption;
  }

  while(selectedOption!=0){
    switch(selectedOption){
      case 1:
      const red = parseInt(readLineSync.question("Values for R, G and B should be from 0 to 255 only!\nPlease enter the value of red\n"));
      const green = parseInt(readLineSync.question("Please enter the value of green\n"));
      const blue = parseInt(readLineSync.question("Please enter the value of blue\n"));
      rgbToHex(red,green,blue);
      break;
      case 2:
      const hexval = readLineSync.question("Please enter the hexadecimal value\n");
      hexToRgb(hexval);
      break;
      default:
      console.log("Invalid Option\n");
      break;
    }

  selectedOption = parseInt(readLineSync.question("Please provide your input\n"));
  console.log(`Hi, you have selected option: ${selectedOption}\n`);


  }


}

const val = rgbHexConvertor();
console.log("Thank you for using Stirng Hashing Utility App\n");