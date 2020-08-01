import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'

class HomeIndex extends React.Component {

    

    render() {
        const siteTitle = "Erich Florow"
        const siteDescription = "Erich Florow"


        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>


                <div id="main">

                    <section id="one">

                        <header className="major">

                        <h1>Erich Florow</h1>
                        </header>
                          <h6>IT Service Manager</h6>


                        <p>Application Management 24/7 MES System Gefasoft <a href="https://www.gefasoft.de/" >Gefasoft GmbH</a></p>
                        <p>Problem-,  Service-, Development,  Releasemanagement ITIL</p>
                        <p>Transition Jira Service Desk, Konfiguration, Administration, Processmanagement</p>
                        <p>2nd 3rd level Support</p>
                        <p>ITSM Systeme BMC-Remedy (BMW) ServiceNow (Audi, VW, MAN) Jira (BMW, VW) Kayako </p>
                        <p>Scrum Master</p>


                    </section>

                    <section id="three">

                        <p>Windows Linux AIX Oracle PostgreSQL shell log-analyse</p>
                        <p>gatsby react Semantic Bulma</p>
                        <spam>
                        </spam>
                        <p>Literatur Philosophie Psychologie Sport WebDesign Kunst</p>
                    </section>


                    <section id="four">
                        <h2>erich.florow@gmail.com</h2>

                        <div id="footer">
                            <div className="inner">
                                <ul className="icons">
                                    <li><a href="https://www.linkedin.com/in/erich-florow-68777571" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                                    <li><a href="https://twitter.com/ultracrass" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                                </ul>
                                <ul className="copyright">
                                    <li>shaped by elvispressler with <a href="https://www.gatsbyjs.org/" >gatsby.js</a></li>
                                    <li>Design: <a href="http://html5up.net" >HTML5 UP</a></li>
                                </ul>
                            </div>
                        </div>



                            {/*}<div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>{*/}

                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
