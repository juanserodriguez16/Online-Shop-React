import { React, Component, useEffect, useState } from "react";

function OrdersList() {
    
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const handlerOrders = async () => {
            let url = 'http://localhost:8080/users/personalInfo'
            const tkn = localStorage.getItem("Token")
            const res = await fetch(url, {
                method: 'GET',
                headers: { 
                    'content-type': "application/json",
                    'accept' : "application/json",
                    'Authorization': 'Bearer '+ tkn
                 }
            })
            const answer = await res.json()
        
            //console.log(answer)
        
            setOrders(answer)
        }
        
        handlerOrders().catch(console.error)
    }, [])
    let tb_data
    if(orders.userOrders){
        console.log(orders.userOrders[0])
         tb_data = orders.userOrders.map((item) => {
            return (
                <tr key={item.orderId}>
                    <td>{item.orderId}</td>
                    <td>{item.total}</td>
                    <td>{item.status}</td>
                </tr>
            )
        })
    }

 //
    
    // let tb_data = orders.map((item) => {
    //     return (
    //         <tr key={item.id}>
    //             <td>{item.id}</td>
    //             <td>{item.name}</td>
    //             <td>{item.gender}</td>
    //             <td>{item.weight}</td>
    //             <td>{item.age}</td>
    //             <td>{item.height}</td>
    //             <td>{item.arriveDate}</td>
    //         </tr>
    //     )
    // })
    return (
        <div>
            <div className="m-0 vh-100  align-items-center m-0 p-0">
            <div className="cardTable m-3"> 
                <div className="col-auto p-3 text-center">
                    <table class="table" id="table">
                        <thead>
                            <tr>
                                <th scope="col">ID de la orden</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Estado</th>

                            </tr>
                        </thead>
                        <tbody>
                            {      
                            tb_data      
                            // <tr key={orders['id']}>
                            // <td>{orders['id']}</td>
                            // <td>{orders['email']}</td>
                            // <td>{orders['address']}</td>
                            // </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    )
}


export default OrdersList;
// onClick={() => becomeAdmin(item.id)}