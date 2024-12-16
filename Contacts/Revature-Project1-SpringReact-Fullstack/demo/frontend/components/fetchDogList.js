// fetchDogList.js
// export const fetchDogList = () => {
//     return fetch('http://localhost:8080/dogs') // Backend API endpoint
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             return data; // Return the JSON data (dog list)
//         })
//         .catch((error) => {
//             console.error('Error fetching dog list:', error);
//             return []; // Return an empty array as a fallback
//         });
// };
