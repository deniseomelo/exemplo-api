
import 'dotenv/config';
import  Express  from "express";
import cors from " express";


const servidor = Express();







servidor.listen(process.env.PORT,() => console.log (`API subiu na porta ${process.env.PORT}!`));
