import { useState } from "react"

export const Form = () => {

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        
        // const {name,value}=e.target object decsture
        setState((prev)=>{
            return({...prev,[name]:value})
        })
    }
    const [State, setState] = useState({
        Fname: "", Lname: "", email: "", mobileNo: "", Dob: "", city: "", district: "", province: ""
    })
    return (
        <div className="container">
            <form>
                <hr />
                <div class="row">
                    <div class="col">
                        <label for="First Name" className="form-label">First Name</label>
                        <input value={State.Fname} onChange={handleChange} type="text" class="form-control" placeholder="First Name" name="Fname"  required/>
                    </div>
                    <div class="col">
                        <label for="Last Name" className="form-label">Last Name</label>
                        <input value={State.Lname} onChange={handleChange} type="text" class="form-control" placeholder="Last Name" name="Lname"  required/>
                    </div>
                </div>
                <div className="mb-3 mt-3">
                    <label for="email" className="form-label">Email:</label>
                    <input value={State.email} onChange={handleChange} type="email" className="form-control" id="email" placeholder="Abc@gmail.com" name="email"  required/>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="Mobile No" className="form-label">Mobile No</label>
                        <input value={State.mobileNo} onChange={handleChange} type="text" class="form-control" placeholder="Mobile No"  name="mobileNo" required/>
                    </div>
                    <div class="col">
                        <label for="DOB" className="form-label">Date of Birth</label>
                        <input value={State.Dob} onChange={handleChange} type="date" class="form-control" placeholder="mm/dd/yyyy"  name="Dob" required/>
                    </div>
                </div>
                <div class="row">
                    <label>Address</label>
                    <div class="col">
                        <input value={State.city} onChange={handleChange} type="text" class="form-control" placeholder="City" name="city"  required/>
                    </div>
                    <div class="col">
                        <input value={State.district} onChange={handleChange} type="text" class="form-control" placeholder="District" name="district"  required/>
                    </div>
                    <div class="col">
                        <select id="inputState" class="form-control" value={State.province} onChange={handleChange} name="province">
                            <option selected>Choose province...</option>
                            <option>Bagmati Province</option>
                            <option>Gandaki Province</option>
                            <option>Lumbini Province</option>
                            <option>Karnali Province</option>
                            <option>Province No.1</option>
                            <option>Sudurpashchim Pradesh</option>
                            <option>Madesh Pradesh</option>
                        </select>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Country" value="Nepal" name="Country" />
                    </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
