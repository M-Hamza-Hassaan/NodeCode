const express = require('express')
const app = express()
const users = require('./MOCK_DATA.json')
const PORT = 8000

app.get('/users' , (req, res) => {
    const html = `<ul>
    ${users.map((user) => `<li>My name is ${user.first_name}</li>`).join("")}
    </ul>`;
    return res.send(html);
})
//GET ALL USERS IN HTML SIMPLYY....

//APPLYING RESTAPI TO MAKE IT FEASIBLE FOR ALL USERS
app.get("/api/users" , (req, res) => {
    return res.json(users);
});
// GET ALL USERS---DONE

app.get("/api/users/:ID" , (req,res) =>{
    const id = Number(req.params.ID);
    const user = users.find((user) => user.id === id);
    // return res.json(user);
    const html = `<li>My name is ${user.first_name}</li>`
   ;
    return res.send(html)
})



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})