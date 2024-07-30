const info = document.querySelector("#info");
const btn = document.querySelector("#btn");
const qrImage = document.querySelector("#qr-img");
const downloadLink = document.querySelector("#download-link");

btn.addEventListener('click', () => {
    const infoValue = info.value;
    console.log(infoValue);
    if (!infoValue) {
        alert("Vous devez entrer une information");
        qrImage.style.display = "none";
        downloadLink.style.display = "none";
    } else {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${infoValue}`;
        qrImage.src = url;
        qrImage.style.display = "block";
        qrImage.style.margin = "auto";
        
       
        downloadLink.href = url;
        downloadLink.style.display = "block";
        
        info.value = "";
    }
});
