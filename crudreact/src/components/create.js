import React, {Component} from "react";
// import { Router } from "react-router";

class Create extends Component {

    constructor(props) {
        
        super(props)
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeNICNumber = this.onChangeNICNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            business_name: '',
            nic_number: ''
        }
    }

    onChangePersonName (e) {
        this.setState ({ person_name: e.target.value })
    }

    onChangeBusinessName (e) {
        this.setState ({ business_name: e.target.value })
    }

    onChangeNICNumber (e) {
        this.setState ({ nic_number: e.target.value })
    }

    render() {
        return (
            <div style={{marginTop:10}}>
               <br/> 
               <h4>Add a new Business</h4>
               
                <form>
                    <div className="form-group">
                        <label>Person Name :</label>
                        <input type="text" className="form-control"/>
                    </div>
                    
                    <div className="form-group">
                        <label>Business Name :</label>
                        <input type="text" className="form-control"/>
                    </div>
                    
                    <div className="form-group">
                        <label>NIC Number :</label>
                        <input type="text" className="form-control"/>
                        <br/>
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
               </form>
            </div>
        )
    }
}

export default Create;