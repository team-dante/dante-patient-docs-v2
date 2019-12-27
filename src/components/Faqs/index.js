import React from 'react';
import './index.scss';
import Footer from '../Footer';

const Faqs = () => {
  return (
    <div>
      <div className="faq-container">
        <h1>Patient FAQs</h1>
        <h3>Why do I need to see the time tracking data?</h3>
        <p>Although individual data points may not be meaningful to patients, as more and more data are
           collected, physicians can draw statistical conclusions from these data to improve patient experience.
           For instance, the data may show patients usually spend ~ minutes in a room but the time should not
           be that long, thus improvements needed. Ultimately, time tracking data will be beneficial to you.</p>
        <h3>In what scope my time tracking data would be used?</h3>
        <p>Time tracking data would only be limited for clincial uses to improve service quality. The collected
        data would not be leaked or commercialized in any means.</p>
        <h3>Will I still be tracked outside of the clinic?</h3>
        <p>ASOLUTELY NO. We are not able to, and not allowed to track patients outside of the clinic.</p>
      </div>
      <Footer/>
    </div>

  );
};

export default Faqs;