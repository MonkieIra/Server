const express = require('express');
const { Schools, Heroes } = require('./models');
const { sequelize } = require('./db');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.use(cors());

app.get('/schools' , (req, res) => {
    Schools.findAll().then((schools)=>{
        res.json(schools);
    })
    

})

app.get('/heroes' , (req, res) => {
    Heroes.findAll({include: Schools}).then((heroes)=>{
        res.json(heroes);
    })
    

})


app.get('/heroesfilterBySchool/:id' , (req, res) =>{
    const id = req.params.id;

    Heroes.findAll({
        where: {school_id:id},
        include: Schools
    }).then((heroes) =>{
        res.json(heroes);
    })
});


sequelize.sync({}).then(()=>{
    app.listen(PORT, ()=>(
        console.log("Сервер запущен. Порт:" , PORT)
        ))
})