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
        const siteTitle = "elvispresser"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">

                        <header className="mayjor">
                            <h1>Erich Florow</h1>
                        </header>
                        <p>IT Service Manager</p>

                      {/*<ul className="actions">
                        <li><a href="#" className="button">for money</a></li>
                       </ul>*/}

                        <p>Application Support 24/7 MES System Gefasoft</p>
                        <p>Problem-,  Service-, Development,  Releasemanagement ITIL</p>
                        <p>Transition Jira Service Desk, Konfiguration, Administration, Processmanagement</p>
                        <p>3rd level Support</p>
                        <p>ITSM Systeme BMC-Remedy Jira Kayako ServiceNow</p>
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
                        <h2>Kontakt zu mir</h2>

                                      <div className="row">
                                         <div className="8u 12u$(small)">
                                             <form method="post" action="https://formspree.io/email@domain.tld">
                                               <div className="row uniform 50%">
                                                 <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                                 <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                                 <div className="12u"><textarea name="message" id="message" placeholder="Nachricht" rows="4"></textarea></div>
                                              </div>
                                             </form>
                                               <ul className="actions">
                                               <li><input type="submit" value="Senden" /></li>
                                               </ul>
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
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
