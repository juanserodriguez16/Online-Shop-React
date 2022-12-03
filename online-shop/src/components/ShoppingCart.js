import { React, Component, useEffect, useState } from "react";
function ShoppingCart(){
    const [users, setUsers] = useState([]);

    function becomeAdmin(userId, event) {
        console.log(userId);
    }

    useEffect(() => {
        const handlerUsers = async () => {
            let url = 'http://localhost:8080/users'
            const tkn = localStorage.getItem("Token")
            const res = await fetch(url, {
                method: 'GET',
                headers: { 
                    Authorization: 'Bearer '+ tkn
                 }
            })
            const answer = await res.json()
        
            //console.log(answer)
        
            setUsers(answer)
        }
        
        handlerUsers().catch(console.error)
    }, [])
        
        let tb_data = users.map((item) => {
            id = item.id
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
                <button onClick={(e) => this.becomeAdmin(id, e)}>Hacer admin</button>
            </tr>
        )
    })
    return (
        <div>
            <div className="m-0 vh-100  align-items-center m-0 p-0">
            <div className="cardTable m-3"> 
                <div className="col-auto p-3 text-center">
                    <table class="table" id="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Hacer admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tb_data}
                            
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    )

}


export default ShoppingCart;