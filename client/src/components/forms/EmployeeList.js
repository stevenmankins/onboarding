import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEmployees, deleteEmployee } from '../../actions'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { daysBetween } from './daysBetween'
import { bindActionCreators } from 'redux'

//import { Link } from 'react-router-dom'

const Normaltext = {
    color: 'black',
}
const Warning = {
    backgroundColor: '#faf096',
    height: '200px',
    width: '250px',
    margin: '20px',
}

const Dangertext = {
    color: 'white',
}

const Danger = {
    backgroundColor: '#c82121',
    height: '200px',
    width: '250px',
    margin: '20px',
}

const Good = {
    backgroundColor: '#acdeaa',
    height: '200px',
    width: '250px',
    margin: '20px',
}

let DividerColor = false

let New = {}
let NewColor = {}

class EmployeeList extends Component {
    //     constructor(props) {
    //         super(props)
    //         this.onEmployeeDelete = this.onEmployeeDelete.bind(this)
    //     }

    state = { employees: fetchEmployees() }

    componentDidMount() {
        this.props.fetchEmployees()
    }

    onEmployeeDelete = (event, id) => {
        event.preventDefault()

        this.props.deleteEmployee(id)
        // console.log(event)
        // console.log(id)
        // this.props.deleteEmployee(id)
        // console.log(this.props)
        // console.log(this.state)
        //
        // this.setState({
        //     employees: this.state.employees.filter(
        //         employee => employee.id !== this.id
        //     ),
        // })

        //console.log('from EmpList: ' + this.state);
        //this.props.onDelete(this.state.employee)
    }

    renderEmployees() {
        return this.props.employees.map(employee => {
            const id = employee._id
            let start = new Date()
            start = employee.dateStart

            const between = daysBetween(start)

            if (between >= 7) {
                New = Good
                NewColor = Normaltext
                DividerColor = false
            } else if (between > 0 && between <= 7) {
                New = Warning
                NewColor = Normaltext
                DividerColor = false
            } else {
                New = Danger
                NewColor = Dangertext
                DividerColor = true
            }
            return (
                <Grid
                    item
                    style={{
                        display: 'inline-block',
                    }}
                    xs={12}
                    key={employee._id}
                >
                    <Card style={New}>
                        <CardContent>
                            <Typography
                                style={NewColor}
                                variant="title"
                                component="h6"
                            >
                                {employee.firstName} {employee.lastName}
                            </Typography>
                            <Divider
                                style={{ margin: '5px 0 5px 0' }}
                                variant="middle"
                                light={DividerColor}
                            />
                            <div style={{ textAlign: 'Left' }}>
                                <Typography style={NewColor} component="p">
                                    <strong>Manager:</strong> {employee.manager}
                                </Typography>
                                <Typography style={NewColor} component="p">
                                    <strong>Admin:</strong> {employee.admin}
                                </Typography>
                                <Divider
                                    style={{
                                        margin: '5px 0 5px 0',
                                    }}
                                    variant="middle"
                                    light={DividerColor}
                                />
                                <Grid container spacing={24}>
                                    <Grid item xs={6}>
                                        <Typography
                                            style={NewColor}
                                            component="p"
                                        >
                                            <strong>Start Date:</strong>{' '}
                                            {new Date(
                                                employee.dateStart
                                            ).toLocaleDateString('en-US', {
                                                timeZone: 'UTC',
                                            })}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            style={NewColor}
                                            component="p"
                                        >
                                            <strong>Status:</strong> To DO
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button style={NewColor}>Edit</Button>
                            <Button
                                style={NewColor}
                                onClick={(event, key) =>
                                    this.onEmployeeDelete(event, id)
                                }
                            >
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            )
        })
    }

    render() {
        return <div>{this.renderEmployees()}</div>
    }
}

// onClick={() => {
//     this.props.deleteEmployee(employee._id)
//
//     console.log(employee._id)
// }}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { deleteEmployee: deleteEmployee, fetchEmployees: fetchEmployees },
        dispatch
    )
}

function mapStateToProps({ employees }) {
    return { employees }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    // { fetchEmployees, deleteEmployee }
)(EmployeeList)
