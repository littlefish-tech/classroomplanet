import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const CreateProfile = ({
    createProfile,
    getCurrentProfile,
    profile: { profile, loading },
    history
}) => {
    const [formData, setFormData] = useState({
        kidname: '',
        company: '',
        location: '',
        kidsinterests: '',
        kidsbio: '',
        kidsgrade: '',
        twitter: '',
        facebook: '',
        youtube: '',
        instagram: ''
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const {
        kidname,
        company,
        location,
        kidsinterests,
        kidsbio,
        kidsgrade,
        twitter,
        facebook,
        youtube,
        instagram
    } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    };

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? (
        <Redirect to="/dashboard" />
    ) : (
            <Fragment>
                <h1 className="large text-primary">Create Your Profile</h1>
                <p className="lead">
                    <i className="fas fa-user" /> Let's get some information to build your profile
      </p>
                <small>* = required field</small>
                <form className="form" onSubmit={onSubmit}>
                    <small className="form-text">
                        Tell us more about your family
          </small>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Your Kid's name"
                            name="kidname"
                            value={kidname}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Company"
                            name="company"
                            value={company}
                            onChange={onChange}
                        />
                        <small className="form-text">
                            Tell us where are you work at
          </small>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Location"
                            name="location"
                            value={location}
                            onChange={onChange}
                        />
                        <small className="form-text">
                            City & state suggested (eg. San Francisco, CA)
          </small>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="* Your kid's interest"
                            name="kidsinterests"
                            value={kidsinterests}
                            onChange={onChange}
                        />
                        <small className="form-text">
                            Please use comma separated values (eg. Art, Basketball, Math, Social Study)
          </small>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Your child's grade "
                            name="kidsgrade"
                            value={kidsgrade}
                            onChange={onChange}
                        />
                        <small className="form-text">
                            What grade is your child this year?
          </small>
                    </div>

                    <div className="form-group">
                        <textarea
                            placeholder="Something about your kids"
                            name="kidsbio"
                            value={kidsbio}
                            onChange={onChange}
                        />
                        <small className="form-text">Tell us a little about your kids</small>
                    </div>
                    <div className="my-2">
                        <button
                            onClick={() => toggleSocialInputs(!displaySocialInputs)}
                            type="button"
                            className="btn btn-light"
                        >
                            Add Social Network Links
          </button>
                        <span>Optional</span>
                    </div>
                    {
                        displaySocialInputs && (
                            <Fragment>
                                <div className="form-group social-input">
                                    <i className="fab fa-twitter fa-2x" />
                                    <input
                                        type="text"
                                        placeholder="Twitter URL"
                                        name="twitter"
                                        value={twitter}
                                        onChange={onChange}
                                    />
                                </div>

                                <div className="form-group social-input">
                                    <i className="fab fa-facebook fa-2x" />
                                    <input
                                        type="text"
                                        placeholder="Facebook URL"
                                        name="facebook"
                                        value={facebook}
                                        onChange={onChange}
                                    />
                                </div>

                                <div className="form-group social-input">
                                    <i className="fab fa-youtube fa-2x" />
                                    <input
                                        type="text"
                                        placeholder="YouTube URL"
                                        name="youtube"
                                        value={youtube}
                                        onChange={onChange}
                                    />
                                </div>

                                <div className="form-group social-input">
                                    <i className="fab fa-instagram fa-2x" />
                                    <input
                                        type="text"
                                        placeholder="Instagram URL"
                                        name="instagram"
                                        value={instagram}
                                        onChange={onChange}
                                    />
                                </div>
                            </Fragment>
                        )
                    }

                    <input type="submit" className="btn btn-primary my-1" />
                    <Link className="btn btn-light my-1" to="/dashboard">
                        Go Back
        </Link>
                </form >
            </Fragment >
        );
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    profile: state.profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    withRouter(CreateProfile)
);
