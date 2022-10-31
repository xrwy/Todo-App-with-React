import React from "react";
import UserConsumer from "../context/UserProvider";
import User from "./User";

const Users = () => {
    return (
        <UserConsumer>
            {
                value => {
                    const { users } = value;
                    return (
                        <div style={{marginTop:'50px'}}>
                            {
                                users.length > 0 ?
                                users.map(user => {
                                    return (
                                        <User
                                        key={user.id}
                                        id={user.id}
                                        name={user.name}
                                        salary={user.salary}
                                        department={user.department}
                                        update={user.update}
                                        />
                                    )
                                }) :
                                <>
                                    <div className='row m-0 mb-4'>
                                        <div className='col-md-2'></div>
                                        <div className='col-md-8'>
                                            <div className='card'>
                                                <div className="card-body">
                                                    <h1>To-Do Not Found</h1>    
                                                </div> 
                                            </div>
                                        </div>
                                        <div className='col-md-2'></div>
                                    </div>
                                </>
                            }
                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}

export default Users;