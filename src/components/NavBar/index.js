import React from 'react';

export default class NavBar extends React.PureComponent {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
                <div className="container">
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="http://demos.creative-tim.com/now-ui-kit/index.html" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank">
                            Now Ui Kit
                        </a>
                        <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="./assets/img/blurred-image-1.jpg">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="./documentation/tutorial-components.html" target="_blank">
                                    <i className="now-ui-icons files_paper"></i>
                                    <p>Components</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-neutral" href="https://www.creative-tim.com/product/now-ui-kit-pro" target="_blank">
                                    <i className="now-ui-icons arrows-1_share-66"></i>
                                    <p>Upgrade to PRO</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                    <p className="d-lg-none d-xl-none">Twitter</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">
                                    <i className="fa fa-facebook-square"></i>
                                    <p className="d-lg-none d-xl-none">Facebook</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
                                    <i className="fa fa-instagram"></i>
                                    <p className="d-lg-none d-xl-none">Instagram</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
