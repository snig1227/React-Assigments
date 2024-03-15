import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Demo from './Demo';
import Login from './Login';
import ProdDeets from './ProdDeets';
import DeptArrayCrud from './DeptArrayCrud';
import Discount from './Discount';
import Employee from './Employee';


function App1() {

  let uname = "Scott";
  let age = 25;
  let email = "scott@gmail.com";

  return (
    <>
      <h3>Developing Web Applications using React JS</h3>
      <hr />

      <div>
        User Name  :  {uname}    <br />
        User Age  :  {age}       <br />
        User Email : {email}
      </div>

    </>
  );
}

function App2() {

  let coursesArray = ["HTML5", "CSS3", "JAVA SCRIPT", "REACT JS", "ANGULAR", "HTML5", "CSS3", "JAVA SCRIPT", "REACT JS", "ANGULAR"];


  let resultArray = coursesArray.map(item => <li>{item}</li>);

  return (
    <>
      <h3>Developing Web Applications using React JS</h3>
      <hr />

      <ul>
        {resultArray}
      </ul>
    </>
  );
}

function App3() {

  let empObj = { empno: 10256, ename: "Scott", job: "Manager", deptno: 10 };

  return (
    <>
      <h3>Developing Web Applications using React JS</h3>
      <hr />

      <div>
        Employee Id :  {empObj.empno}  <br />
        Employee Name :  {empObj.ename}  <br />
        Employee Job  :  {empObj.job}  <br />
        Employee Deptno  :  {empObj.deptno}  <br />
      </div>

    </>
  );
}

function App4() {

  var empsArray =
    [
      { "empno": 6589, "ename": "SRIRAM", "job": "MANAGER", "sal": 3200, "deptno": 30 },
      { "empno": 7369, "ename": "SMITH", "job": "CLERK", "sal": 800, "deptno": 20 },
      { "empno": 7499, "ename": "ALLEN", "job": "SALESMAN", "sal": 1600, "deptno": 30 },
      { "empno": 6589, "ename": "SRIRAM", "job": "MANAGER", "sal": 3200, "deptno": 30 },
      { "empno": 7369, "ename": "SMITH", "job": "CLERK", "sal": 800, "deptno": 20 },
      { "empno": 7499, "ename": "ALLEN", "job": "SALESMAN", "sal": 1600, "deptno": 30 },
      { "empno": 6589, "ename": "SRIRAM", "job": "MANAGER", "sal": 3200, "deptno": 30 },
      { "empno": 7369, "ename": "SMITH", "job": "CLERK", "sal": 800, "deptno": 20 },
      { "empno": 7499, "ename": "ALLEN", "job": "SALESMAN", "sal": 1600, "deptno": 30 }
    ];


  let resultsArray = empsArray.map(item =>
    <tr>
      <td>{item.empno}</td>
      <td>{item.ename}</td>
      <td>{item.job}</td>
      <td>{item.sal}</td>
      <td>{item.deptno}</td>
    </tr>);

  return (
    <>
      <h3>Developing Web Applications using React JS</h3>
      <hr />

      <table border="2" width="500">

        <tr>
          <th>Empno</th>
          <th>Ename</th>
          <th>Job</th>
          <th>Salary</th>
          <th>Deptno </th>
        </tr>

        {resultsArray}

      </table>


    </>
  );
}

function App5() {
  let img1 = "https://tse1.mm.bing.net/th/id/OIP.33CwBYkmnMfpA9Djup22JwHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7";
  let img2 = "photo.jpg";

  return (
    <>
      <h3>working with images</h3>
      <hr />

      <img width="100" src="./Images/photo.jpg" />
      <img width="100" src={"./Images/" + img2} />
      <hr />
    </>
  );

}

function App6() {

  var usersArray = [{ "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
  { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
  { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" },
  { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" },
  { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
  { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }
  ];
  //let Imagearr = usersArray.map(item=>
  //<img width="100" src={item.avatar}/>)
  let resultsArray = usersArray.map(item =>
    <tr>
      <td>{item.id}</td>
      <td>{item.email}</td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td><img width="100" src={item.avatar} /></td>
    </tr>);

  return (
    <>
      <h3>Developing Web Applications using React JS</h3>
      <hr />

      <table border="2" width="500">

        <tr>
          <th>id</th>
          <th>email</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>avatar</th>
        </tr>
        {resultsArray}
      </table>
    </>
  );
}

function App7() {

  let imagesArray = ["https://reqres.in/img/faces/1-image.jpg", "https://reqres.in/img/faces/2-image.jpg", "https://reqres.in/img/faces/3-image.jpg", "https://reqres.in/img/faces/4-image.jpg", "https://reqres.in/img/faces/5-image.jpg"];


  let resultArray = imagesArray.map(item => <li>{item}</li>);

  return (
    <>
      <h3>Developing Web Applications using React JS</h3>
      <hr />

      <ul>
        {resultArray}
      </ul>
    </>
  );
}

function App8() {

  var usersArray = [{ "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
  { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
  { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" },
  { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" },
  { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
  { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }
  ];
  let Imagearr = usersArray.map(item =>
    <img width="100" src={item.avatar} />)
  return (
    <>
      <div>
        {Imagearr[0]}
        {Imagearr[1]}
        {Imagearr[2]}
        {Imagearr[3]}
      </div>

      {Imagearr}

    </>
  );
}

function sum(x,y) {
  return (x+y)
}

function App9(){
return (
  <>
  <h3 style = { { color: "blue", border: "2px solid blue", padding: "10px", textAlign: "center"}} >Working with JSX</h3>
  {sum(10,20)}
  </>
  
)
}


//export default App1; -- question 1 
//export default App2;
//export default App3;
//export default App4;
//export default App5; --question 2
//export default App6; --question 3
//export default App7;
//export default App8; --question 4 
//export default App9; 


/*function App1()
{
  return(
    <>
      <h1>JS</h1>
      <hr/>
      
      <Demo></Demo>
    </>
  )
}
//export default App;*/

/*function App1()
{
  return(
    <>
      <h1>JS</h1>
      <hr/>
      
      <Login></Login>
    </>
  )
}
//export default App;

function App()
{
  return(
    <>
      <h1>JS</h1>
      <hr/>
  
      <Login></Login>
    </>
  )
}
export default App;

function App()
{
  return(
    <>
      <h1>JS</h1>
      <hr/>
  
      <ProdDeets></ProdDeets>
    </>
  )
}
export default App; */

/*function App()
{
  return(
    <>
      <h1>JS</h1>
      <hr/>
  
      <DeptArrayCrud></DeptArrayCrud>
    </>
  )
}
export default App; */

function App()
{
  return(
    <>
      <h1>JS</h1>
      <hr/>
  
      <Discount></Discount>
    </>
  )
}
export default App; 

/*function App()
{
  return(
    <>
      <h1>JS</h1>
      <hr/>
  
      <Employee></Employee>
    </>
  )
}
//export default App; */
