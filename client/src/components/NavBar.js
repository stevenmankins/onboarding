import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Logo from '../images/bayer-logo.svg';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,

    linkStyle: {
        textDecoration: 'none',
        color: 'white',
    },

    linkStyleRight: {
        textAlign: 'right',
        textDecoration: 'none',
        color: 'white',
    },
    button: {
        margin: theme.spacing.unit,
    },
});

const NavBar = props => {
    const { classes } = props;

    return (
        <div style={{ marginBottom: '20px', flexGrow: 1 }}>
            <Grid
                container
                direction="row"
                spacing={8}
                justify="space-between"
                alignItems="center"
                style={{ margin: '10px' }}
            >
                <AppBar>
                    <Toolbar>
                        <Grid container alignItems="center">
                            <Grid item>
                                <Link className={classes.linkStyle} to={'/'}>
                                    <img
                                        src={Logo}
                                        alt="Bayer logo"
                                        style={{
                                            margin: '10px 5px 5px 5px',
                                            width: '70px',
                                        }}
                                    />
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <span>
                                    <Link
                                        className={classes.linkStyle}
                                        to={'/'}
                                    >
                                        {' '}
                                        <Typography
                                            style={{ marginTop: '10px' }}
                                            variant="headline"
                                            color="inherit"
                                        >
                                            Bayer Crop Science
                                        </Typography>
                                    </Link>
                                </span>
                                <span>
                                    <Link
                                        className={classes.linkStyle}
                                        to={'/'}
                                    >
                                        {' '}
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            gutterBottom={true}
                                        >
                                            IT Onboarding
                                        </Typography>
                                    </Link>
                                </span>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            spacing={8}
                            justify="flex-end"
                            alignItems="baseline"
                        >
                            <Grid item>
                                <Tooltip
                                    title="Access Amber"
                                    aria-label="Access VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y"
                                >
                                    <Button
                                        href="https://www.google.com"
                                        target="_blank"
                                    >
                                        <Typography
                                            variant="button"
                                            style={{ color: 'white' }}
                                        >
                                            Amber
                                        </Typography>
                                    </Button>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip
                                    title="Dashboard"
                                    aria-label="Dashboard"
                                >
                                    <IconButton>
                                        <Link
                                            className={classes.linkStyleRight}
                                            to={'/'}
                                        >
                                            <DashboardIcon />
                                        </Link>
                                    </IconButton>
                                </Tooltip>
                            </Grid>

                            <Grid item>
                                <Tooltip title="Add" aria-label="Add">
                                    <IconButton>
                                        <Link
                                            className={classes.linkStyleRight}
                                            to={'/new'}
                                        >
                                            <AddIcon />
                                        </Link>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
            <div className={classes.toolbar} />
        </div>
    );
};

export default withStyles(styles)(NavBar);
