# Getting Started

This Project is a demo React JS cart built on React.js@^17.0.2. with test TEST API's on NODE.js which is set to accept request from all origins.

**Demo preview** https://aliawais0007.github.io/react-cart/
**Note** github-pages does not work good with react router refreshing page manually could cause 404.

## Start App

1. Clone Repositry
2. run **npm i**
3. open **postcss.config.js** file in main directory

- ctrl click postcss-pxtorem
- In defaults object change proplist as -> **propList: ["*"]**

4. run **npm start** to start project locally

### Features

In this app you will have following features,

1. View Products page.
2. Disabled products if there is no stock left.
3. Add to Cart option.
4. Add cart items to Localstorage for saving current state.
5. Context API to share current Sart Items and Cart Item count accross all components.
6. Basic JS search option.
7. View Cart Items page.
8. Clear cart Feature.
9. Increment Quantity.
10. Decrement Quantity.
11. Total price Calculation.
12. Place order.
13. Order placed Success page.
14. **Responsive layout** for any screen 4k,8k,10k

#### Use Cases handled

In this app following use cases are being handled.

1. can not order more then available stock.
2. Order now button action change based on cart length.
3. On decrement quantity Remove from cart if only one item is available.

##### Plugin used for optimization and beautification

1. **scss** preprocessor
2. **Postcss** for ->

- **Pxtorem** for responsive layout.
- **autoprefix** for browser compatibility.

3. **React-toastify** for error and info messages.
4. **React Router** for routing.

###### Directories and component structure

1. components folder which includes directory for each page.
2. In **src** directory **utils.js** for reuseable helper functions.
3. In main directory **postcss.config.js** for postcss modules.
4. css file being used is **custom.css** in **src** directory which is generated from **App.scss**.
5. API routes are configured in **consts.js** in src directory.
6. Context API is located in **components/context** directory
