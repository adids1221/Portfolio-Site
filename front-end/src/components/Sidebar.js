import React from 'react'
import SidebarData from './SidebarData'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Box from '@material-ui/core/Box'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import './Sidebar.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: theme.spacing(2),
    },
    text: {
        display: 'inline-block',
        textAlign: "center",
        color: "white",
    }
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function Sidebar() {
    const classes = useStyles();
    return (
        <div className="Sidebar">
            <div style={{ position: "fixed", top: "20%", marginTop: "-50px" }}>
                <Avatar alt="Adi Mordo" src="https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png"
                    style={{ border: " 7px solid #ca7d60" }} className={classes.large} />
                <List component="nav" aria-label="side-bar">
                    {SidebarData.map((val, key) => {
                        return (
                            <ListItem button key={val.title} >
                                <ListItemLink href={val.url} >
                                    <ListItemText primary={<Box fontSize={20} fontWeight={400} letterSpacing={3} fontFamily="Mulish , sans-serif">{val.title}</Box>} className={classes.text} />
                                </ListItemLink>
                            </ListItem>
                        )
                    })
                    }
                </List>
            </div>
        </div >
    )
}

export default Sidebar