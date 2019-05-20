import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';

import Menu from '@material-ui/icons/Menu';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import Phonelink from '@material-ui/icons/Phonelink';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import Drafts from '@material-ui/icons/Drafts';
import Person from '@material-ui/icons/Person';

const styles = {
  list: {
    width: 250,
  },
};

class NavDrawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button key='Account Settings'>
            <ListItemIcon><Person /></ListItemIcon>
            <ListItemText primary='Account Settings' />
          </ListItem>
          <ListItem button key='Paired Devices'>
            <ListItemIcon><Phonelink /></ListItemIcon>
            <ListItemText primary='Paired Devices' />
          </ListItem>
          <ListItem button key='Invites'>
            <ListItemIcon><Drafts /></ListItemIcon>
            <ListItemText primary='Invites' />
            <Badge badgeContent={4} color="primary">
            </Badge>
          </ListItem>
          <ListItem>
          </ListItem>
          <Divider />
          <ListItem button key='Triggers'>
            <ListItemIcon><PlaylistAddCheck /></ListItemIcon>
            <ListItemText primary='Triggers' />
          </ListItem>
          <Divider/>
          <ListItem button key='Logout'>
            <ListItemIcon><PowerSettingsNew /></ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div style={{background: '#1C3A6E'}}>
        <Button onClick={this.toggleDrawer('left', true)} style={{color: 'white'}}><Menu /></Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);
