import React,{useEffect,useState} from 'react'

function Userdetails() {
    const [data, setdata] = useState([])
    const [pages, setpages] = useState(1)

    useEffect(() => {
      
        fetch('http://localhost:5050')
        .then(res=>res.json())
        .then((data)=>{
            let records = data.data
            setdata(records)
            setpages(data.totalPages)
            console.log(data.totalPages)
        })

    
      return () => {
        
      }
    }, [])


    const Handlebutton =(e)=>{
        fetch(`http://localhost:5050/?page=${e.target.dataset.id}&perPage=10`)
        .then(res=>res.json())
        .then((data)=>{
            let records = data.data
            setdata(records)
            setpages(data.totalPages)
        })
    }
    
    // id:string,
    // :string,
    // :string,
    // :string,
    // :string,
    // :string,
    // :string,
    // :string,
    // :string,
    // :string

  return (
    <div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Image</th>
                        <th>Address</th>
                        <th>Password</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                        <th>Phone No</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((el)=>(
                        <tr key={el.id}>
                            <td>{el.name}</td>
                            <td>{el.username}</td>
                            <td>{el.email}</td>
                            <td>{el.image}</td>
                            <td>{el.address}</td>
                            <td>{el.password}</td>
                            <td>{el.birthday}</td>
                            <td>{el.gender}</td>
                            <td>{el.phonenumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div>
           {new Array(pages).fill("0").map((ele,ind)=>(
            <button onClick={Handlebutton} key={ind+1} data-id={ind+1}>{ind+1}</button>
           ))}
        </div>
    </div>
  )
}

export default Userdetails