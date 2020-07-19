import React from 'react';
import './App.css';

class App extends React.Component {
  render (){
    function Pro() {
      alert("Coming Soon!");
    }
    const styleObj = {

    }
    return (
      <div className="App">
            <div className="psa lykdat"><b>Sponsored:&nbsp;</b><span>Shop for fashion by searching with images on &nbsp;</span><b>LykDat &nbsp;</b><a className="btn btn-primary" href="https://lykdat.com/?utm_source=igdm&amp;utm_medium=banner" target="_blank" rel="noopener noreferrer"><b>TRY IT NOW</b></a></div>
    <div className="promoBanner active">
      <div className="backgroundSkew"></div>
      <nav className="navbar navbar-expand-md container transparent navbar-dark"><a className="navbar-brand" href="/"><img className="d-inline-block align-top" src="/img/icon.png" width="32" height="32" alt="PrismarineJS" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mr-auto">
                  <li className="nav-item"><a className="nav-link" href="/changelog">Changelog</a></li>
                  <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                  <li className="nav-item"><a className="nav-link" href="/download">Download</a></li>
                  <li className="nav-item"><a className="nav-link" onClick={Pro} id="bot">Instagram Bot</a></li>
          </ul>
        </div>
      </nav>
      <div className="container promo pb-5 pt-2 mb-5 text-center">
        <h1 id="SupDM" style={styleObj} className="text-center display-1 col-md-auto">SupremeDM</h1>
        <h3 className="text-center col-12 col-md-8 m-auto">Continue your Instagram direct messages from your phone to your desktop.</h3>
        <div className="download col-md-auto mt-5">
          <h5>Download the latest <span>v1.0.1</span></h5>
          <div className="mt-2 btn-group" role="group" aria-label="Download buttons"><a className="btn btn-outline-light" role="button" href="/download"><i className="mdi mdi-windows"></i><span className="ml-2">Windows</span></a><a className="btn btn-outline-light" id="macBtn" alt="Coming Soon" title="Coming Soon" role="button" href="/download/mac"><i className="mdi mdi-apple"> </i><span className="ml-2">Coming Soon</span></a></div>
        </div><a className="downloadCount mt-3 d-block" href="/">Over 100+ Downloads!</a>
      </div>
    </div>
    <div className="container">
      <section className="features mt-5">
        <h2 className="text-center mb-5">Features</h2>
        <div className="row mt-3 justify-content-center">
          <div className="col-md-4">
            <h5>Continue conversations</h5>
            <p className="text-muted">You will be able to continue your conversations from where you left off on the mobile app.</p>
          </div>
          <div className="col-md-4">
            <h5>2-Factor Authentication</h5>
            <p className="text-muted">SupremeDM has login support for accounts with two-factor authentication enabled.</p>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-md-4">
            <h5>Disable Read Receipts</h5>
            <p className="text-muted">SupremeDM provides a setting that allows you prevent users from receiving read receipts.</p>
          </div>
          <div className="col-md-4">
            <h5>Unfollowers</h5>
            <p className="text-muted">View the list of users that are not following you back.</p>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-md-4">
            <h5>Quote Messages</h5>
            <p className="text-muted">SupremeDM provides a custom and convenient style of quoting chat messages within a conversation</p>
          </div>
          <div className="col-md-4">
            <h5>Save Videos and Images</h5>
            <p className="text-muted">You can save videos and images in the instagram posts that a shared with you in a chat.</p>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-md-4">
            <h5>Search for users</h5>
            <p className="text-muted">You can search for any user and start a conversation with that user.</p>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="screenshots row mt-5 text-center"><a className="col-md-4 mb-4" href="img/login.gif" alt="SupremeDM" target="_blank">Login to Instagram<img className="mt-3 img-fluid" src="img/login.gif" alt="SupremeDM" /></a><a className="col-md-4 mb-4" href="img/startchat.gif" alt="SupremeDM" target="_blank">Search for users and start a conversation<img className="mt-3 img-fluid" src="img/startchat.gif" alt="SupremeDM"/></a><a className="col-md-4 mb-4" href="img/unfollowers.gif" target="_blank">View a list of users not following you back<img className="mt-3 img-fluid" src="img/unfollowers.gif" alt="SupremeDM" /></a><a className="col-md-4" href="img/viewimage.gif" target="_blank">View chat images<img className="mt-3 img-fluid" src="img/viewimage.gif" alt="SupremeDM"/></a></div>
      </section>
      <section className="issues mt-5 text-center">
        <h2>Want more features?</h2>
        <h4><button className="btn btn-primary prominent2" onClick={Pro}>Try &nbsp;<b>SupremeDM Pro</b></button></h4>
      </section>
      <section className="row mt-5 justify-content-center">
        <div className="col-md-5">
          <h4>Issues running SupremeDM on your computer?</h4><span>Please see <a href="/blog" >common issues and fixes </a>for running SupremeDM on your desktop.</span>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <h4>Donations</h4>SupremeDM
          was developed from an open source project and the original source can be used for free by anyone, donations
          and incentives are wholeheartedly welcome.<a className="btn btn-link btn-outline-light" role="button" href="http://paypal.me/supremeciento" target="_blank" rel="noopener noreferrer">Donate via PayPal</a>
        </div>
      </section>
    </div>
    <footer className="pb-5 pt-5 mt-5">
      <div className="footerBackground"></div>
      <div className="footerWrapper container text-center">
        <p className="col-md-8 mx-auto">Please note that this is project ais not affiliated with Instagram.</p>
        <p className="mb-0">Copyright © 2020 Cloud Bots™ SupremeDM</p>
      </div>
    </footer>
      </div>
    );
  }
}

export default App;
