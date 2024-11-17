function getQueryParam(paramName) {
    // Get the query string from the current URL
    const queryString = window.location.search;
    
    // Create a URLSearchParams object
    const urlParams = new URLSearchParams(queryString);
    
    // Get the value of the specific parameter
    return urlParams.get(paramName);
}

try {
    const code = getQueryParam("code");
    const tokenElement = document.getElementById("token");
    tokenElement.innerHTML = code;
} catch (error) {
    
}

