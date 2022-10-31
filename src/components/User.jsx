import React from 'react';
import PropTypes from 'prop-types';
import UserConsumer from '../context/UserProvider';
import { useState } from 'react';


const User = ({id, name, salary, department, update}) => {
    const [isVisible, setIsVisible] = useState(false);

    function onIsVisibleEvent() {
        setIsVisible(isVisible => !isVisible);
    }
    function onDeleteUser(dispatch){
        const id_ = id;
        dispatch({type:'DELETE_USER', payload:id_})
    }

    return (
        <UserConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (
                        <>
                            <div className='row m-0'>
                                <div className='col-md-2'></div>
                                    <div className='col-md-8 mb-4'>
                                        <div className="card">
                                            <div className="card-header justify-content-between">
                                                <h4 className="d-inline" onClick={() => onIsVisibleEvent()}>
                                                    {name}
                                                </h4>
                                                <i style={{position:'absolute', right:'1rem',top:'0.9rem'}} className="fa fa-trash" onClick={() => onDeleteUser(dispatch)}></i>
                                                {
                                                    isVisible ? 
                                                    <div className="card-body" style={{paddingLeft:'0'}}>
                                                        <p className="card-text">Salary : {salary}</p>
                                                        <p className="card-text">Department : {department}</p>
                                                        <p className="card-text">
                                                            {
                                                                update === '' ? '' : 
                                                                <>
                                                                    Update : {update} Made in history.
                                                                </>
                                                            }
                                                        </p>
                                                        <p className="card-text">ID : {id}</p>
                                                    </div> : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                <div className='col-md-2'></div>
                            </div> 
                        </>
                    )
                }
            }
        </UserConsumer>
    )
}

export default User;


User.propTypes = {
    id:PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name:PropTypes.string.isRequired,
    salary:PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    department:PropTypes.string.isRequired,
    update:PropTypes.string.isRequired,
}

User.defaultProps = {
    id:0,
    name:'Null',
    salary:'0',
    department:'Null',
    update:'',
}