var randomString = 0;
// Function to create and display the captcha popup
function getcaptchaInput() {
    userInput = document.getElementById("captcha-input");

    if (userInput.value === randomString) {
        alert("CAPTCHA passed!");
    } else {
        alert("CAPTCHA failed. Please try again.");
    };
}

function showCaptchaPopup() {

    // Generate a random string of alphabets and numbers
    old = randomString;
    randomString = Math.random().toString(36).slice(-8);
    

    // Create the popup element
    var popup = document.createElement("div");
    popup.innerHTML = `Please enter the captcha ${randomString}: ` + "<input type='text' id=captcha-input>"
    popup.setAttribute("id", "captcha");
    popup.style.backgroundColor = "red";
    popup.style.padding = "20px";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.zIndex = "1000";
    
    // Add the popup to the page
    document.body.append(popup);
    userInput = document.getElementById("captcha-input");

    if (userInput.value === old) {
        alert("CAPTCHA passed!");
        document.getElementById("captcha").remove();
        
    } else {
        alert(userInput.value);
    };
    
}

// Show the captcha popup every 10 seconds
// Will refresh and clear input field if never type quickly enough
showCaptchaPopup()
setInterval(showCaptchaPopup, 10000);

