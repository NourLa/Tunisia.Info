import React from 'react';
//import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import GovsList from '../GovsList/GovsList';
import CathegoriesList from '../CathegoriesList/CategoriesList';
import Navbar from '../../../Components/NavBar/NavBar'
import './ContainerTabs.css';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";


const styles = theme => ({
  /*root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },*/
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'absolute',
    border: 'solid', right:'2%', top:'1%',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  // root: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.paper,
  // },
});


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 12 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class ContainerTabs extends React.Component {
  state = {
    value: 'one',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  /*componentDidMount=()=>{
    axios.get("/tourism/:gov")
  }*/
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className='mainContainerTourism'>
      <Navbar />
        <AppBar position="static" style={{
            backgroundColor: 'white',
            color: 'teal',
            marginTop: '7%',
            width: '93%',
            height: '57px',
            marginLeft: '2%',
          }}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="one" label="Attractions by governorate" />
            <Tab value="two" label="Attractions by categories" />
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          </Tabs>
        </AppBar>
        {value === 'one' && <TabContainer><GovsList/></TabContainer>}
        {value === 'two' && <TabContainer><CathegoriesList/></TabContainer>}
        <ScrollUpButton />
      </div>
    );
  }
}

ContainerTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainerTabs);
