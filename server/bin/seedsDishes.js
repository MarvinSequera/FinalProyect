require('dotenv').config()
const mongoose = require("mongoose")
const Dish = require('../models/Dish.model')

mongoose.connect(`${process.env.DB}`)
Dish.collection.drop()

const Dishes = [
    {
        name:"Alitas de Pollo",
        size:"Mediano",
        image:"https://res.cloudinary.com/marvinsequera/image/upload/v1576331677/ironHack2019/alas-de-pollo-en-salsa_uvlmpe.jpg",
        category:"first"
    },
    {
        name:"Dedos de Mozarella",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331679/ironHack2019/dedos-de-queso-01_bvmzlo.jpg',
        category:"first"
    },
    {
        name:"Pan con Ajo",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331680/ironHack2019/pan-con-ajo_pjmycw.jpg',
        category:"first"
    },
    {
        name:"Tequeños",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331678/ironHack2019/Tequenos-frenteG_mtpaej.jpg',
        category:"first"
    },
    {
        name:"Nuggets de Pollo",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331679/ironHack2019/nuggets_kadfdo.jpg',
        category:"first"
    },
    {
        name:"Croquetas de Jamón",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331678/ironHack2019/croquetas_ewn1me.jpg',
        category:"first"
    },
    {
        name:"Costillas BBQ",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331678/ironHack2019/costillas_mvdaun.jpg',
        category:"main"
    },
    {
        name:"Hamburguesa con Queso",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331679/ironHack2019/hamburguesa-con-queso_zslifi.jpg',
        ingredients:[{lechuga:1},{tomate:1},{pepinillo:1},{cebolla:1},{mayonesa:1},{mostasa:1},{ketchup:1},{queso:1},{carne:1}],
        category:"main"
    },
    {
        name:"Hamburguesa con Queso y Tocino",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331678/ironHack2019/hamburguesa-bacon_kwjume.jpg',
        ingredients:[{lechuga:1},{tomate:1},{pepinillo:1},{cebolla:1},{mayonesa:1},{mostasa:1},{ketchup:1},{queso:1},{carne:1},{tocineta:1}],
        category:"main"
    },
    {
        name:"Hamburguesa de Pechuga de Pollo",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331679/ironHack2019/hamburguesa-de-pollo_ij6b69.jpg',
        ingredients:[{lechuga:1},{tomate:1},{pepinillo:1},{cebolla:1},{mayonesa:1},{mostasa:1},{ketchup:1},{pollo:1}],
        category:"main"
    },
    {
        name:"Pizza Margarita",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331677/ironHack2019/pizza-margarita_hepw3j.jpg',
        ingredients:[{oregano:1},{ajo:1},{queso:1}],
        category:"main"
    },
    {
        name:"Pizza de Peperoni",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331679/ironHack2019/Pizza-con-pepperoni_ujlttv.jpg',
        ingredients:[{oregano:1},{ajo:1},{queso:1},{peperoni:1}],
        category:"main"
    },
    {
        name:"Patatas Fritas",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331680/ironHack2019/patatas-fritas_dixavz.jpg',
        category:"side"
    },
    {
        name:"Patatas Gajo",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331679/ironHack2019/gajos_vvmlwt.jpg',
        category:"side"
    },
    {
        name:"Pure de Patatas",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331677/ironHack2019/pure_do281n.jpg',
        category:"side"
    },
    {
        name:"Ensalada Cesar",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331678/ironHack2019/cesar_cey4gc.jpg',
        ingredients:[{lechuga:1},{queso:1},{salsa_anchoas:1},{tomates_cherry:1},{rucula:1},{pan:1}],
        category:"side"
    },
    {
        name:"Aros de Cebolla",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331677/ironHack2019/aros-de-cebolla_kzcktb.jpg',
        category:"side"
    },
    {
        name:"Nachos",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331679/ironHack2019/nachos_eby48b.jpg',
        category:"side"
    },
    {
        name:"Refresco",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331678/ironHack2019/refrescos_ravwng.jpg',
        category:"drink"
    },
    {
        name:"Cerveza",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331678/ironHack2019/cerveza_yfdbst.jpg',
        category:"drink"
    },
    {
        name:"Agua",
        size:"Mediano",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331677/ironHack2019/agua_sjmomp.jpg',
        category:"drink"
    },
    {
        name:"Galleta y Helado",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331678/ironHack2019/cookie-y-helado_i5rmv7.jpg',
        ingredients:[{vainilla:1},{fresa:0},{chocolate:0}],
        category:"dessert"
    },
    {
        name:"Cheese Cake",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331678/ironHack2019/tarta-de-queso_b8nzqw.jpg',
        ingredients:[{sirop_Chocolate:1},{sirop_Fresa:0}],
        category:"dessert"
    },
    {
        name:"Tarta de Zanahoria",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331678/ironHack2019/tarta-zanahoria_pwoxik.jpg',
        ingredients:[{lacasitos:1},{queso_crema:1}],
        category:"dessert"
    },
    {
        name:"Brownie y Helado",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331677/ironHack2019/brownie-con-helado_oetnp8.jpg',
        ingredients:[{vainilla:1},{fresa:0},{chocolate:0}],
        category:"dessert"
    },
    {
        name:"Yogurt,Frutos secos y Miel",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331678/ironHack2019/yogur_ji6vv2.jpg',
        ingredients:[{almendras:1},{cacahuates:1},{anacardos:1},{nueces:1},{miel:1}],
        category:"dessert"
    },
    {
        name:"Tortitas con sirope y nata montada",
        image:'https://res.cloudinary.com/marvinsequera/image/upload/v1576331678/ironHack2019/tortitas_jdedq2.jpg',
        ingredients:[{sirop_Chocolate:1},{sirop_Fresa:0}],
        category:"dessert"
    }
]

Dish.create(Dishes,(err)=>{
    if(err){throw err}
    console.log(`Creados ${Dishes.length} platos`)
    mongoose.connection.close()
})