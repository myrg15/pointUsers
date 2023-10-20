import express,{Request,Response} from "express";//cargamos e inicializamos el objeto express
import { router as routerUsers } from "./routes/usersRoutes";

const app = express()//ejecuta la funcion y guardala en una constante

const PORT = process.env.PORT || 3000

app.use('/users', routerUsers)

app.listen(PORT, ()=>{
    console.log(`Server running ${PORT}`);
})

/*app.listen(3000, () =>console.log('Servidor levantado en 3000')); //instanciamos el servidor
//app.get('/', (req:Request,res:Response)=>{
    //res.send('Hello world!')
//});
app.get('/users', (req, res) => {//ruta en el servidor, de la instancia (app) de express del método (get) de http
    return res.send('get users')
});

app.post('/users', (req, res)=>{
return res.send('Create users')
});

app.put('/users/:id', (req, res)=>{
    const usersId = req.params.id
    return res.send('update users' + usersId)
})

app.delete('/users/:id', (req, res)=>{
    const usersId = req.params.id
    return res.send('delete users' + usersId)
})*/
