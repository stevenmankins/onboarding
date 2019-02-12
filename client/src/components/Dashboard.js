import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import EmployeeList from './forms/EmployeeList'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    outerContainer: {
        width: '90%',
        margin: '0 auto',
        padding: '10px',
        background: '#edeeef',
        textAlign: 'center',
    },

    headerContainer: {
        background: '#dbe2ef',
        padding: '20px',
        marginBottom: '20px',
    },

    dashTitle: {
        textAlign: 'center',
        color: '#626f78',
    },

    cardContainer: {
        flexGrow: 1,
    },
})

class Dashboard extends Component {
    onEmployeeDelete(employee) {
        console.log(employee)
    }
    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.outerContainer} elevation={1}>
                <Paper className={classes.headerContainer}>
                    <Typography className={classes.dashTitle} variant="title">
                        Dashboard
                    </Typography>
                </Paper>
                <div className={classes.cardContainer}>
                    <Grid container justify="space-evenly" spacing={24}>
                        <EmployeeList onDelete={this.onEmployeeDelete} />
                    </Grid>
                </div>
            </Paper>
        )
    }
}

export default withStyles(styles)(Dashboard)
