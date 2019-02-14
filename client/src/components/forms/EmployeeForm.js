import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import employeeFormFields from './employeeFormFields';
import SearchSelect from './SearchSelect';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class EmployeeForm extends Component {
    state = { adminOptions: [], admin: '' };

    componentDidMount() {
        axios
            .get('/api/admins')
            .then(response => {
                console.log(response.data);
                this.setState({
                    adminOptions: response.data,
                });
            })
            .catch(error => console.log(error.response));

        this.props.history.push({
            pathname: '/new',
            state: {
                adminName: '',
            },
        });
    }

    handleChange(event) {
        const adminName = this.state.adminOptions.find(o => o._id === event)
            .name;

        this.props.history.push({
            pathname: '/new',
            state: {
                adminName: adminName,
            },
        });
    }

    renderFields() {
        return _.map(employeeFormFields, ({ label, name, component, type }) => {
            return (
                <Field
                    key={name}
                    component={component}
                    type={type}
                    label={label}
                    name={name}
                />
            );
        });
    }

    render() {
        return (
            <Paper
                style={{
                    width: '80%',
                    margin: '0 auto',
                    padding: '10px',
                    background: '#edeeef',
                }}
                elevation={1}
            >
                <Paper
                    style={{
                        background: '#dbe2ef',
                        padding: '20px',
                        marginBottom: '20px',
                    }}
                >
                    <Typography
                        style={{ textAlign: 'center', color: '#626f78' }}
                        variant="title"
                    >
                        Employee Detail
                    </Typography>
                </Paper>
                <form
                    onSubmit={this.props.handleSubmit(
                        this.props.handleSubmit(this.props.onEmployeeSubmit)
                    )}
                >
                    <Grid container spacing={24}>
                        {this.renderFields()}
                        <Grid item xs={7}>
                            <Paper
                                style={{ margin: '0px 20px', padding: '10px' }}
                            >
                                <FormGroup
                                    style={{ margin: '10px 10px 0 10px' }}
                                >
                                    <FormLabel>
                                        <Typography variant="body1">
                                            Admin
                                        </Typography>
                                    </FormLabel>

                                    <Field
                                        name="_admin"
                                        simpleValue={false}
                                        component={SearchSelect}
                                        options={this.state.adminOptions.map(
                                            ({ name, _id }) => {
                                                return {
                                                    label: name,
                                                    value: _id,
                                                };
                                            }
                                        )}
                                        onChange={e => this.handleChange(e)}
                                        clearable={true}
                                        placeholder="Select a person"
                                    />
                                </FormGroup>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ margin: '30px 30px 0 10px', width: '100px' }}
                    >
                        <Link
                            to="/"
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                display: 'block',
                                height: '100%',
                            }}
                        >
                            Cancel
                        </Link>
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ margin: '30px 0 0 10px', width: '100px' }}
                        type="submit"
                    >
                        Next
                    </Button>
                </form>
            </Paper>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(employeeFormFields, ({ name, type }) => {
        if (!values[name] && values[type] !== 'date') {
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
}

export default withRouter(
    reduxForm({
        validate,
        form: 'employeeForm',
        destroyOnUnmount: false,
    })(EmployeeForm)
);
