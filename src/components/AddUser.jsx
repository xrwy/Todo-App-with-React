import React, { useState } from "react";
import UserConsumer from "../context/UserProvider";
var uniqId = require('uniqid');

const AddUser = () => {
    const [inputName, setInputName] = useState("");
    const [inputDepartment, setInputDepartment] = useState("");
    const [inputSalary, setInputSalary] = useState("");
    const [visibility, setVisibility] = useState(true);

    const changeVisibility = () => {
        setVisibility(visibility => !visibility);
    }

    function addUser(dispatch, e) {
        e.preventDefault();
        if (inputName === "" || inputDepartment === "" || inputSalary === ""){
            alert("Do Not Leave Fields Blank");
            return;
        }
        const newUser = {
            id:uniqId(),
            name:inputName,
            department:inputDepartment,
            salary:inputSalary,
        }
        dispatch({type:'ADD_USER', payload:newUser})
        setInputName('');
        setInputDepartment('');
        setInputSalary('');
    }

    const changeInput= (e) => {
        if(e.target.name === 'name'){
            setInputName(inputName => e.target.value)
        }
        else if(e.target.name === 'department'){
            setInputDepartment(inputDepartment => e.target.value)
        }else if(e.target.name === 'salary'){
            setInputSalary(inputSalary => e.target.value)
        }
    }

    return (
        <UserConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (
                        <>
                            <div className="row m-0">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 mb-4">
                            <button className="btn btn-dark btn-block mb-2" onClick={() => changeVisibility()}>
                                {
                                    visibility ? "Hide Add UserForm" : "Show Add User Form"
                                }
                            </button>
                            {
                                visibility ?
                                <div className="card" style={{marginTop:'40px'}}>
                                <div className="card-header">
                                    <h4>Add User Form</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={(e) => addUser(dispatch,e)} name="dd">
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
                                        <button className="btn btn-danger btn-block mt-2" type="submit">
                                            Add User
                                        </button>
                                    </form>
                                </div>
                            </div>
                            : null
                            }
                        </div>
                        <div className="col-md-2"></div>
                            </div>
                        </>
                    )
                }
            }
        </UserConsumer>
    )

}

export default AddUser;