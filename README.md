# email-presence-validator

`email-presence-validator` is a JavaScript package that checks if an email exists for email verification purposes without sending an OTP. It allows developers to validate email presence efficiently.

## Installation

You can install this package using npm:

```bash
npm install email-presence-validator




Usage
Here’s an example of how to use email-presence-validator:


const { emailValidation } = require("email-presence-validator");

emailValidation("mukul.singh_cs21@gla.ac.in")
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error("Error:", error);
  });


Sample Output
A successful response might look like this:

json
Copy code
{
  "invalid_input": false,
  "input": "mukul.singh_cs21@gla.ac.in",
  "domain": "gla.ac.in",
  "status": 550,
  "reason": "The email account that you tried to reach does not exist."
}
Error Handling
If there is an error during the validation process, it will be logged or returned in the catch block.

Features
Email Presence Check: Verify if an email exists without sending an OTP.
Lightweight: Simple and easy to integrate into your project.
Asynchronous Support: Uses promises to handle asynchronous operations.
Detailed Responses: Provides detailed reasons for the email's validity or invalidity.
License
This project is licensed under the MIT License. Feel free to use it in your personal or commercial projects.

Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open a pull request or an issue on the GitHub repository.