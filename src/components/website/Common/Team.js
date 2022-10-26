import React, { Component } from 'react'
import Singleteam from './SingleTeam'

// Images
import img1 from '../assets/team/boss.jpg'
import img2 from '../assets/team/Kemi.JPG'
import img3 from '../assets/team/rotex.jpg'


const teams =[
    {name:'Victor Ajayi', position:'Frontend Designer', image:img1, icon1:'fa-twitter', 
    icon2:'fa-facebook-f', icon3:'fa-linkedin-in'},
    {name:'Ibra James', position:'Engineer', image:img2, icon1:'fa-twitter', icon2:'fa-facebook-f',
     icon3:'fa-linkedin-in'},
    {name:'Noah Annoi', position:'Accountant', image:img3, icon1:'fa-twitter', icon2:'fa-facebook-f',
     icon3:'fa-linkedin-in'}
]
export default class Team extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="page-section bg-light" id="team">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Supper Heroes!!</h2>
                            <h3 className="section-subheading text-muted">We depend on volunteers! Volunteers make up 96% of our total workforce and carry on our humanitarian work. Blood donation is healthy, our volunteers are available 24/7 to help and donate blood. Blood banks store blood bags but our volunteers are there with you in an emergency for a blood transfusion real time.</h3>
                        </div>
                        <div className="row">
                            {teams.map((team, index)=>{
                                return <Singleteam {...team} key={index}/>
                            })}
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Blood banks store blood bags but our volunteers are there with you in an emergency for a blood transfusion real time.</p></div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
