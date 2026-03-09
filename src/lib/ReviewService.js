/**
 * ReviewService.js
 *
 * Modular service interacting with reviews.
 * Can be easily swapped with Google Reviews API or another backend.
 */

// Start with local default data fallback
import content from "./content.json";

// In a real scenario, this could be an API URL.
const API_ENDPOINT = null;

export const fetchReviews = async () => {
  if (API_ENDPOINT) {
    try {
      const response = await fetch(API_ENDPOINT);
      return await response.json();
    } catch (error) {
      console.error(
        "Failed to fetch external reviews, falling back to local.",
        error,
      );
    }
  }

  // Simulated network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return content.reviewsData;
};

export const postReview = async (review) => {
  if (API_ENDPOINT) {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      });
      return await response.json();
    } catch (error) {
      console.error("Failed to post external review.", error);
    }
  }

  // Simulated network delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Return a mocked success response
  return {
    success: true,
    review: {
      ...review,
      id: `r${Math.random().toString(36).substr(2, 9)}`,
      date: new Date().toISOString().split("T")[0],
    },
  };
};
