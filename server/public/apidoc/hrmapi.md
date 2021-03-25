
# HRM APIs



## Indices

* [Department](#department)

  * [Add new Department](#1-add-new-department)
  * [Delete Department](#2-delete-department)
  * [Get all departments](#3-get-all-departments)
  * [Get single Department](#4-get-single-department)
  * [Update a Department](#5-update-a-department)

* [Designation](#designation)

  * [Add new designation](#1-add-new-designation)
  * [Delete designation](#2-delete-designation)
  * [Get Single designation](#3-get-single-designation)
  * [Get all designations](#4-get-all-designations)
  * [Update designation](#5-update-designation)

* [Job](#job)

  * [Add new job](#1-add-new-job)
  * [Delete  job](#2-delete--job)
  * [Get all Jobs](#3-get-all-jobs)
  * [Get single  job](#4-get-single--job)
  * [Update job](#5-update-job)

* [Office](#office)

  * [Add New Office](#1-add-new-office)
  * [Delete an office](#2-delete-an-office)
  * [Get al thel offices](#3-get-al-thel-offices)
  * [Get single office](#4-get-single-office)
  * [Update an office](#5-update-an-office)


--------


## Department



### 1. Add new Department


```js
{
    name: "Department name is required",
    code: "Code of the dept. (optional)",
    description: "Description about department (optional)"
}
```


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{url}}/api/v1/departments
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "name": "Software Development"
}
```



### 2. Delete Department



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{url}}/api/v1/departments/2
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "code": "3236"
}
```



### 3. Get all departments



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{url}}/api/v1/departments
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "address": "IT Park"
}
```



### 4. Get single Department



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{url}}/api/v1/departments/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "code": "3236"
}
```



### 5. Update a Department



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{url}}/api/v1/departments/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "code": "3236"
}
```



## Designation



### 1. Add new designation


```js
{
    name: "required",
    description: "optional"
}
```


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{url}}/api/v1/designations
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "name": "Software Engineer"
}
```



### 2. Delete designation



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{url}}/api/v1/designations/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "name": "Software Developer"
}
```



### 3. Get Single designation



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{url}}/api/v1/designations/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "name": "Software Developer"
}
```



### 4. Get all designations



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{url}}/api/v1/designations
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "code": "3236"
}
```



### 5. Update designation



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{url}}/api/v1/designations/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "name": "Software Developer"
}
```



## Job



### 1. Add new job


```js
{
    title: "required",
    description: "optional"
}
```


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{url}}/api/v1/jobs
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "title": "Consultancy"
}
```



### 2. Delete  job



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{url}}/api/v1/jobs/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "title": "Software Development"
}
```



### 3. Get all Jobs



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{url}}/api/v1/jobs
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "name": "Software Developer"
}
```



### 4. Get single  job



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{url}}/api/v1/jobs/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "title": "Software Development"
}
```



### 5. Update job



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{url}}/api/v1/jobs/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "title": "Software Development"
}
```



## Office



### 1. Add New Office


```js
{
    name: "Office name is required",
    address: "Office address (optional)",
    description: "Some description about the office (optional)"
}
```


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:3900/api/v1/offices
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "name": "Semicolon"
}
```



### 2. Delete an office



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{url}}/api/v1/offices/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "address": "IT Park"
}
```



### 3. Get al thel offices



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{url}}/api/v1/offices
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "name": "Semicolon"
}
```



### 4. Get single office


Get an office by id.


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{url}}/api/v1/offices/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "name": "Semicolon"
}
```



### 5. Update an office



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{url}}/api/v1/offices/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjMyYThjOTY0MjFmMjc3NzdmYWU5OSIsImVtYWlsIjoiYmlwcm8xMGNzZUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MzkzMDQ5NSwiZXhwIjoxNTk2NTIyNDk1fQ.JEk2QZQgKtLT9a68gjOfqPmdoBNL_wPBXEkMgU8Tmhk |  |



***Body:***

```js        
{
    "address": "IT Park"
}
```



---
[Back to top](#hrm-apis)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-07-15 16:55:41 by [docgen](https://github.com/thedevsaddam/docgen)
