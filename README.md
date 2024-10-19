# ProShop eCommerce Platform (v2)

Live Link: https://mern-proshop-1-ce3l.onrender.com/

> eCommerce platform built with the MERN stack & Redux.

![Screenshot 2024-10-19 185813](https://github.com/user-attachments/assets/7bd1f995-0527-4465-b2ed-45d45b6e4d65)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

john@email.com (Customer)
123456

jane@email.com (Customer)
123456
```

---


![Screenshot 2024-10-19 185845](https://github.com/user-attachments/assets/59dd7ae1-b6f6-495b-9d35-ae5890bb7a60)
![Screenshot 2024-10-19 185840](https://github.com/user-attachments/assets/e4df82ee-5a17-473d-97f6-76752d27a03e)
![Screenshot 2024-10-19 185834](https://github.com/user-attachments/assets/a9360782-27f3-4366-a5f4-1566eea4e931)
![Screenshot 2024-10-19 185829](https://github.com/user-attachments/assets/bf499bfe-3427-4b77-8187-fa9900963d99)
![Screenshot 2024-10-19 185823](https://github.com/user-attachments/assets/f3d1e270-1fd1-44ae-b431-0323afaaf057)
![Screenshot 2024-10-19 185853](https://github.com/user-attachments/assets/f2ee79d3-9202-488c-8279-ccbdce20f2b0)
![Screenshot 2024-10-19 185741](https://github.com/user-attachments/assets/01ea781a-b123-4c08-8600-3085eb29f49e)
