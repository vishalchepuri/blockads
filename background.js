// Event listener for intercepting and blocking ad-related network requests
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (isAdRequest(details)) {
        return { cancel: true };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  
  // Function to determine if a request is an ad
  function isAdRequest(details) {
    const adDomains = [
      "doubleclick.net",
      "googlesyndication.com",
      "adserver.com",
      "sm1.selectmedia.asia",
      "blob:https://www.javatpoint.com/"
      // Add more ad domain names here
    ];
  
    const url = new URL(details.url);
    const hostname = url.hostname;
  
    // Check if the hostname matches any of the known ad domains
    return adDomains.some(adDomain => hostname.includes(adDomain));
  }
  