                                            Namh Siddham

# Rest Api development in Typescript  using in memory datastore(Array)

## Interface

-{id,name,description,category}


## Datastore
- getDataStore()  to store the data
-create the function above and import inside product controller for api endpoints


# Product API endpoints

## POST/productroutes
-create a document inside im memory data store(array) with required fields
-Return an HTTP status 201 if  document successfully .
-Endpoint:localhost:3000/productroutes

## GET/getallproducts
-As soon as the endpoint is called returns all the documents present in the memory(array)
-Endpoint:localhost:3000/productroutes/getallproducts

## GET/getproductbyid
-returns the documnet of a particular id present in that array.
-Endpoint:localhost:3000/productroutes/getproductbyid/:productid

## PUT/updateproductbyid
-updates a particular document in the datastore by a particluar id given in params
-Endpoint:localhost:3000/productroutes/updateproductbyid

## DELETE/deleteproductid
-deletes a particular document in the databse by a particular id given params.
-Endpoint:localhost:3000/productroutes/deleteproductid/:productid


# Middleware Implementation
- A middleware will be created inside middleware file of middleware folder
- Inside the middlware file a function file be created that will console.log 
  the timestamp,method and url 
- This function can be used as a global midlleware which will be declared in app.ts


# Unit testing using Jest
- create a seperate folder for Jest and a seperate file for unit testing of api endpoints in product controllers.
- install the jest library.
- import the apis from a particular controller that we you to test.
- run npm test 


# Procedure to clone the Project
- git clone
- npm i