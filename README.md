# Kartsy

<a name="readme-top"></a>

Check out a live version of Kartsy here:
[Kartsy][render-url]

[render-url]: https://kartsy.onrender.com/

Karsy is a clone of Etsy. It allows you to post and browse products, leave reviews, and add items to your cart.

### Technologies Used
* React
* Redux
* Javascript
* Python
* PostgreSQL
* Render
* Flask
* SqlAlchemy
* WtForms


### Features and Screenshots
* Kartsy All Products page - You will be able to test the features without signing up by clicking on the "Demo User" button.
![All Products Page](https://github.com/alicas22/kartsy/blob/main/kartsy-allproducts.PNG?raw=true)

* Etsy All Products Page - Visual inspiration
![Etsy All Products Page](https://github.com/alicas22/kartsy/blob/main/etsy-allproducts.PNG?raw=true)

* Single Products Page - View product details, edit product, add review, edit review, delete review
![Groups Page](https://github.com/alicas22/kartsy/blob/main/kartsy-singleProduct.PNG?raw=true)




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

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

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
