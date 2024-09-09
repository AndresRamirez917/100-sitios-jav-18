async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    //convertir json a array !!!!chimbita
    const arr = products.map(elemento => Object.entries(elemento));
    console.log(arr)
    
    products.forEach(element => {
        const randomInt = randomImage(1, arr.length);
        const ranIndex = randomInt;
        for(i = 0; i <= 6; i++){
            if(element.id == i){

                const card = document.createRange().createContextualFragment(`
                    
               <div class="card card-1">
                    <h3>japan</h3>
                    <img src="${arr[ranIndex][5][1]}" alt="">
                </div>
                    
                    `)
                    const trips_row = document.querySelector('.trips-row')
                    trips_row.append(card)
            }
        }

        function randomImage(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min);
            
          }
    });
}

const btn_validar = document.getElementById('btn-validar')

const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const arrMessages = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${arrMessages[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emaiValido(email.value)){
        swal({
            title: `El campo ${arrMessages[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Los datos fueron enviados satisfactoriamente`,
        icon: "success",
         })
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
    return true;

}

const emaiValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

btn_validar.addEventListener("click", validar)
getData()


