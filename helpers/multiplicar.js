const fs     =require('fs');
const colors =require('colors');
const crearArchivo = async (base=5,listar=false)=> {
   
    try {
        if (listar){
            console.log('=================='.green);
            console.log('tabla del '.rainbow,colors.blue(base));
            console.log('=================='.green);
        }
        
        let salida ='';
    
    
        for(let i=1; i<=10; i++){
    
            salida+=(`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`);
    
        }
    if (listar){console.log(salida)};
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
    return (`tabla-${base}.txt creado`);
    
  
    }catch (err){
        return (err);
    }
    
}


module.exports={
    crearArchivo

}