# References
### `My Github Backend Sample`
```
https://github.com/haqiramadhani/backend-point-of-sales/
```
### `Tutorial Express + Mongoose`
```
https://medium.com/@ranggaantok/membangun-rest-api-sederhana-dengan-expressjs-mongodb-9cf96cf1e791
```
### `Mongoose documentation`
```
https://mongoosejs.com/docs/guide.html
```
# API Documentation
### `[POST] /api/auth/register`
```
body: {
  first_name: String,
  last_name: String,
  username: String,
  email: String,
  phone: String,
  password: String
}
```
### `[POST] /api/auth/login`
```
body: {
  email: String,
  password: String
}
```