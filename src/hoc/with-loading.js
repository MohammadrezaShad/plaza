import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Loading from "../Loading";

export default (WrappedComponent, actions) => {
    const fetchActions = actions.reduce((o, fn) => ({...o, [fn.name]: fn}), {});
    const propTypes = actions.reduce((o, fn) => ({...o, [fn.name]: PropTypes.func.isRequired}), {});

    const LoadingDataHOC = props => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const actionPromises = actions.map(action => props[action.name]());
            Promise.all(actionPromises).then(() => setLoading(false));
        }, []);

        return (
            <Loading loading={loading}>
                <WrappedComponent {...props} />
            </Loading>
        );
    };

    LoadingDataHOC.propTypes = propTypes;

    return connect(null, fetchActions)(LoadingDataHOC);
};







// sample


// import React from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import * as employeeActions from '../actions/employee';
// import withLoading from './HOC/withLoading';

// const EmployeeList = ({employees}) => (
//   <ul>
//     {employees.map(employee => (
//       <li key={employee.id}>{employee.name}</li>
//     ))}
//   </ul>
// );

// EmployeeList.propTypes = {
//   employees: PropTypes.array.isRequired,
// };

// const mapStateToProps = state => ({
//   employees: state.employees,
// });

// const LoadingEmployeeList = withLoading(EmployeeList, [
//   employeeActions.fetchEmployees,
// ]);

// export default connect(mapStateToProps, null)(LoadingEmployeeList);