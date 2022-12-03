
import React from "react";
function CreateComputer(){
return(
    <>
    <div >
           
           <div className="m-0 vh-100  row justify-content-center align-items-center" >
               <div className="col-5 p-5">
                   <div className="align-middle">
                       <div className="card">
                           <div className="card-header">
                               <h2 className="card-title">Nuevo computador</h2>
                               <p></p>
                               <h4 className="card-subtitle mb-2 text-muted">Llene el formulario con la informacion del nuevo Computador</h4>
                               
                           </div> 
                           <div className="card-body">
                           <form>      

                                       <div className="form-group mt-2">
                                           <label for="name">Nombre:</label>
                                           <input type="text" class="form-control" placeholder="Nombre" id="name" />
                                       </div>
     
                                       <div className="form-group  mt-2">
                                       <label for="description">Descripcion:</label>
                                       <input type='text' class='form-control' placeholder="Descripcion" id='description' />
                                       </div> 

                                       <div className="form-group mt-2">
                                           <label for="price">Precio:</label>
                                           <input type='text' class='form-control' placeholder="Precio" id='price' />
                                       </div>
                                       <div className="form-group mt-2">
                                           <label for="imagePath">Imagen:</label>
                                           <input type='text' class='form-control' placeholder="Imagen" id='imagePath' />
                                       </div>

                                       <div className="d-flex justify-content-center mt-3">
                                           <button type="button" className="btn btn-secondary" onClick={newComputer}>Crear</button>
                                       </div>

                                       <div>
                                           <h2 className="h2messageSuccess" id="messageSuccess"></h2>
                                           <h2 className="h2messageError" id="messageError"></h2>
                                       </div>
                                   </form>
                           </div>
                       </div> 

                   </div>

               </div>
           </div>

       </div>
    </>
)
}
export default CreateComputer


const newComputer = async () => {
    let url = 'http://localhost:8080/computers'
    const tkn = localStorage.getItem("Token")
    var name = document.getElementById('name').value
    var description = document.getElementById('description').value
    var price = document.getElementById('price').value
    var imagePath = document.getElementById('imagePath').value
   console.log(imagePath)
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': "application/json",
        'accept' : "application/json",
        'Authorization': 'Bearer '+ tkn
      },
      body: JSON.stringify({
          "name": name,
          "description": description,
          "price": price,
          "imagePath": imagePath
      })
      
  })
 console.log(res)
  const answer = await res.json()
  console.log(res.status)
  if (res.status == 200) {
    alert(`Se agrego con exito ${answer.name} ${answer.id}`)
    //localStorage.setItem("Token",answer.token)
  
  }else{
      // document.getElementById('messageError').innerHTML = "No se pudo registrar el suricato" + answer.code
      document.getElementById('messageError').innerHTML = "No se pudo registrar el suricato (" + answer.message + ")"
  
  }
  }