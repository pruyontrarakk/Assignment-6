/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


// 1
import input from '@inquirer/input';

const url = await input({ message: 'Enter URL: ' });


// 2
import { image } from 'qr-image';
import { createWriteStream } from 'fs';

const qrCode = image(url, { type: 'png' });
qrCode.pipe(createWriteStream('qrcode.png'));


// 3
import { writeFile } from 'fs';

writeFile('url.txt', url, (err) => {
  if (err) throw err;
  console.log('URL saved to url.txt');
});



