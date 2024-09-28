import fs from "fs/promises";
import fsn from "fs";

// console.log(fs);

let files = await fs.readdir(
	"/Complete-webdevolopment-bootcamp/Backend/sigma_web/video_93"
);
// let files = await fs.readdir(__dirname);

console.log(files);

for (const item of files) {
	console.log(item);
}
