import React, { useEffect, useState } from 'react'

const Customers = () => {
    const [customers, setCustomers] = useState([])

   useEffect(()=>{
       const fetchCustomers = async () =>{
           const res = await fetch('/customers')
           const data = await res.json()
           setCustomers(data)
        //    console.log(data);

       }
       fetchCustomers()
   },[])

    return (
        <div>
           {customers.map((cust) =>
                <li key={cust.id}>{cust.fname} {cust.lname}</li>
           )}   
        </div>
    )
}

export default Customers
