import axios from "axios";
import { BaseUrl5 } from "../../Config";
import { ApiUrl } from "../../Config/APIURL";

// Define the Base URL (replace with your actual URL)
const BaseUrl = "https://api.nstack.in";  // Example: "https://api.example.com"

// API endpoint path
const endpoint = "/v1/todos"; // Replace with the actual endpoint

// Function to fetch data
export const getData = async () => {
  try {
    // Make GET request to the API
    const response = await axios.get(`${BaseUrl5}${ApiUrl.newLogin}`, {
      headers: {
        "Accept": "application/json", // Ensure the response is in JSON format
      },
    });

    // Handle 200 status code (success)
    if (response.status === 200) {
      console.log("Data fetched successfully:", response.data);
      return response.data; // Return the data to be used
    }

  } catch (error) {
    // Handle different error cases
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error("Client side error: There was an issue with the request.");
          break;
        case 404:
          console.error("Error: The record does not exist or has been deleted.");
          break;
        case 429:
          console.error("Too many requests. Please wait before sending more.");
          break;
        default:
          console.error("An error occurred:", error.response.status);
      }
    } else {
      console.error("Network or other error:", error.message);
    }
  }
};

// Example of how to use the function
const fetchData = async () => {
  const data = await getData();
  if (data) {
    // Log the specific fields based on the schema
    console.log("Record ID:", data._id);
    console.log("Created At:", data.created_at);
    console.log("Updated At:", data.updated_at);
    console.log("Title:", data.title);
    console.log("Description:", data.description);
    console.log("Is Completed:", data.is_completed);
  }
};

// Call the function to fetch data
fetchData();

