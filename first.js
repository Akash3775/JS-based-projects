fetch("https://reqres.in/api/users/2")
.then(res=>res.json())
.then(data=>console.log(data))