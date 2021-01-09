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
|create new Recipe|`POST`|/api/recipes|
|retrieve all Recipes|`GET`|/api/recipes|
|update a Recipe by Id|`PUT`|/api/recipes/:id|
|retrieve a Recipe by Id|`GET`|/api/recipes/:id
|delete a Recipe by Id|`DELETE`|/api/recipes/:id|
|delete all Recipes|`DELETE`|/api/recipes|
|find all Recipes which title contains [**keyword**]|`GET`|/api/recipes/api/tutorials?title=[keyword]|
