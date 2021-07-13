const express=require("express");
const app= express();
const path=require("path");
const port =progress.env.port || 8000;
const hbs=require("hbs");


const staticPath=path.join(__dirname, "../public")
const tamplatePath=path.join(__dirname, "../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");


app.set("view engine", "hbs");
app.set("views",tamplatePath);
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath));
// routing
app.get("/",(req,res)=>{
    res.render("html")
});
app.get("/about",(req,res)=>{
    res.render("about")
});
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404")
})
app.listen(port,()=>{
    console.log(`listening to the port no ${port}`);
})