import React, { useEffect, useState } from 'react'
import "./Volunteeredit.css"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



export default function Volunteeredit() {

  const navigate=useNavigate()
    const [team, setteam] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        dob: "",
        state: "",
        city: "",
        gender: "",
        age: "",
        image:'',
      });

      const {id}=useParams()


      useEffect(()=>{
    axios.get(`https://reactbike.onrender.com/api/volregister/view_volunteers/${id}`)

    .then((response)=>{
        console.log(response);
        setteam(response.data.data)
    })
    .catch((error)=>{
        console.log(error);
    })
},[])

      const teamchange = (event) => {
        const name=event.target.name;
        const value=event.target.value;
        setteam({...team,[name]:value})
      }
      console.log(team);

      const imageHandler=(event)=>{
        setteam({...team,image:event.target.files[0]})
        console.log(team.image);
      }
    
    const volunteerreg=(event)=>{
        event.preventDefault()

        const formdata=new FormData()
        formdata.append('firstname',team.firstname)
        formdata.append('lastname',team.lastname)
        formdata.append('phone',team.phone)
        formdata.append('dob',team.dob)
        formdata.append('state',team.state)
        formdata.append('city',team.city)
        formdata.append('gender',team.gender)
        formdata.append('age',team.age)
        formdata.append('image',team.image)



        axios.put(`https://reactbike.onrender.com/api/volregister/update/${id}`,formdata)
        .then((response)=>{
    console.log(response);
    if(response.data.updatestatus.modifiedCount===1){
      toast.success(response.data.message)
      setTimeout(()=>{
        navigate('/newvolunteer')
      },2000)
    }

    else{
      toast.success('already updated')
      setTimeout(()=>{
        navigate('/newvolunteer')
      },2000)
    }



        })
        .catch((error)=>{
            console.log(error);
            toast.error(error.response.data.message)
        })
    }
  return (
    <>
    <div className="container-fluid volBG">
      <ToastContainer/>
        <h1 className="volhone">EDIT VOLUNTEERS</h1>
        <div className="volrow">
          <div className="volcolumnone">
            <label for="">First Name</label>
            <br />
            <input
              type="text"
              className="volwidthone"
              name="firstname" value={team.firstname}
              onChange={teamchange}
            ></input>
            <br />
            <br />
            <label for="">Phone</label>
            <br />
            <input
              type="text"
              className="volwidthtwo"
              name="phone" value={team.phone}
              onChange={teamchange}
            ></input>
            <br />
            <br />

            <label for="">State</label>
            <br />
            <input
              type="text"
              className="volwidththree"
              name="state" value={team.phone}
              onChange={teamchange}
            ></input>
            <br />
            <br />
            <label for="">Gender</label>
            <br />
            <input
              type="radio" 
              className="volwidthfour"
              name="gender" value={'male'}
              checked={team.gender == "male"}
              onChange={teamchange}
            ></input>
            <label for="">Male</label>

            <input
              type="radio"
              className="volwidthfive"
              name="gender" value={'female'}
              checked={team.gender == "female"}
              onChange={teamchange}
            ></input>
            <label for="">Female</label>

            <br />
            <br />

            <label for="" className="volwidthsix">
                upload image
              </label>
              <br />
              <img src={`/img/${team?.image}`} height={'60px'} width={'70px'}
              onError={(event)=>event.target.src=`/img/${team?.image.name}`}/>
              <br />
              <input
                type="file"
                className="volwidthten"
                name="image"
                onChange={imageHandler}
              ></input>
              <br />
              <br />

          </div>

          <div className="volcolumntwo">
            <label for="">Last Name</label>
            <br />
            <input
              type="text"
              className="volwidthsix"
              name="lastname" value={team.lastname}
              onChange={teamchange}
            ></input>
            <br />
            <br />
            <label for="">Dob</label>
            <br />
            <input
              type="date"
              className="volwidthseven" value={team.dob}
              name="dob"
              onChange={teamchange}
            ></input>
            <br />
            <br />
            <label for="">City</label>
            <br />
            <input
              type="text"
              className="volwidtheight" value={team.city}
              name="city"
              onChange={teamchange}
            ></input>
            <br />
            <br />
            <label for="">Age</label>
            <br />
            <input
              type="number"
              className="volwidthnine" value={team.age}
              name="age"
              onChange={teamchange}
            ></input>
            <br />
            <br />
          </div>
        </div>

        <div className="volbutton">
          <button className="volreg" onClick={volunteerreg}>REGISTER NOW</button>
        </div>
      </div>
      
    </>
  )
}
