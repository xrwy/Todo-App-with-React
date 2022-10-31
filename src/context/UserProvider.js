import React, {useState} from "react";

const UserContext = React.createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users:state.users.filter(user => user.id !== action.payload)
            }
        case "ADD_USER":
            const result1 = state.users.find(user => user.name === action.payload.name && 
                user.department === action.payload.department &&
                user.salary === parseInt(action.payload.salary))
            if(result1){
                alert("This user has been added. Check Information.");
                return state;
            }
            return {
                ...state,
                users:[...state.users, action.payload]
            }
        case "UPDATE_USER":
            if(action.payload.id === 0){
                alert("There is no such user.");
                return 
            }
            const result2 = state.users.find(user => user.name === action.payload.name && 
                user.department === action.payload.department &&
                parseInt(user.salary) === parseInt(action.payload.salary))

            if(result2){
                alert("This User Has Been Updated. Check Information.");
                return state;
            }
            
            const findUser = state.users.find(user => user.id === action.payload.id)
            const indexValue = state.users.indexOf(findUser);
            const updateUser = {
                id:action.payload.id,
                name:action.payload.name,
                department:action.payload.department,
                salary:action.payload.salary,
                update:action.payload.update,
            }
            state.users.splice(indexValue, 1,updateUser)
            
            
            // Method 1
            return {
                ...state
            }

            // Both above and below Both ok. It works on both.

            /*

            // Method 2
            return {
                ...state,
                users:state.users,
            }
            */



            /*
            UPDATE FOR CLASS COMPONENTS

            const result3 = state.users.find(user => user.id === action.payload.id)
            result3.id = action.payload.id;
            result3.name = action.payload.name;
            result3.salary = action.payload.salary;
            result3.department = action.payload.department;
            result3.update = action.payload.update;
            */


        default:
            return state;
    }
}

export const UserProvider = (props) => {
    const [users, setUsers] = useState({users:[
        {
            id:1,
            name:'John',
            department:'Informatics',
            salary:5000,
            update:'',
        },
        {
            id:2,
            name:'Mark',
            department:'Software',
            salary:5000,
            update:'',
        },
        {
            id:3,
            name:'Laly',
            department:'Network',
            salary:5000,
            update:'',
        },
    ],
    dispatch:(action) => {
        setUsers((users) => reducer(users, action))
    }})
    return (
        <UserContext.Provider value={users}>
            {props.children}
        </UserContext.Provider>
    )
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;



/*
export class UserProvider extends Component{
    state = {
        users:[
            {
                id:1,
                name:'John',
                department:'Informatics',
                salary:5000,
                update:'',
            },
            {
                id:2,
                name:'Mark',
                department:'Software',
                salary:5000,
                update:'',
            },
            {
                id:3,
                name:'Laly',
                department:'Network',
                salary:5000,
                update:'',
            },
        ],
        dispatch:(action) => {
            this.setState(state => reducer(state, action))
        },
    }   

    render(){
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
} 
*/
