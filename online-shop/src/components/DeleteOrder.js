import { React, Component, useEffect, useState } from "react";
function DeleteOrder(){
    return(
        <>
            <div>
                <div className="container-lg">
                    <div className="flex-column p-4">
                        <div className="d-flex justify-content-center">
                            <label for="suricatoId">Digita el identificador de la orden que deseas eliminar</label>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <input type="text" id="orderId" />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button type="button" className="btn btn-secondary" onClick={DeleteOrderById}>Eliminar</button>
                           
                        </div>
                        
                    </div>  

                </div>
            </div>
        </>
    )
}
export default DeleteOrder
const DeleteOrderById = async () => {
    let url = 'http://localhost:8080/orders/' + orderId
    const tkn = localStorage.getItem("Token")
    const res = await fetch(url, {
        method: 'DELETE',
        headers: { 

            'Authorization': 'Bearer Bearer'+ tkn
         }
  })
  const answer = await res.json()
  console.log(res.status)
  if (res.status == 200) {

    alert(`Se elimino la orden con id: ${orderId}`)
  }
  }