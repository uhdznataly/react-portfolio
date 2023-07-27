import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten column">
              <p style={{color:'white', textAlign: "center"}} className="lead">
              Feel free to contact me using my Linkedin which you can find below!
              </p>
            </div>
          </div>
          {/* <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linkedin: <br></br>
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div> */}
        </section>
        );
  }
}