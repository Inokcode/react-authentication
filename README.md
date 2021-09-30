
# Project Title

Project for react Authentication vs. Authorization implementation

NEVER TRUST THE CLIENT SIDE!

Authentication vs. Authorization
- Authentiction = "Is this user who they're claiming to be?"
- Authorization = "Is this user allowed to do what they're trying to do?"

Strategies for User Auth:

1. Knowledge-based auth - 
	- Examples:
		- passwords
		- PINs
		- secret keys
		- security questions
	- Problems:
		- Reliant on users creating good passwords
		- users can forget
		- Sometimes googleable (for security questions)
		
2. Ownership-based auth -
	- Examples:
		- User owns an email address
		- Cell phone
		- OTP fob or apps (Authy)
	- In general, more secure than knowledge-based
	- Problems:
		- Easy to lose!
		- Sometimes reliant on knowledge-based strategies as a back-up

* Multi-factor auth - combines knowledge- and ownership-based strategies

3. Biology-based Authentication
	- Examples:
		- Facial recognition
		- Fingerprints
		- Retina scans


JSON Web Tokens (JWTs):

- Strings that users get from our server when they successfully authenticate
- Encoded JSON objects that contain basic user info
	* Encoded !== Encrypted - 3rd parties can see all the data they contain!
	{
		"userId": "12345",
		"email": "shaun@test.com",
		"permissionsLevel": "admin",
	}
- JWTs are PRIVATE! Treat them with care
- 

The JWT Flow:

1. The user logs in successfully (with username and password)
2. The server uses a secret key to generate a JWT w/ the user's info
3. The server sends JWT to user
4. Our front-end saves this JWT to local storage/cookies/etc.
5. Whenever user makes a server request, they send that token to the server
6. Server verifies that token hasn't been modified, and then checks to make sure that the user is authorized


Basic Email Verification Process:

1. User clicks "create account"
2. Server receives user data and inserts into DB
3. Server generates random hash that the user can't see
4. Server sends email with link & hash to user's provided email
5. User clicks link w/ hash
6. Front-end verifies hash with server
7. If code is legit, server marks user as verified


Basic Reset Password Process:

1. User clicks "forgot password" and is taken to a page where they can enter their email
2. User enters email address and submits, sending their email to the server
3. Server sends an email with a password reset hash link to that email address
4. User clicks the link, and goes to a page where they can enter a new password
5. New password is sent to the server along with the reset hash. If hash matches, user's password is reset
6. User logs in with new password


## Tech Stack

**Client:** React, react-router-dom,

**Server:** Node,Express,JWT,

  
## Features

- Programmatic navigation
- "Prompt" to avoid user from page*
- Query parameter for sorting list*
- useRouteMatch
- addcomment function using router URL

  
## Screenshots

![App Screenshot](./public/screen1.png)
![App Screenshot](./public/screen2.png)
![App Screenshot](./public/screen3.png)
![App Screenshot](./public/screen4.png)

  
## Demo

Insert gif or link to demo

  
## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project

  yarn add bcrypt dotenv jsonwebtoken
```
    
## Deployment

To deploy this project run

```bash
  show dbs
  use dbname
  show collections
  db.dropDatabase()//goto inside the db and use this commands
  cls 
  exit
  db//current database
  db.users.insertOne({name:"GBU"});
  db.users.find();
  db.users.insertMany([{},{}])
  db.users.find().limit(2)
  db.users.find().sort({name:1})
  db.users.find().sort({name:-1}).limit(2)//*limit to is just for expamle you can omite
  db.users.find().sort({age: -1,name:-1}).limit(2)
  db.users.find().skip(1),limit(2)
  db.users.find({name:"apple"})
  db.users.find({name:"apple"},{name:1,age:1,_id:0})//to get the exact data except _id
  db.users.find({name:{$eq:"sally"}});
  db.users.find({name:{$ne:"sally"}});
  db.users.find({name:{$in:["aaa","bbb"]}});
  db.users.find({name:{$nin:["aaa","bbb"]}});
  db.users.find({age:{$exists:true}});/this check key exists not  the value
  db.users.find({age:{$gte:20,$lte:40},name:"test"})// AND 1
  db.users.find({$and:[{age:26},{name:"test"}]})//AND 2
  db.users.find({$or:[{age:{$lte:20}},{name:"test"}]})//OR
  db.users.find({age:{$not:{$lte:20}}})//NOT
  db.users.find({expr:{$gt:["$keydebit","$keybalance"]}})//keys are used "expression"
  db.users.find({"address.street":"123 Main St"})
  db.users.countDocuments({age:{$lte:40}})
  db.users.updateOne({age:26},{age:27});
  db.users.updateOne({_id:ObjectId("84d11684ds1894")},{$set:{age:27}});
  db.users.updateOne({_id:ObjectId("84d11684ds1894")},{$inc:{age:2}});
  db.users.updateOne({_id:ObjectId("84d11684ds1894")},{$rename:{name:"firstName"}});
  db.users.updateOne({_id:ObjectId("84d11684ds1894")},{$unset:{age:""}});remove age property
  db.users.updateOne({_id:ObjectId("84d11684ds1894")},{$push:{hobbies:"Swimming"}});add to hobbies
  db.users.updateOne({_id:ObjectId("84d11684ds1894")},{$pull:{hobbies:"Swimming"}});remove from hobbies
  db.users.updateMany({address:{$exists:true}},{$unset:{address:""}})
  db.users.replaceOne({age:30},{name:"john"}); replace entire object
  db.users.deleteOne({name:"john"})
  db.users.deleteMany({age:{$exists:false}})  check age keys
     




```

  
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
``

Start the server

```bash
  npm run start
```

  
## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

  
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

  
## Documentation

[Documentation](https://linktodocumentation)

  
## Support

For support, email test@test.com or join our Slack channel.

  
## Roadmap

- Additional browser support

- Add more integrations

  
## Appendix

Any additional information goes here

  
## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

  
## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

  
## Feedback

If you have any feedback, please reach out to us at fake@fake.com

  
## Authors

- [@Inokcode](https://github.com/Inokcode)

  