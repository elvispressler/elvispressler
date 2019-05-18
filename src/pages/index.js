import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

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


                        <p>Application Management 24/7 MES System Gefasoft</p>
                        <p>Problem-,  Service-, Development,  Releasemanagement ITIL</p>
                        <p>Transition Jira Service Desk, Konfiguration, Administration, Processmanagement</p>
                        <p>3rd level Support</p>
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
                                    <li><a href="https://www.linkedin.com/in/erich-florow-68777571" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                                    <li><a href="https://twitter.com/ultracrass" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                                </ul>
                                <ul className="copyright">
                                    <li>shaped by elvispressler with <a href="https://www.gatsbyjs.org/" target="_blank">gatsby.js</a></li>
                                    <li>Design: <a href="http://html5up.net" target="_blank">HTML5 UP</a></li>
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
