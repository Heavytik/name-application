# Name-application

Simple app for demo purposes.

Application is made to complete requirements 1 - 4 on https://github.com/solita/dev-academy-2021/blob/main/README.md document.

Cra-front is frontend development directory. It is started with create-react-app, so it uses basic react structure. Express-back is backend source and after build, it will be app folder (frontend + backend in one folder).

To manually test local application, you need node and npm installed on your computer. Open terminal and go to directory express-back. Run command `npm start`. After message "Server running on port 3003" you can open localhost:3003 in your web browser.

------------------------------------------------------------

## Backend endpoints:

GET /api/names

returns a list of name objects

Query string parameters

| parameter | required | values    | description                                  |
| --------- | -------- | ----------|--------------------------------------------- |
| countfor  | optional | name, all | If you include countfor parameter, then only amount of given "name" is returned as object { count: amount }. Value "all" returns total amount of names alike object. |

### Examples

`www.domain.fi/api/names?countfor=all`
returns { count: 211 }

`www.domain.fi/api/names?countfor=antti`
returns { count: 22 }

`www.domain.fi/api/names?countfor=notExistingName`
returns { count: 0 }

------------------------------------------------------------

## Deployment steps (mac/linux)

1. Manually:
run command `npm run build` in cra-front directory, then move cra-front/build folder to express-back directory

2. Using script:
run `bash basic-deploy.bash`

App is ready to production on platforms like Heroku (Not tested).