A new version of SBA-5 utilizing MongoDB+Express to create a CRUD API with similar data.

------
ROUTES:

"/"
.get = The landing page. Displays in plaintext "Welcome to the API."

"/sandwiches"
.get = Gives a list of all data in the sandwiches collection. Each sandwich has a name, an image link, a country of origin, and a description.
.post = Creates a new sandwich document using the parameters provided in the request body.

"/sandwiches/:id"
.get = Gives the data for an individual sandwich specified by its unique _id field.
.delete = Deletes a sandwich document specified by its _id field.


"/desserts"
.get = Gives a list of all data in the desserts collection. Each dessert has a type, an array list of examples, and a description.
.post = Creates a new dessert document using the parameters provided in the request body.

"/desserts/:id"
.get = Gives the data for an individual dessert type specified by its unique _id field.
.delete = Deletes a dessert document specified by its _id field.


"/comments"
.get = Gives a list of all data in the comments collection. Each comment has a username and content.
.post = Creates a new comment document using the parameters provided in the request body.

"/comments/:id"
.get = Gives the data for an individual comment specified by its unique _id field.
.patch = Updates the content of a comment specified by its _id field using the content parameter provided in the request body.
.delete = Deletes a comment document specified by its _id field.
