import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'

function Home() {

    const HandleFetch = () => {
        // alert("From fetch")
        fetch('https://randomuser.me/api/?results=50')
        .then(res=>res.json())
        .then((data)=>{
            // console.log(data)
            let records = data.results.map((ele,ind)=>{
               /* 
                    id:string,
                    :string,
                    :string,
                    :string,
                    :string,
                    :string,
                    :string,
                    :string,
                    :string 
                */

                    let id = uuidv4()
                    let name = ele.name.title+' '+ ele.name.first+' '+ele.name.last
                    let username = ele.login.username
                    let email = ele.email
                    let image = ele.picture.large
                    let address = ele.location.street.number+" "+ele.location.street.name
                    let password = ele.login.password
                    let birthday = ele.dob.date
                    let age = ele.dob.age
                    let gender = ele.gender
                    let phonenumber = ele.phone

                    return {
                        id,
                        name,
                        username,
                        email,
                        image,
                        address,
                        password,
                        birthday,
                        age,
                        gender,
                        phonenumber
                    }
            })

            // console.log(records)
            fetch('http://localhost:5050/bulkcreate', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', // Set the content type to JSON
                },
                body: JSON.stringify(records), // Convert the data object to a JSON string
              })
                .then((response) => {
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  return response.json(); // Parse the response body as JSON
                })
                .then((responseData) => {
                    alert(responseData.msg)
                //   console.log('POST Request Successful!', responseData);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
              
        })
    }
    const HandleDelete = () => {
        // alert("From Delete")
        const url = 'http://localhost:5050/bulkdelete'; // Replace with your API endpoint URL
        const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json', // Add any required headers here
            // Add other headers as needed
        },
        };
        fetch(url, options)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the response data here
            alert('Deleted successfully');
            // alert(data.msg)
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error deleting resource:', error.message);
        });
    }

  return (
    <div>
        <button onClick={HandleFetch}>Fetch Users</button>
        <button onClick={HandleDelete}>Delete Users</button>
        <Link to={'/userdetails'}><button>User Details</button></Link>
    </div>
  )
}

export default Home