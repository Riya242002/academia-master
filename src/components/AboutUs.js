import React, { Component } from 'react'

export class AboutUs extends Component {
    render() {
        return (
            <>
            <div id="aboutus">
                    <div className=" product pb-0 ">
                        <div className=" pb-3">
                            <h1 className="text-center mt-5" > Start Saving Lives</h1>
                            <p className="text-center">Become a donor or request for blood And help save lives </p>
                        </div>
                        <div className="container-fluid pt-5 my-3 px-4 ">
                            <div className="row icon mx-5 ">
                                <div className="col-md-4 ">
                                    <i className="far fa-calendar-alt fa-7x "></i>
                                <h1>Trusted Donors</h1>
                                <p className="text-center">We solve the problem of blood emergencies by connecting blood donors directly with people in blood need.</p>
                                </div>
                                <div className="col-md-4 ">
                                <i className="fas fa-user-tie  fa-7x"></i>
                                <h1>Save Life</h1>
                                <p>We are a non profit foundation and our main objective is to make sure that everything is done to protect vulnerable persons.Help us by making a gift!</p>
                                </div>
                                <div className="col-md-4 " >
                                <i className="fas fa-shield-alt fa-7x "></i>   
                                    <h1>Innovative</h1>
                                    <p>Blood Buddy is an innovative approach to address global health.We provide immediate access to blood donors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
               
            </div>
            
            </>
        )
    }
}

export default AboutUs

