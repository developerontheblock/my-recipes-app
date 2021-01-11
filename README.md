# my-recipes-app
My Recipes App


## Run Spring Boot application

```bash
mvn spring-boot:run
```


## Run Angular application

```bash
ng serve --port 8081
```

**Endpoints**

|Actions|HTTP Method|Request URL|
|---|----|-----------|
|Create new Recipe|`POST`|/api/recipes|
|Retrieve all Recipes|`GET`|/api/recipes|
|Update a Recipe by Id|`PUT`|/api/recipes/:id|
|Retrieve a Recipe by Id|`GET`|/api/recipes/:id
|Delete a Recipe by Id|`DELETE`|/api/recipes/:id|
|Delete all Recipes|`DELETE`|/api/recipes|
|Find all Recipes which title contains [**keyword**]|`GET`|/api/recipes/api/recipes?title=[keyword]|


**Auth Endpoints** /
Before running this endpoints please
run following MongoDB insert statements. Then check collections
```
db.roles.insertMany([
   { name: "ROLE_USER" },
   { name: "ROLE_MODERATOR" },
   { name: "ROLE_ADMIN" }
])
```

|Actions|HTTP Method|Request URL|
|---|----|-----------|
|Register|`POST`|/api/auth/signup|
|Access public resource|`GET`|/api/test/all|
|Access protected resource|`GET`|/api/test/user|
|Login|`POST`|/api/auth/signin|
|Access ROLE_USER resource|`GET`|/api/test/user (need the token from login response)| 
|Access ROLE_MODERATOR resource|`GET`|/api/test/mod|
|Access ROLE_ADMIN resource|`GET`|/api/test/admin|
