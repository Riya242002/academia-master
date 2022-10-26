import React, { Component } from "react";
import Singleservice from "./SingleService";
const services =[
    {title: 'Network', description:'Blood Buddy is one of several community organizations working together as a network that responds to emergencies in an efficient manner', icon:'fa-user-tie'},
    {title:'Get notified', description:'Blood Buddy Connect works with network partners to connect blood donors and recipients through an automated SMS service and a mobile app.', icon:'fa-mobile-alt'},
    {title:'Totally Free', description:'Blood Budyys ultimate goal is to provide an easy -to-use, easy-to-access, fast, efficient, and reliable way to get life-saving blood, totally Free of cost.', icon:'fas fa-money-check'}
]
class Services extends Component{
    render(){
        return(
            <React.Fragment>
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">What do we do?</h2>
                            <h3 className="section-subheading text-muted">We solve the problem of blood emergencies by connecting blood donors directly with people in blood need.</h3>
                        </div>
                        <div className="row text-center">
                            {services.map((service, index)=>{
                                return <Singleservice {...service} key={index}/>
                            })}
                        </div>
                    </div>
                </section>
            </React.Fragment>)}}
export default Services