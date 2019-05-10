import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>shaped by elvispressler</li>
                        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
