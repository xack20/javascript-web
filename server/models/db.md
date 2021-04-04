## Create User
```sql
Create Table users(
  id serial not null,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255),
  password VARCHAR(255),
  role VARCHAR(255),
  status VARCHAR(255),
  report_to VARCHAR(255),

  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  CONSTRAINT users_pkey PRIMARY KEY (id));
```



## Create employee table
```sql
Create Table employees(
  id serial not null,
	department_id integer,
	designation_id integer,
	office_id integer,
	job_id integer,
  -- salary_details integer,
	job_type VARCHAR (255),
	grade VARCHAR (255),
  report_to integer,
	
	photo VARCHAR (255),
	name VARCHAR (255),
	father_name VARCHAR (255),
	mother_name VARCHAR (255),
	dob date,
	gender VARCHAR (255),
	marital_status VARCHAR (255),
	nid VARCHAR (255),
	religion VARCHAR (255),
	nationality VARCHAR (255),
	email VARCHAR (255),
	phone VARCHAR (255),
	education VARCHAR (255),
	-- present_address VARCHAR (255),
	present_village VARCHAR (255),
	present_post VARCHAR (255),
	present_upazila VARCHAR (255),
	prenset_district  VARCHAR (255),
	-- permanent_address VARCHAR (255),
	permanent_village VARCHAR (255),
	permanent_post VARCHAR (255),
	permanent_upazila VARCHAR (255),
	permanent_district  VARCHAR (255),
	
	joining_date date,
	resigning_date date,
	retiring_date date,
	suspended_date date,
	
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  CONSTRAINT employees_pkey PRIMARY KEY (id));
```

## Employee Salary Details
```sql
Create Table salary_details(
  employee_id integer not null,
	salary_basic numeric,
	rate_type VARCHAR (255),
	pay_period VARCHAR (255),
	housing numeric,
	medical numeric,
	travel numeric,
	festival_bonus numeric,
	provident_fund numeric,
	
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  CONSTRAINT salary_details_pkey PRIMARY KEY (employee_id));
  ```

## Create Department
```sql
Create Table departments(
  id serial not null,
  name VARCHAR(255),
  code VARCHAR(255),
  description text,

  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  CONSTRAINT departments_pkey PRIMARY KEY (id));
```

## Create Designation
```sql
Create Table designations(
  id serial not null,
  name VARCHAR(255),
  description text,

  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  CONSTRAINT designations_pkey PRIMARY KEY (id));
```

## Create Office
```sql
Create Table offices(
  id serial not null,
  name VARCHAR(255),
  address VARCHAR(255),
  description text,

  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  CONSTRAINT offices_pkey PRIMARY KEY (id));
```

## Create Job
```sql
Create Table jobs(
  id serial not null,
  title VARCHAR(255),
  description text,

  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  CONSTRAINT jobs_pkey PRIMARY KEY (id));
```