import { v4 as uuidv4 } from 'uuid';

let users = [{

    id: uuidv4(),
    firstName: "Alexis", 
    lastName: "Maya", 
    age: 26
},
{
    id: uuidv4(),
    firstName: "Pamela", 
    lastName: "Rosas", 
    age: 16
},

];

export const getUsers = (req, res) => {
    console.log(`Usuarios en la base: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuidv4()});
    
    console.log(`Usuario [${user.username}] añadido a la base.`);

    res.send(`Usuario con el nombre ${user.firstName} añadido a la base`); 
};

export const getUser = (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id); 

    res.send(foundUser); 
};

export const deleteUser = (req, res) => { 

    const {id} = req.params;

    users = users.filter((user) => user.id !== id);
    
    console.log(`El usuario con el id: ${id} ha sido borrado`);

    res.send(`Usuario con el id ${id} borrado de la base`); 
};

export const updateUser =  (req,res) => {

    const {id} = req.params; 
    const {firstName, lastName, age} = req.body; 

    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName; 
    if(lastName) user.lastName = lastName; 
    if(age) user.age = age; 
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`Usuario con el id ${id} ha sido actualizado`); 

    res.send(`Usuario con el id ${id} ha sido actualizado`); 
};