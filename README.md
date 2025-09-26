# E-Shop

A simple e-commerce application built with React, Express.

## 🚀 Live Demo

👉 [Click here to view the live app](https://e-shop-bunny.vercel.app/)

## Key Features & Benefits

-   **Product Listing:** Fetches and displays a list of available products.
-   **Order Creation:** Allows users to create orders by providing their details and items.
-   **Simple API:** Uses a RESTful API built with Express.js.
-   **Frontend Included:** Basic frontend for testing.

## Prerequisites & Dependencies

-   **Node.js:** (Version 18 or higher recommended)
-   **npm** (Node Package Manager) or **yarn**

## Installation & Setup Instructions

### Backend

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd E-Shop/Backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Create a `.env` file:**

    Create a `.env` file in the `Backend/` directory. Add the following environment variable:

    ```
    PORT=8000
    CLIENT_URL=http://localhost:5173 # or your frontend URL
    ```

4.  **Run the backend server:**

    ```bash
    npm run dev # or npm start
    # or
    yarn dev # or yarn start
    ```

    The server will start at `http://localhost:8000` (or the port specified in your `.env` file).

### Frontend

1.  **Navigate to the Frontend directory:**

    ```bash
    cd ../Frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the frontend:**

    ```bash
    # The frontend is likely configured for a specific development server (e.g., Vite, Create React App).
    # Consult the frontend's package.json for available scripts. For example:

    npm run dev
    # or
    yarn dev

    # This typically starts the frontend development server on a specific port,
    # such as http://localhost:5173.  Refer to the frontend documentation or
    # console output for the exact URL.
    ```

## Usage Examples & API Documentation

### API Endpoints

#### Products

-   **GET `/api/products`**

    -   Returns a list of all products.
    -   Example Response:

        ```json
        {
        	"success": true,
        	"data": [
        		{
        			"id": 1,
        			"name": "Product 1",
        			"price": 20
        		},
        		{
        			"id": 2,
        			"name": "Product 2",
        			"price": 30
        		}
        	],
        	"message": "Products fetched successfully"
        }
        ```

#### Orders

-   **POST `/api/orders`**

    -   Creates a new order.
    -   Request Body:

        ```json
        {
        	"firstName": "John",
        	"lastName": "Doe",
        	"address": "123 Main St",
        	"items": [
        		{
        			"id": 1,
        			"quantity": 2
        		},
        		{
        			"id": 2,
        			"quantity": 1
        		}
        	]
        }
        ```

    -   Successful Response (200 OK):
        ```json
        {
        	"success": true,
        	"message": "Order created successfully!"
        }
        ```
    -   Error Response (400 Bad Request):
        ```json
        {
        	"success": false,
        	"message": "First name, last name, and address are required"
        }
        ```
        or
        ```json
        {
        	"success": false,
        	"message": "No items in the order"
        }
        ```

### Example Frontend Usage (Conceptual)

This is a conceptual example; actual implementation will depend on the frontend framework.

```javascript
// Example using fetch API
fetch("/api/products")
	.then((response) => response.json())
	.then((data) => {
		if (data.success) {
			// Display products in the UI
			console.log(data.data);
		} else {
			console.error(data.message);
		}
	});

// Example of creating an order (simplified)
const orderData = {
	firstName: "Test",
	lastName: "User",
	address: "Test Address",
	items: [{ id: 1, quantity: 1 }],
};

fetch("/api/orders", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(orderData),
})
	.then((response) => response.json())
	.then((data) => {
		if (data.success) {
			console.log("Order created:", data.message);
		} else {
			console.error("Error creating order:", data.message);
		}
	});
```

## Configuration Options

The following environment variables can be configured:

-   `PORT`: The port number on which the backend server will run. Defaults to `8000`.
-   `CLIENT_URL`: The URL of the frontend application. This is used for CORS configuration. Defaults to `http://localhost:5173`.

These variables can be set in the `.env` file.

## Acknowledgments

None.
