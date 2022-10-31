import React from "react";
import { useState } from "react";
import UserConsumer from "../context/UserProvider";


export const UpdateUser = () => {
    const [inputName, setInputName] = useState("");
    const [inputDepartment, setInputDepartment] = useState("");
    const [inputSalary, setInputSalary] = useState("");
    const [inputID, setInputID] = useState('');
    const [visibility, setVisibility] = useState(true);

    const isVisibility = () => {
        setVisibility(visibility => !visibility);
    }

    const changeInput = (e) => {
        if(e.target.name === "name"){
            setInputName(inputName => e.target.value)
        }else if(e.target.name === "department"){
            setInputDepartment(inputDepartment => e.target.value)
        }else if(e.target.name === "salary"){
            setInputSalary(inputSalary => e.target.value)
        }else if(e.target.name === "id"){
            setInputID(inputID => e.target.value)
        }
        
    }

    const UserUpdateFunc = (dispatch, e) => {
        e.preventDefault();
        if (inputName === "" || inputDepartment === "" || inputSalary === ""){
            alert("Do Not Leave Fields Blank");
            return;
        }
        const numbers = [1,2,3,4,5,6,7,8,9,10];
        let id;
        if(inputID in numbers){
            id = parseInt(inputID);
        }else{
            id = inputID;
        }

        const date = new Date().toLocaleString().split(',')[0]
        const userUpdated = {
            id:id,
            name:inputName,
            department:inputDepartment,
            salary:inputSalary,
            update:date,
        }

        dispatch({type:"UPDATE_USER",payload:userUpdated})
        setInputName('');
        setInputDepartment('');
        setInputSalary('');
        setInputID('');

    }

    return (
        <UserConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (
                        <>
                        <hr />
                            <div className="row m-0">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 mb-4">
                                <button className="btn btn-dark btn-block mb-2 mt-4" onClick={() => isVisibility()}>
                                    {
                                        visibility ? "Hide User Update Form" : "Show User Update Form"
                                    }
                                </button>
                                {
                                    visibility ?
                                    <div className="card" style={{marginTop:'40px'}}>
                                        <div className="card-header">
                                            <h4>User Update Form</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={(e) => UserUpdateFunc(dispatch,e)} name="dd">
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input
                                                    type={"text"}
                                                    name="name"
                                                    id="name"
                                                    placeholder="Enter Name"
                                                    className="form-control"
                                                    value={inputName}
                                                    onChange={changeInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="department">Department</label>
                                                    <input
                                                    type={"text"}
                                                    name="department"
                                                    id="department"
                                                    placeholder="Enter Department"
                                                    className="form-control"
                                                    value={inputDepartment}
                                                    onChange={changeInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="salary">Salary</label>
                                                    <input
                                                    type={"text"}
                                                    name="salary"
                                                    id="salary"
                                                    placeholder="Enter Salary"
                                                    className="form-control"
                                                    value={inputSalary}
                                                    onChange={changeInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="id">ID</label>
                                                    <input
                                                    type={"text"}
                                                    name="id"
                                                    id="id"
                                                    placeholder="Enter ID"
                                                    className="form-control"
                                                    value={inputID}
                                                    onChange={changeInput}
                                                    autoComplete={"off"}
                                                    />
                                                </div>
                                                <button className="btn btn-danger btn-block mt-2" type="submit">
                                                    Update User
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                : null
                                }
                            </div>
                            </div>
                        </>
                    )
                }
            }
        </UserConsumer>
    )
}

