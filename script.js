// script.js
function generateQRCode() {
  const inputText = document.getElementById("inputText").value;
  const qrCodeOutput = document.getElementById("qrCodeOutput");

  if (inputText.trim() === "") {
    alert("Please enter some text or a URL.");
    return;
  }

  qrCodeOutput.innerHTML = ""; // Clear any previous QR code
  
  QRCode.toCanvas(qrCodeOutput, inputText, function (error) {
    if (error) {
      console.error(error);
      alert("Something went wrong while generating the QR code.");
    }
  });
}
