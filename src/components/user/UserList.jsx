import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../slice/userSlice';


const UserList = () => {
    const dispatch = useDispatch()
    const user = useSelector((ele) => ele.user.user)
    console.log(user)


    const onClickHandeler = (x) => {
        dispatch(removeUser(x))
    }

    return (
        <>
            <Link to="/add-User">
                <Button size="small" variant="contained"
                    sx={{ marginLeft: "20%", marginTop: '2%' }}>
                    Add user here
                </Button>
            </Link>
            {user.length > 0 ?
                user.map((ele,i) => {
                    return (
                        <>
                        <div key={i}>
                            <Card  sx={{
                                width: '60%', marginTop: "2%", marginLeft: "20%", height: "20%",
                                backgroundColor: "black", color: "white",
                                borderRadius: "10px 10px 10px 10px"
                            }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {ele.name}
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" sx={{ justifyContent: "center" }}>
                                        {ele.email}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={`/edit/${ele.id}`} >
                                        <Button size="small" sx={{
                                            color: "white",
                                            backgroundColor: 'green'
                                        }}>
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button size="small"
                                        sx={{ marginLeft: "45%", color: "white", backgroundColor: "red" }}
                                        onClick={onClickHandeler}>
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                            </div>
                        </>
                    )
                })
                :
                <>
                    <p style={{ marginLeft: "40%", marginTop: "15%" }}>No user Found</p>
                </>
               
            }
        </>
    )
}

export default UserList;
