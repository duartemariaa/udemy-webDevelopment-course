import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"


inquirer
.prompt([
    {
        message: "Type in your URL: ",
        name: "URL",
    },
])

.then((answers) => {
    const url = answers.URL;
    const qrSvg = qr.image(url);
    qrSvg.pipe(fs.createWriteStream("qr-img.png"));

    fs.writeFile("url.txt", url, (err) => {
        if(err) throw err;
        console.log("the file has been saved!")
    });
})

.catch((error) => {
    if(error.isTtyError){
        
    }else{

    }
});

