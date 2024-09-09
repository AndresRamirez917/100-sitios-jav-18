async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    //convertir json a array !!!!chimbita
    const arr = products.map(elemento => Object.entries(elemento));
    console.log(arr)
    
    products.forEach(element => {
        const randomInt = randomImage(1, arr.length);
        const ranIndex = randomInt;
        for(i = 0; i <= 3; i++){
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

//btn_validar.addEventListener("click", alert("madre"))
getData()


