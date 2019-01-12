# Team Manager API

## Authentication

### Register

#### Request

- Name of User :String

- Email :String
  
- Password :String
  
#### Response

- auth :Bool, Auth Status
  
- token :String, JWT

- userId :String, The Users ID

### Login

#### Request

- Email :String
  
- Password :String

#### Response

- auth :Bool, Auth Status
  
- token :String, JWT

- userId :String, The Users ID
  