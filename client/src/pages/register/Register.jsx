import React from 'react'
import "./Register.css"

export default function Register() {
  return (
    <>

    <div class="container-fluid reg">
        <h1 class=" text-center text-warning">REGISTERATION</h1>
        <form>
            <div class="row text-warning rows-gap-2">
                <div class="col-6 p-5">
                    <label for="">Name<span class="text-danger">*</span></label><br></br>
                    <input type="text" class="namewidth"></input><br></br>

                    <label for="">Address<span class="text-danger">*</span></label><br></br>
                    <input type="text" class="addresswidth"></input><br></br>

                    <label for="">State<span class="text-danger">*</span></label><br></br>
                    <input type="text" class="statewidth"></input><br></br>

                    <label for="">Phone<span class="text-danger">*</span></label><br></br>
                    <input type="text" class="phonewidth"></input><br></br>

                    <div class="row">
                        <div class="col">
                    <label for="">Gender<span class="text-danger">*</span></label><br></br>
                    <input type="radio"></input>
                    <label for="">Male</label>

                    <input type="radio" class="m-3"></input>
                    <label for="">Female</label>
                    </div>
                    <div class="col">
                    <label for="">T-shirt Size<span class="text-danger">*</span></label><br></br>
                    <input type="number"class="size"></input>
                    </div>
                    </div>


                </div>
                <div class="col-6 p-5">
                <label for="">Email<span class="text-danger">*</span></label><br></br>
                    <input type="text" class="emailwidth"></input><br></br>

                    <label for="">City<span class="text-danger">*</span></label><br></br>
                    <input type="text" class="citywidth"></input><br></br>

                    <label for="">Zip<span class="text-danger">*</span></label><br></br>
                    <input type="text" class="zipwidth"></input><br></br>

                    <label for="">Date Of Birth <span class="text-danger">*</span></label><br></br>
                    <input type="date" class="zipwidth"></input><br></br>

                    <label for="">Choosen Race<span class="text-danger">*</span></label><br></br>
                    <input type="radio"></input>
                    <label for="">5k-$25</label>

                    <input type="radio" class="m-3"></input>
                    <label for="">10k-$25</label>
                </div>
            </div>
        </form>

            <div class="but text-center pb-5">
            <button type="submit" class="bg-warning border">Register Now</button>
            </div>







    </div>
      
    </>
  )
}
