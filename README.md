# Module 13 Weekly Challenge - E-Commerce Back-End [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

E-Commerce has rapidly grown to one of the world's largest industries over the last decade or so, and understandably so; it's simply, easy-to-understand, reliable, and provides users with access to a catalog of products unmatched by even the largest physical stores. However, for these platforms to flourish, they have to be built upon a robust back-end to manage everything. To that end, this application can serve as a baseline for an e-commerce site's back-end database.

## Installation

Download the repository files to your computer, and extract the zipped files to a dedicated folder. Navigate to the folder, rename the ".env.EXAMPLE" file to ".env", and fill in the empty strings with the appropriate details. DB_USER should contain your MySQL username, DB_PASSWORD your password, and DB_NAME the name of the database to use - in this case, it is already filled in for you; "ecommerce_db".

## Requirements

- Node; https://nodejs.org/en
- MySQL; https://www.mysql.com/

## Usage

Navigate to the repository a git bash shell (or equivalent), and type "npm install" to install the application's dependencies. Next, initiate the MySQL CLI & run the command "source ./db/schema.sql" to initialize the database. Finally, return to the shell and type "node server.js" to start up the application. If you want the database to be seeded with some sample information, then you can also type "npm run seed" before running the server.js file.

Next, open a program such as Insomnia to interact with the server. The PORT is set to default to 3001, so all requests will be made to "http://localhost:3001/". From here, all routes for interacting with the backend involve "/api", followed by the model you want to interact with; categories, products, and tags. If you want to make a request involving categories, that will go to "http://localhost:3001/api/categories/", "http://localhost:3001/api/products/" for products, and "http://localhost:3001/api/tags/". If you want to retrieve a list of all categories, tags, or products / add a new entry to one of them, make the appropriate GET / POST request to those addresses. If you want to retrieve a single entry, or update / delete an entry add the specific ID of the category / product / tag you want to refer to, e.g. "http://localhost:3001/api/categories/4".

## Demo

See a video demonstrating the application's functionality [here](https://drive.google.com/file/d/1fEBOiavWjeY6rKmWkxgM7BQAxiEH9vX0/view?usp=sharing)

## Credits

MIT License Badge (./README.md, line 1);
https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

## License

Operates under a standard MIT license. For more information, refer to the LICENSE file in the repository, or visit the following website; https://opensource.org/licenses/MIT.