const express = require('express')
const app = express()
const fs = require('fs')
const users = require('./MOCK_DATA.json')
const { error } = require('console')
const PORT = 8000

//Middleware to parse the body of the request
app.use(express.urlencoded({extended:false}));

//ROUTES
app.get('/users' , (req, res) => {
    // return res.json(users);
    const html = `<ul>
    ${users.map((user) => `<li>My name is ${user.first_name}</li>`).join("")}
    </ul>`;
    return res.send(html);
})
//GET ALL USERS IN HTML SIMPLYY....

//APPLYING RESTAPI TO MAKE IT FEASIBLE FOR ALL USERS
app.get("/api/users" , (req, res) => {
    return res.json(users);
    // const html = `<ul>
    // ${users.map((user) => `<li>My name is ${user.first_name}</li>`).join("")}
    // </ul>`;
    // return res.send(html);
});
// GET ALL USERS---DONE

// app.get("/api/users/:id" , (req,res) =>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     // return res.json(user);

//     const html = `<li>My name is ${user.first_name}</li>`;
//     return res.send(html)
// })
//GET USER BY ID---DONE







// app.post("/api/users/:id" , (req, res) => {
//     return res.json({status:"pending"});
// });


// app.patch("/api/users/:id" , (req, res) => {
//     return res.json({status:"pending"});
// });

// app.delete("/api/users/:id" , (req, res) => {
//     return res.json({status:"pending"});
// });




// app.route("/api/users/:id")

// .get((req,res) =>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })
// .patch((req, res) => {
//     return res.json({status:"pending"});
// })
// .delete((req, res) => {
//     return res.json({status:"pending"});
// })



app.post("/api/users" , (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length+1});
    fs.writeFile('MOCK_DATA.json' , JSON.stringify(users), (err, data)=>{
        return res.json({status:"success", message:"User added successfully"});
    })
});


app.route("/api/users/:id")


.get((req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

.patch((req, res) => {
    const id = Number(req.params.id); 
    const body = req.body; 
    const userIndex = users.findIndex(user => user.Id === id);

    users[userIndex] = { ...users[userIndex], ...body };

    fs.writeFile('MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "User could not be updated" });
        }
        return res.json({ status: "success", message: "User updated successfully" });
    });
})


.delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = (users.findIndex(user => user.id ===id))

    users.splice(userIndex, 1); //remove element of the array

    fs.writeFile('MOCK_DATA.json' , JSON.stringify(users), (err)=>{
        if(err){
            return res.json({status:"error", message:"User could not be removed"});
        }
    return res.json({status:"success", message:"User removed successfully"});
});
});



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})