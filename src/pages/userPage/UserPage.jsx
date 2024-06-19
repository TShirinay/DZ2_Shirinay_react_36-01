import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncFunctionFetch} from "../../redux/action";

const UserPage = () => {
    const [showMoreInfo, setShowMoreInfo] = useState([])
    const dispatch = useDispatch()
    const {user, users} = useSelector((state) => state.fetchUsers)

    useEffect(() => {
        dispatch(asyncFunctionFetch())
    }, [])

    const showInfo = (index) => {
        let newArr = [...showMoreInfo]
        newArr[index] = !newArr[index]
        setShowMoreInfo(newArr)
    }

    return (
        <div style={{display:'flex', flexWrap:'wrap',width:'1000px',margin:"0 auto", flexDirection:'column', justifyContent:"space-around"}}>
            {
                users?(
                    users.map((item, index) => (
                        <div style={{padding:'20px',marginTop:'30px',width:'200px', border:'2px solid black',display:'flex', flexDirection:'column', gap:'10px'}} key={index}>
                            <span>{item.name}</span>
                            <span>{item.username}</span>
                            <span>{item.phone}</span>
                            {showMoreInfo[index] && <span>{item.email}</span>}
                            <button onClick={ () => showInfo(index)}>moreInfo</button>
                        </div>
                    ) )
                ):(
                    <span>LOADING...</span>
                )
            }
        </div>
    );
};

export default UserPage;