import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
function Navbar(){
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
          },
          menuButton: {
            marginRight: theme.spacing(2),
          },
          title: {
            flexGrow: 1,
          },
          menu:{
              background:"#6e6d6d",
              zIndex:1301
          },
          text:{
              fontFamily: "Sukhumvit Set",
              fontSize:"16px",
          },
          test1 :{
            flexGrow: 1,
            fontFamily: "Sukhumvit Set"
          }
        }));
      const classes = useStyles();
return(
    <div>
      <div className={classes.root} >
        <AppBar className={classes.menu} >
        <Toolbar >
        <Typography  className={classes.test1}>
        Operation Frontend Version : 2.5.5
        </Typography>
        <Typography className={classes.text}>
        Username : FWDGUEST91 Login Date : 09/06/2020 16.31
        </Typography>
        </Toolbar>
        </AppBar>
        </div>
    </div>
)
}
export default Navbar;