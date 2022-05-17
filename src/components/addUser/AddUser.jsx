import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../slice/userSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const navigate = useNavigate();

    const id = uuidv4();

    const dispatch = useDispatch();

    const [state, setState] = useState({
        name: "",
        email: ""
    });

    const onChangeHandeler = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    };

    const onClickHandeler = () => {
        setState({ name: "", email: "" })

        dispatch(addUser({ id: id, name: state.name, email: state.email }))

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
                Add
            </Button>
        </>
    )
}

export default AddUser
