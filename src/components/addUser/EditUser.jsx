import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditUser = () => {
    const user = useSelector((ele) => ele.user.user);
    console.log(user.id);

    const params = useParams();
    console.log(params.id);
    
    const navigate = useNavigate();
    
    const [state, setState] = useState({
        name:"",
        email:''
    });

    const onChangeHandeler = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    };

    const onClickHandeler = () => {
        console.log(state)
        setState({ name: "", email: "" })
        navigate("/")
    };

    return (
        <>
            <TextField id="outlined-basic" label="Name" variant="outlined"
                sx={{ marginLeft: "20%", width: "60%", marginTop: "2%" }}
                onChange={onChangeHandeler} name="name" value={state.name}
            />
            <br /><br />
            <TextField id="outlined-basic" label="Email" variant="outlined"
                sx={{ marginLeft: "20%", width: "60%", marginTop: "1%" }}
                onChange={onChangeHandeler} name="email" value={state.email}
            />
            <br /><br />
            <Button variant='contained'
                sx={{ marginLeft: "25%", width: "50%", marginTop: "2%" }}
                onClick={onClickHandeler}>
                Edited
            </Button>
        </>
    )
}

export default EditUser