CREATE TABLE IF NOT EXISTS "users" (
"id" serial NOT NULL PRIMARY KEY,
"first_name" varchar(25) NOT NULL,
"last_name" varchar(25) NULL,
"email" varchar(100) UNIQUE NOT NULL,
"password" varchar(300) NOT NULL,
"role" varchar(10) NOT NULL,
"is_active" BOOLEAN DEFAULT TRUE,
"created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
"updated_at" TIMESTAMP
);
CREATE TABLE IF NOT EXISTS "roles" (
"name" varchar (25) NOT NULL,
"description" varchar(100) NULL    
);

CREATE TABLE IF NOT EXISTS "user_roles" (
"user_id" integer  NOT NULL,
"role_id" integer  NOT NULL    
);
