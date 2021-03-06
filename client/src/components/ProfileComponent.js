import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import RestoreIcon from "@material-ui/icons/Restore";
import Grid from "@material-ui/core/Grid";
import profilePic from "../assets/profilePic.png";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Profile() {
  const [firstname, setFirstName] = React.useState("FirstName");
  const [lastname, setLastName] = React.useState("LastName");
  const [email, setEmail] = React.useState("Composed TextField");
  const [number, setNumber] = React.useState("Composed TextField");
  const [address, setAddress] = React.useState("Composed TextField");
  const [country, setCountry] = React.useState("Composed TextField");


  const handleChange = (event) => {
    setFirstName(event.target.value);
    setLastName(event.target.value);
    setEmail(event.target.value);
    setNumber(event.target.value);
    setAddress(event.target.value);
    setCountry(event.target.value);
  };
  return (
    <div>
      <div className="nav-pro">
        <Grid container spacing={3} direction={"row"}>
          <Grid className="nav-list" item xs={3} sm={3} style={{marginTop:'12px',backgroundColor:'#FCF7DB'}}>
            <h1 style={{ marginLeft: "30px" }}>User Profile</h1>
            <List component="nav" aria-label="mailbox folders">
              <Link to="/profile" style={{textDecoration: "none",color: "black"}}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: "#99B27F"}}>
                      <PersonOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="General" />
                </ListItem>
              </Link>
              <Divider />
              <Link to="/profilesettings" style={{textDecoration: "none",color: "black"}}>
                <ListItem button divider>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: "#99B27F"}}>
                      <SettingsOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Settings" />
                </ListItem>
              </Link>
              <Link to="/profilearchive" style={{textDecoration: "none",color: "black"}}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: "#99B27F"}}>
                      <RestoreIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Archive" />
                </ListItem>
                <Divider light />
              </Link>
            </List>
            <Grid item xs={3} sm={3} style={{color:"black",marginLeft:'125px',marginTop:'250px'}}>
              <a href="/login" style={{color:'black',textDecoration:'none'}}><h3>Log Out</h3></a>
            </Grid>
          </Grid>
          <Grid className="grid-right" container sm={5}>
            <Grid item xs={6} sm={5}>
              <img
                src={profilePic}
                style={{ marginTop: "30px" }}
                alt="profile picture"
              />
            </Grid>
            <Grid item style={{textAlign:'Left',marginLeft:'20px',marginTop:'50px'}}>
              <h1>{firstname} {lastname}</h1>
              <p><i>@username</i></p>
              <p><i>General area, Country</i></p>
            </Grid>
            <Grid item xs={6} sm={5}>
              <FormControl style={{ margin: "10px" }} disabled>
                <InputLabel htmlFor="component-disabled">First Name</InputLabel>
                <Input
                  id="component-disabled"
                  value={firstname}
                  placeholder={firstname}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }} disabled>
                <InputLabel htmlFor="component-disabled">Email</InputLabel>
                <Input
                  id="component-disabled"
                  placeholder={email}
                  value={email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }} disabled>
                <InputLabel htmlFor="component-disabled">Address</InputLabel>
                <Input
                  id="component-disabled"
                  placeholder={address}
                  value={address}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={5}>
              <FormControl style={{ margin: "10px" }} disabled>
                <InputLabel htmlFor="component-disabled">Last Name</InputLabel>
                <Input
                  id="component-disabled"
                  placeholder={lastname}
                  value={lastname}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }} disabled>
                <InputLabel htmlFor="component-disabled">
                  Phone Number
                </InputLabel>
                <Input
                  id="component-disabled"
                  placeholder={number}
                  value={number}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }} disabled>
                <InputLabel htmlFor="component-disabled">Country</InputLabel>
                <Input
                  id="component-disabled"
                  placeholder={country}
                  value={country}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid container spacing={3} direction={"row"}>
              <Grid style={{ marginLeft: "120px" }} item xs={12} sm={6}>
                <Button component={Link} to="/profilesettings" >
                  <p>Edit Profile Information</p>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
