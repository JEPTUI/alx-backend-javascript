export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("API response data");
      } else {
        reject("API request failed");
      }
    }, 2000);
  });
}
