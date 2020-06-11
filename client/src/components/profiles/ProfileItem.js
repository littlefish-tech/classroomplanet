import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
    profile: {
        user: { _id, name, avatar },
        kidname,
        location,
        kidsinterests
    }
}) => {
    return (
        <div className='profile bg-light'>
            <img src={avatar} alt='' className='round-img' />
            <div>
                <h3>Parent's Name:{" "}{name}</h3>
                <p>
                    Kid's Name: {" "}{kidname}
                </p>
                <p className='my-1'>Location: {" "}{location && <span>{location}</span>}</p>
                <Link to={`/profile/${_id}`} className='btn btn-primary'>
                    View Profile
        </Link>
            </div>
            <ul>
                {kidsinterests.slice(0, 4).map((kidsinterest, index) => (
                    <li key={index} className='text-primary'>
                        <i className='fas fa-check' /> {kidsinterest}
                    </li>
                ))}
            </ul>
        </div>
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};

export default ProfileItem;
