import axios from 'axios';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const url = 'https://raw.githubusercontent.com/pablokoll/cv/cv/english/cv.pdf';

const localFilePath = path.resolve(dirname, './public/pablo koll cv.pdf');
console.log('Local file path: ', localFilePath);

async function downloadPDF() {
    try {
        const response = await axios({
            method: 'get',
            url: url,
            responseType: 'stream',
        });

        response.data.pipe(fs.createWriteStream(localFilePath));

        return new Promise((resolve, reject) => {
            response.data.on('end', () => {
                resolve();
            });

            response.data.on('error', (err) => {
                reject(err);
            });
        });
    } catch (error) {
        console.error('Failed to download file:', error);
    }
}

downloadPDF()
    .then(() => {
        console.log('PDF downloaded successfully');
    })
    .catch((err) => {
        console.error('Error downloading PDF:', err);
    });
