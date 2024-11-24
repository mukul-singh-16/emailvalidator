async function emailValidation(email) {
    try {
      const response = await fetch("https://www.site24x7.com/tools/email-validator", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `emails=${encodeURIComponent(email)}`,
        method: "POST",
      });
  
      // Log the response status and handle it
      if (response.ok) {
        let result = await response.json(); // Ensure we parse the response as JSON
        result = await cleanResponse(result);
        // console.log("Response:", result);
        return result;
      } else {
        // console.error(`Error: ${response.status} ${response.statusText}`);
        return `Error: ${response.status} ${response.statusText}`;
      }
    } catch (error) {
    //   console.error("Fetch error:", error);
      return `Fetch error: ${error.message}`;
    }
  }
  
  function cleanResponse(rawResponse) {
    try {
      // Check for necessary fields in the response
      if (!rawResponse.input || !Array.isArray(rawResponse.input) || rawResponse.input.length === 0) {
        throw new Error("Invalid input array in response");
      }
      if (!rawResponse.domainMap || typeof rawResponse.domainMap !== "object") {
        throw new Error("Invalid domainMap in response");
      }
      if (!rawResponse.results || typeof rawResponse.results !== "object") {
        throw new Error("Invalid results in response");
      }
  
      const email = rawResponse.input[0];
      const domain = Object.keys(rawResponse.domainMap)[0];
  
      // Check if domain and email are present in the results
      if (!rawResponse.results[domain] || !rawResponse.results[domain][email]) {
        throw new Error("Invalid domain or email structure in results");
      }
  
      const { status, reason } = rawResponse.results[domain][email];
  
      return {
        invalid_input: rawResponse.invalid_input,
        input: email,
        domain: domain,
        status: status,
        reason: reason.replace(/\r\n/g, " ").trim(),
      };
    } catch (error) {
      console.error("Error while cleaning response:", error.message);
      return { error: error.message };  // Return an error message if the cleaning fails
    }
  }
  
  // Export the emailValidation function for CommonJS
  module.exports = { emailValidation };
  
  // Test the function with a sample email
  // emailValidation("mukul.singh_cs21@gla.ac.in");
  