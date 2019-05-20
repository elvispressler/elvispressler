import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout1'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import {useSpring, animated} from 'react-spring'


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


                <div id="main1">

                    <section id="one">

                        <p>Wenn f&uuml;r einen Augenblick Gott vergessen w&uuml;rde, dass ich eine Stoffmarionette bin und er mir noch einen Fetzen Leben schenken w&uuml;rde: die Zeit w&uuml;rde ich intensiver ausnutzen. Sehr wahrscheinlich w&uuml;rde ich nicht alles sagen was ich denke, aber ich w&uuml;rde &uuml;berlegen, was ich sage. Ich w&uuml;rde die Dinge bewerten, nicht daf&uuml;r, was sie Wert sind, sondern daf&uuml;r, was sie bedeuten. Ich w&uuml;rde weniger schlafen, ich w&uuml;rde mehr tr&auml;umen, denn f&uuml;rjede Minute in der wir die Augen schlie&szlig;en, verlieren wir sechzig Sekunden Licht. Ich w&uuml;rde gehen wenn andere stehen bleiben und aufwachen wenn andere schlafen.Wenn Gott mir einen Fetzen Leben schenken w&uuml;rde, w&uuml;rde ich mich einfach kleiden und mich in die Sonne st&uuml;rzen und nicht nur meinen K&ouml;rper sondern meine Seele &ouml;ffnen. Den Menschen w&uuml;rde ich beweisen, wie sie sich irren wenn sie denken, dass sie sich nicht mehr verlieben k&ouml;nnten wenn sie alt werden, ohne zu wissen, dass sie alt geworden sind, weil sie sich nicht mehr verliebt haben.Einem Kind w&uuml;rde ich Fl&uuml;gel schenken, aber ich w&uuml;rde ihm allein das Fliegenlernen &uuml;berlassen. Den Alten w&uuml;rde ich lehren, dass der Tod nicht mit dem Altwerden kommt, sondern mit dem vergessen-werden.So viele Dinge habe ich von ihnen, den Menschen gelernt. Ich habe gelernt, dass die ganze Welt auf dem Gipfel des Berges zu leben bestrebt ist, ohne zu wissen, dass es das wahre Gl&uuml;ck istden Berg zu besteigen. Ich habe gelernt, dass, wenn ein Neugeborenes mit seinerkleinen Handzum ersten Mal den FingerseinesVaters h&auml;lt,es ihn f&uuml;r den Rest seines Lebensgefangenhat.Ich habe gelernt, dass ein Mensch nur das Recht hat auf einen anderen Mensch hinab zu blicken, wenn er ihm beim Aufstehen hilft. Es sind so viele Dinge, die ich von ihnen gelernt habe, aber das Gelernte wird mir nicht viel n&uuml;tzen, wenn ich aufbewahre und nicht anwende-ungl&uuml;cklicherweise liege ich im Sterben. Sag immer was du f&uuml;hlst und nichtwas du denkst.Wenn ich w&uuml;sste, dass heute das letzte Mal w&auml;re, dich schlafend zusehen, w&uuml;rde ich dich mit all meiner Kraftumarmen und Gott bitten,mich zumSchutzengel deiner Seele zu machen. Wenn ich w&uuml;sste, dass dies die letzten Minuten sind, in denen ich dich sehe, w&uuml;rde ich sagen: &raquo;Ich liebe dich&laquo; und es w&auml;re f&uuml;r michnicht selbstverst&auml;ndlich zu denken, dass du es schon wei&szlig;t.Es gibt immer einen Morgen und das Leben gibt uns immer eine andere Chance, die Dinge gut zu machen. Aber was ist,wenn ich mich irre und das Heute ist alles was uns &uuml;brig bleibt? Dann w&uuml;rde ichgerne sagen, wie sehr ich dich liebe und dass ich dich nievergessen werde.Der Morgen ist niemandem garantiertworden, jung oder alt. Heute kann es das letzte Mal sein, deine Lieben zu sehen. Deshalb warte nicht, mach es jetzt, bevor es kein Morgen mehr gibt. Ich bin sicher, duwirst esberdauern, l&auml;cheln, umarmen und k&uuml;ssen vers&auml;umt zu habenund stattdessen zu besch&auml;ftigt gewesen zu sein, ihnen ihren letzten Wunsch zu erf&uuml;llen.Suche die N&auml;he deiner geliebten Menschen, sageihnen zu wie sehr du sie brauchstund dir liebst. Liebe sieund behandele sie gut. Nimm dir Zeit um ihnen zu sagen: &raquo;Tut mir Leid&laquo;, &raquo;Bitte&laquo;, &raquo;Danke&laquo; und alle Liebesw&ouml;rter, die du kennst. Niemand wird sich andeine geheimen Gedankenerinnern; bitte Gott, dass er dir Kraft und Weisheit gibt, sie auszudr&uuml;cken. Sage deinen Freunden und geliebten Menschen, wie wichtig sie f&uuml;r dich sind.H&ouml;re nie auf zu l&auml;cheln, auch dann nicht, wenn du sehr traurig bist, denn du wei&szlig;t nicht, wen du vielleicht damit gl&uuml;cklich machen kannst. Zeige deinen Freunden und Lieben, wie wichtig sie f&uuml;r dich sindSchicke diesen Brief denen, die du liebst. Wenn nicht heute-morgen wird wie gesternsein. Und wenn du es niemals tust, sei&rsquo;s drum. Was z&auml;hlt, ist jetzt, dieser Augenblick!F&uuml;r euch mit viel Liebe, eurer Freund
                        <p></p>
                        Gabriel Garcia Marquez</p>

                    </section>


                    <section id="four">
                        <h2>erich.florow@gmail.com</h2>

                        <div id="footer">
                            <div className="inner1">
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
