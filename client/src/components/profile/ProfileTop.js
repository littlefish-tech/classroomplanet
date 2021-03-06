import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
    profile: {
        company,
        location,
        website,
        social,
        kidname,
        user: { name, avatar }
    }
}) => {
    return (
        <div className='profile-top bg-primary p-2'>
            <img className='round-img my-1' src={avatar} alt='' />
            <h1 className='large'>{name}</h1>
            <h2 >{name.trim().split(' ')[0]}'s kid's name is {kidname}</h2>
            <p className='lead'>
                {company && <span> {name.trim().split(' ')[0]} work at {company}</span>}
            </p>
            <p>Live at {" "}{location && <span>{location}</span>}</p>
            <div className='icons my-1'>
                {website && (
                    <a href={website} target='_blank' rel='noopener noreferrer'>
                        <i className='fas fa-globe fa-2x' />
                    </a>
                )}
                {social && social.twitter && (
                    <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-twitter fa-2x' />
                    </a>
                )}
                {social && social.facebook && (
                    <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-facebook fa-2x' />
                    </a>
                )}
                {social && social.youtube && (
                    <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-youtube fa-2x' />
                    </a>
                )}
                {social && social.instagram && (
                    <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-instagram fa-2x' />
                    </a>
                )}
            </div>
        </div>
    );
};

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileTop;
