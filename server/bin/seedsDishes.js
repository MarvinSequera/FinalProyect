require('dotenv').config()
const mongoose = require("mongoose")
const Dish = require('../models/Dish.model')

mongoose.connect(`mongodb://localhost/finalProyect`)
Dish.collection.drop()

const Dishes = [
    {
        name:"Alitas de Pollo",
        size:"Mediano",
        image:"../public/images/alas-de-pollo-en-salsa.jpg",
        category:"Entrante"
    },
    {
        name:"Dedos de Mozarella",
        size:"Mediano",
        image:'../public/images/dedos-de-queso-01.jpg',
        category:"Entrante"
    },
    {
        name:"Pan con Ajo",
        size:"Mediano",
        image:'../public/images/pan-con-ajo.jpg',
        category:"Entrante"
    },
    {
        name:"Tequeños",
        size:"Mediano",
        image:'../public/images/Tequenos-frenteG.jpg',
        category:"Entrante"
    },
    {
        name:"Nuggets de Pollo",
        size:"Mediano",
        image:'../public/images/nuggets.jpg',
        category:"Entrante"
    },
    {
        name:"Croquetas de Jamón",
        size:"Mediano",
        image:'../public/images/croquetas.jpg',
        category:"Entrante"
    },
    {
        name:"Costillas BBQ",
        size:"Mediano",
        image:'../public/images/costillas.jpg',
        category:"Principal"
    },
    {
        name:"Hamburguesa con Queso",
        image:'../public/images/hamburguesa-con-queso.jpg',
        ingredients:[{lechuga:1},{tomate:1},{pepinillo:1},{cebolla:1},{mayonesa:1},{mostasa:1},{ketchup:1},{queso:1},{carne:1}],
        category:"Principal"
    },
    {
        name:"Hamburguesa con Queso y Tocino",
        image:'../public/images/hamburguesa-con-tocino.jpg',
        ingredients:[{lechuga:1},{tomate:1},{pepinillo:1},{cebolla:1},{mayonesa:1},{mostasa:1},{ketchup:1},{queso:1},{carne:1},{tocineta:1}],
        category:"Principal"
    },
    {
        name:"Hamburguesa de Pechuga de Pollo",
        image:'../public/images/hamburguesa-de-pollo.jpg',
        ingredients:[{lechuga:1},{tomate:1},{pepinillo:1},{cebolla:1},{mayonesa:1},{mostasa:1},{ketchup:1},{pollo:1}],
        category:"Principal"
    },
    {
        name:"Pizza Margarita",
        image:'../public/images/pizza-margarita.jpg',
        ingredients:[{oregano:1},{ajo:1},{queso:1}],
        category:"Principal"
    },
    {
        name:"Pizza de Peperoni",
        image:'../public/images/Pizza-con-pepperoni.jpg',
        ingredients:[{oregano:1},{ajo:1},{queso:1},{peperoni:1}],
        category:"Principal"
    },
    {
        name:"Patatas Fritas",
        size:"Mediano",
        image:'../public/images/patatas-fritas.jpg',
        category:"Acompañante"
    },
    {
        name:"Patatas Gajo",
        size:"Mediano",
        image:'../public/images/gajos.jpg',
        category:"Acompañante"
    },
    {
        name:"Pure de Patatas",
        size:"Mediano",
        image:'../public/images/pure.jpg',
        category:"Acompañante"
    },
    {
        name:"Ensalada Cesar",
        image:'../public/images/cesar.jpeg',
        ingredients:[{lechuga:1},{queso:1},{salsa_anchoas:1},{tomates_cherry:1},{rucula:1},{pan:1}],
        category:"Acompañante"
    },
    {
        name:"Aros de Cebolla",
        size:"Mediano",
        image:'../public/images/aros-de-cebolla.jpg',
        category:"Acompañante"
    },
    {
        name:"Nachos",
        size:"Mediano",
        image:'../public/images/nachos.jpg',
        category:"Acompañante"
    },
    {
        name:"Refresco",
        size:"Mediano",
        image:'../public/images/refrescos.jpg',
        category:"Bebida"
    },
    {
        name:"Cerveza",
        size:"Mediano",
        image:'../public/images/cerveza.jpg',
        category:"Bebida"
    },
    {
        name:"Agua",
        size:"Mediano",
        image:'../public/images/agua.jpg',
        category:"Bebida"
    },
    {
        name:"Galleta y Helado",
        image:'../public/images/cookie-y-helado.jpg',
        ingredients:[{vainilla:1},{fresa:0},{chocolate:0}],
        category:"Postre"
    },
    {
        name:"Cheese Cake",
        image:'../public/images/tarta-de-queso.jpg',
        ingredients:[{sirop_Chocolate:1},{sirop_Fresa:0}],
        category:"Postre"
    },
    {
        name:"Tarta de Zanahoria",
        image:'../public/images/tarta-zanahoria.jpg',
        ingredients:[{lacasitos:1},{queso_crema:1}],
        category:"Postre"
    },
    {
        name:"Brownie y Helado",
        image:'../public/images/brownie-con-helado.jpg',
        ingredients:[{vainilla:1},{fresa:0},{chocolate:0}],
        category:"Postre"
    },
    {
        name:"Yogurt,Frutos secos y Miel",
        image:'../public/images/yogur.jpg',
        ingredients:[{almendras:1},{cacahuates:1},{anacardos:1},{nueces:1},{miel:1}],
        category:"Postre"
    },
    {
        name:"Tortitas con sirope y nata montada",
        image:'../public/images/tortitas.jpg',
        ingredients:[{sirop_Chocolate:1},{sirop_Fresa:0}],
        category:"Postre"
    }
]

Dish.create(Dishes,(err)=>{
    if(err){throw err}
    console.log(`Creados ${Dishes.length} platos`)
    mongoose.connection.close()
})