<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
</head>

<body>
    <br/>
    <h1>Rest API for <a href="https://drive.google.com/file/d/114AhDA0rn2jGcwGuN1J8DjVzs9tUyMpm/view?usp=share_link">Assignment</a></h1>
    <br/>
    <h5>Default there will be an admin
        <br/>
        email :- admin1@gmail.com
        <br/>
        password :- Password123
    </h5>
    <h6>Need to login as an admin first -> will get a json token back which should be sent in specified format below.</h6>
    <br/>
    <table class="table table-striped">
        <thead>
            <th scope="col">route</th>
            <th scope="col">method</th>
            <th scope="col">For</th>
            <th scope="col">other information</th>
        </thead>
        <tbody>
            <tr>
                <td>/login</td>
                <td>POST</td>
                <td>logging in of admin or user</td>
                <td>Request body should be a json object with properties email and password else will get back an err msg.
                    <br/>
                    will get back a jwt token should send this token with every subsequent request 
                    <br/>
                    in request auhtorization header : Bearer <pre><Token></pre> 
                </td>
            </tr>
            <tr>
                <td>/add/admin</td>
                <td>POST</td>
                <td>To create a new admin</td>
                <td>Request body should be a json object with property names : firstName,middleName,lastName, password,email,role,department,confirmPassword
                    <br/>
                    department and middleName are optional and the remaining properties are mandatary.
                    <br/>
                    any other properties in the request body will return a error response.
                    <br/>
                    Access will only be for admins
                </td>
            </tr>
            <tr>
                <td>/add/user</td>
                <td>POST</td>
                <td>To create a new user</td>
                <td>Same as above
                    <br/>
                    Access will be for both admins and users.
                </td>
            </tr>
            <tr>
                <td>/update/admin</td>
                <td>PUT</td>
                <td>Updating details of admin</td>
                <td>Request body be a json object with properties id having unique user id (mongodb document id)
                    <br/> 
                    and can contain any of the following properties
                    firstName ,middleName ,lastName ,email ,role ,department.
                    <br/>
                    any other properties in Request body will return a error response.
                    <br/>
                    Access will be only for admins.
                </td>
            </tr>
            <tr>
                <td>/update/user</td>
                <td>PUT</td>
                <td>Updating details of user</td>
                <td>Same as above.
                    <br/>
                    Access will be for both users and admins.
                </td>
            </tr>
            <tr>
                <td>/view/admins</td>
                <td>GET</td>
                <td>To view all the admins</td>
                <td>Access will be present only for admins</td>
            </tr>
            <tr>
                <td>/view/users</td>
                <td>GET</td>
                <td>To view all the users</td>
                <td>Access will be for both users and admins.</td>
            </tr>
            <tr>
                <td>/view/admins/:id</td>
                <td>GET</td>
                <td>To view a admin by unique id</td>
                <td>Unique Id is mongodb document id
                    <br/>
                    Access will only be for admins.
                </td>
            </tr>
            <tr>
                <td>/view/users/:id</td>
                <td>GET</td>
                <td>To view a user by unique id</td>
                <td>Unique Id is mongodb document id
                    <br />
                    Access will be for both users and admins.
                </td>
            </tr>
            <tr>
                <td>/view/admins/:id/:property</td>
                <td>GET</td>
                <td>View a single field of an admin by his unique id</td>
                <td>Unique Id is mongodb document id 
                    <br/>
                    property should be any of the following : firstName ,MiddleName ,LastName ,email ,role ,department
                    <br/>
                    any other property name would result in a error response.
                    <br/>
                    Access will only be for admins.
                </td>
            </tr>
            <tr>
                <td>/view/users/:id/:property</td>
                <td>GET</td>
                <td>View a single field of an user by his unique id</td>
                <td>Same as above.
                    <br/>
                    Access will be for both users and admins.
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>
