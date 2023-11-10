const express = require("express");
const server = express();

server.use(express.json());

let custumers = [
    {id: 1, name: "Will Github", site: "https://github.com/CancianiWill"},
    {id: 2, name: "Google", site: "http://google.com"},
    {id: 3, name: "UOL", site: "http://uol.com.br"}
];

// listagem de registros
server.get("/customers",(req, res)=>{
    return res.json(custumers);
});

//retorna o registro escolhido
server.get("/customers/:id",(req, res)=>{
    const id = parseInt(req.params.id);
    const custumer = custumers.find(item => item.id === id);
    const status = custumers ? 200 : 404;

    return res.status(status).json(custumer);
});

//adiciona um novo registro
server.post("/customers",(req, res)=>{
    const {name, site} = req.body;
    const nextId = custumers[customers.length - 1].id + 1;

    const newCustumer = {id, name, site}
    custumers.push(newCustumer);

    return res.status(201).json(newCustumer);
});


//atualização de registros
server.put("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {name, site} =  req.body;

    const index = custumers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0) {
        custumers[index] = {id: parseInt(id), name, site};
    };

    return res.status(status).json(custumers[index]);
});

//exclusão de registros
server.delete("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = custumers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        custumers.splice(index, 1);
    }

    return res.status(status).json();
});

server.listen(3000);