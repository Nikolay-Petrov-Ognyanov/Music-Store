# Music Store Web Application

The **Music Store Web Application** is a React-based online store where users can browse and explore various musical instruments. The application uses React Router for navigation, Redux for state management and custom styling with CSS modules. Users can view different instrument categories, apply filters and sort results. Additionally, a shopping cart modal provides feedback when adding items to the cart.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Components](#components)
    1. [Header](#header-component)
    2. [Footer](#footer-component)
    3. [About](#about-component)
    4. [Card](#card-component)
    5. [Catalog](#catalog-component)
3. [Usage](#usage)

## Getting Started

To run the Music Store Web Application locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/Nikolay-Petrov-Ognyanov/Music-Store.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Music-Store
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

The application will be accessible at `http://localhost:3000`.

## Components

The application is composed of several key components that contribute to its functionality.

### Header Component

The `Header` component displays the application's logo and navigation links, allowing users to explore different instrument categories.

### Footer Component

The `Footer` component displays navigation links to different "About" sections and includes logic to handle active link highlighting and scrolling to the top of the page.

### About Component

The `About` component dynamically renders different pages within the "About" section of the application based on the provided route parameter.

### Card Component

The `Card` component displays information about a musical instrument, including its image, name, ratings, description and price. Users can add items to the shopping cart using the "Add to Cart" button.

### Catalog Component

The `Catalog` component represents the main functionality of the application. It allows users to browse different instrument categories, apply filters by price, manufacturer and number of keys and sort instruments based on different criteria. The component dynamically loads and displays instrument cards and includes a load more button for additional results. A shopping cart modal is also displayed when users add items to the cart.

## Usage

1. **Browsing Instruments**: Open the application and explore various instrument categories by clicking on the navigation links. Each category displays instrument cards with details.

2. **Filters and Sorting**: Use the filters and sorting options to refine your search. You can filter by price range, manufacturer and number of keys. Choose a sorting criterion to change the order of displayed instruments.

3. **Load More**: Click the "Load More" button to load additional instrument cards, allowing you to view more products.

4. **Adding to Cart**: Click the "Add to Cart" button on an instrument card to add it to your shopping cart. A modal will appear confirming the item's addition to the cart.

5. **Clearing Filters**: To reset filters, click the "Clear all Filters" button in the left sidebar.