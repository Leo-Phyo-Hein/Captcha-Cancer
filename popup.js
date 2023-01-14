var randomString = 0;
var divCreated = false;
// Function to create and display the captcha popup

function showCaptchaPopup() {

    // Generate a random string of alphabets and numbers
    old = randomString;
    randomString = Math.random().toString(36).slice(-8);
    
    var captcha = `Please enter the captcha ${randomString}: <input type='text' id=captcha-input>
    <input type="submit" value="Submit" />`;

  vert = Math.floor(Math.random() * 100);;
  side = Math.floor(Math.random() * 100);;

  // Create the popup element
  var popup = document.createElement("div");
  popup.innerHTML = captcha;
  popup.setAttribute("id", "captcha");
  popup.style.backgroundColor = "red";
  popup.style.padding = "20px";
  popup.style.position = "fixed";
  popup.style.top = vert + "%";
  popup.style.left = side + "%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.zIndex = "1000";

  // Add the popup to the page
  document.body.append(popup);
  userInput = document.getElementById("captcha-input");
  if (divCreated) {
    if (userInput.value === old) {
        alert("CAPTCHA Passed!");
        document.getElementById("captcha").remove();
    } else {
        alert("Oof...Are you ready for a NEW CAPTCHA?");
    }
  }
  divCreated = true;
 
}

// Show the captcha popup every 6 seconds
// Will refresh and clear input field if never type quickly enough
showCaptchaPopup()
setInterval(showCaptchaPopup, 6000);

