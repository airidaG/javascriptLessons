// ## Write a function "makeBanner" which is given some text and returns a banner with a border surrounding the text. The border should stretch to the length of the text.

// - Example:
//   - makeBanner('Welcome to DigitalCrafts')
//     `****************************`
//     `* Welcome to DigitalCrafts *`
//     `****************************`


"use strict"


const  bannerText = prompt("Enter banner text:");

const makeBanner = (bannerText) => {  
 const bannerBorder = "*".repeat(bannerText.length + 4);

 const bannerBody = `${bannerBorder}\n* ${bannerText} *\n${bannerBorder}`;

    return bannerBody;
};

console.log(makeBanner(bannerText));
