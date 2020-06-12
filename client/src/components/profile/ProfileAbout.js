import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
    profile: {
        kidsbio,
        kidsinterests,
        kidname,
        user: { name }
    }
}) => (
        <div className='profile-about bg-light p-2'>
            {kidsbio && (
                <Fragment>
                    <h2 className='text-primary'>{kidname.trim().split(' ')[0]}'s bio</h2>
                    <p>{kidsbio}</p>
                    <div className='line' />
                </Fragment>
            )}
            <h2 className='text-primary'>{kidname.trim().split(' ')[0]}'s Interests</h2>
            <div className='skills'>
                {kidsinterests.map((kidsinterest, index) => (
                    <div key={index} className='p-1'>
                        <i className='fas fa-check' /> {kidsinterest}
                    </div>
                ))}
            </div>
        </div>
    );

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileAbout;
