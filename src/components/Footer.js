import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/erich-florow-68777571" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://twitter.com/ultracrass" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
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
