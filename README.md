# Kartsy

<a name="readme-top"></a>

Check out a live version of Kartsy here:
[Kartsy][render-url]

[render-url]: https://kartsy.onrender.com/

Karsy is a clone of Etsy. You can post products to sell, giving them a name, price, description, and product image. You can also browse other product postings, leave reviews, and add items to your cart. You can search for products based on their descriptions and titles. At checkout, you are shown a summary of your purchase and the cart is cleared when you confirm that purchase. 

### Technologies Used
#### Languages:
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.com/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
#### Backend:
[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/en/2.2.x/)
[![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-CA4245?style=for-the-badge)](https://www.sqlalchemy.org/)
[![postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
#### Frontend:
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)



### Features and Screenshots
* Kartsy All Products page - You will be able to test the features without signing up by clicking on the "Demo User" button.
![All Products Page](https://github.com/alicas22/kartsy/blob/main/Kartsy%20-%20All%20Products.PNG?raw=true)

* Etsy All Products Page - Visual inspiration
![Etsy All Products Page](https://github.com/alicas22/kartsy/blob/main/etsy-allproducts.PNG?raw=true)

* Single Products Page - View product details, edit product, add review, edit review, delete review
![Groups Page](https://github.com/alicas22/kartsy/blob/main/kartsy-singleProduct.PNG?raw=true)

* Cart Page - View items added to your cart, change item quantities, choose a payment type, and checkout
![Cart Page](https://user-images.githubusercontent.com/114184847/225747073-79e07ed3-f5ed-4d59-b174-f892b507fb43.png)

* Etsy Cart Page - Visual inspiration
![Etsy Cart Page](https://user-images.githubusercontent.com/114184847/225747244-dacf6ce5-cea4-423e-8cb5-caf74bf0d758.png)






## Getting started
1. Clone this repository (only this branch)

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```
  
7. In a new terminal, navigate to the /react-app directory


8. Install NPM packages
   ```sh
   npm install
   ```
   
9. Start the frontend server
   ```sh
   npm start
   ```
   
8. Navigate to http://localhost:3000/ to begin using the application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- ROADMAP -->
## Roadmap

- [ ] Categories
  - [ ] Search by Category
  - [ ] Add Categories to All Products Page  
- [ ] Favorites
- [ ] Search Auto Complete
- [ ] 404 Page

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ### Contact Information -->


<!-- MARKDOWN LINKS & IMAGES -->
