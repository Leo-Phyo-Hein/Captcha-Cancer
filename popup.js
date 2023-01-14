// Function to create and display the captcha popup
function showCaptchaPopup() {

    // Create the popup element
    var popup = document.createElement("div");
    popup.innerHTML = "Please enter the captcha: <input type='text' id='captcha-input'/>";
    popup.style.backgroundColor = "red";
    popup.style.padding = "20px";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.zIndex = "1000";

    // Add the popup to the page
    document.body.appendChild(popup);
    disableScroll;

    // Captcha validation
    // Generate random string of characters then validate
    if (captcha-input == 'hello') {
        popup.style.backgroundColor = 'green';
    }
    
}

// Show the captcha popup every 5 seconds
// Will refresh and clear input field if never type quickly enough
setInterval(showCaptchaPopup, 5000);