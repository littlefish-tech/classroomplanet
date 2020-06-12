import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DashboardActions = (
    {
        profile: {
            kidname,
        }
    }
) => {
    return (
        <div className='dash-buttons'>
            <Link to='/edit-profile' className='btn btn-light'>
                <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
            <Link to='/add-education' className='btn btn-light'>
                <i className='fas fa-graduation-cap text-primary' /> Add {kidname.trim().split(' ')[0]}'s Education
      </Link>
        </div>
    );
};
DashboardActions.propTypes = {
    profile: PropTypes.object.isRequired
};

export default DashboardActions;
