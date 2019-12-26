import React, { useState, useEffect, createRef, useRef } from 'react';
import './index.scss';

import useScroll from 'react-use-scroll';
import { MenuProvider } from './MenuContext';

import SideNav from './SideNav';
import { Section, SectionFlexLayout, Highlight } from './Sections';
import Footer from '../Footer';

import SignIn from '../../assets/SignIn.PNG';
import Map from '../../assets/LocationTracking.png';
import ZoomIn from '../../assets/zoom-in.jpg';
import RoomDetails from '../../assets/room_details.jpg';
import TimeTracking from '../../assets/TimeTracking.jpg';
import CheckInProcedure from '../../assets/check-in-procedure.jpg';
import CheckOutProcedure from '../../assets/check-out-procedure.jpg';
import Date from '../../assets/Date.png';
import ByDay from '../../assets/by-day.jpg';
import ByWeek from '../../assets/by-week.jpg';
import ByMonth from '../../assets/by-month.jpg';
import Profile from '../../assets/profile.png';
import UserFeedback from '../../assets/user-feedback.jpg';
import QRScan from '../../assets/qr-scan.jpg';
import DanteStaff from '../../assets/dante_staff.jpg';

function useScrollToHash() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      console.log(element);
      if (element) {
        element.scrollIntoView({ block: 'start', behavior: 'instant' });
        // window.scrollBy(0, -58);
      }
    }
  }, [])
}

const Documentation = () => {
  const elRef = useRef([...Array(10)].map(() => createRef()));
  const [active, setActive] = useState(-1);
  const scroll = useScroll();

  // useScrollToHash();

  useEffect(() => {
    const body         = document.body;
    const html         = document.documentElement;
    const windowHeight = window.innerHeight;
    const maxHeight    = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);

    let fromTop = scroll + 44;

    if (fromTop + windowHeight >= maxHeight) {
      setActive(elRef.current.length - 1);
    } else {
      for (let i = 0, l = elRef.current.length; i < l; i++) {
        let ref = elRef.current[i];
        if (
          ref.current.offsetTop <= fromTop
          && ref.current.offsetTop + ref.current.offsetHeight > fromTop
        ) {
          setActive(i);
          break;
        }
      }
    }

  }, [scroll]);

  return (
    <div className="doc-layout">

      <div className="side-nav">
        <MenuProvider value={active}>
          <SideNav/>
        </MenuProvider>
      </div>

      <div className="doc-content">
        <Section title="Dante Patient User Guides"
                 refProp={elRef.current[0]}
                 idProp="header"
                 hType="h1">
          <p>This is a brief walk-through of the Dante Patient app.
             It is strongly correlated with Dante Staff and Dante Scanner apps. See Appendix
             for more details.
          </p>
        </Section>

        <Section title="Introduction"
                 refProp={elRef.current[1]}
                 idProp="introduction"
                 hType="h2">
          <p>Dante Patient is a medical mobile app designated to improve patient visit experience at
             the Department of Radiation Oncology, UCI Medical Center. Improving patient care experience
             is an ongoing and noble goal in medical fields. Nonetheless, due to work overload in the clinic,
             staff may try to take care of as many patients as possible, but on the other hand, they may
             ignore the patient experience (imagine a patient waits for almost an hour but have no clue about
             the clinic outside of the room at all).
          </p>
          <p>Therefore, Dante Patient opens a solution for enhancing visit experience by providing the
             following features:</p>
          <ol>
            <li>Real-time location tracking of physicians inside the radiation oncology clinic</li>
            <li>Timer to track the time a patient spent at each treatment stage</li>
            <li>Display time tracking results in visual-appealing tables and/or graphs</li>
            <li>Profile Page for patients to give feedback regarding this app</li>
          </ol>
        </Section>

        <Section title="Getting Started"
                 refProp={elRef.current[2]}
                 idProp="getting-started"
                 hType="h2">
          <p>If you would like to get a beta version of Dante Patient app and test on your phone:</p>
          <ol>
            <li>Install <strong>TestFlight</strong> from Apple Store.</li>
            <li>Ask our development team to give you the <code>Redeem Code</code> to install the app</li>
          </ol>
          <h4>A few notes before using the app:</h4>
          <ol>
            <li>Please make sure your iOS version is >= 12.2 (we highly recommend you to always update to the
                latest version of iOS
            </li>
            <li>Dante Patient is only available under the iOS platform now. We will explore the Android
                platform in the near future.
            </li>
          </ol>
          <h4>For Technical Users:</h4>
          <p>If you would like to take a peak at our app, please install/clone the project to your
             local directory:</p>
          <code>git clone https://github.com/team-dante/Dante-Patient-Swift.git</code>
          <p>Navigate inside the project directory: <code>cd Dante-Patient-Swift</code><br/>
             Then, open <code>Dante Patient.xcworkspace</code>;
             hit play at the top-left corner of Xcode</p>
        </Section>

        <Section title="Features"
                 refProp={elRef.current[3]}
                 idProp="features"
                 hType="h2">
          <p>Here, we will do a brief walk-through of the core features our app has as of now.</p>
          <SectionFlexLayout media={SignIn} alt="Sign In">
            <h4>Sign In</h4>
            <p>First, before using the app, each patient will receive an account pre-created by
               the clinic staff to log in to the app. The <code>phone number</code> would be
               the username and the <code>PIN</code>, which will be assigned by the staff, would be
               the password in this case. By successfully entering the phone number and PIN, patients
               will be redirected to the <code>Oncology Map</code> tab.
            </p>
            <h4>First Time Users</h4>
            <p>For patients who use the app the first time, they need to
               click <code>Activate Account</code> button to activate their accounts first by entering
               their phone number (as a layer of authentication). For future sign-ins, patients may
               choose to use their <em>FaceIDs/TouchIDs</em> instead of manually
               typing the <code>phone number</code> and <code>pin</code>.
            </p>
          </SectionFlexLayout>
        </Section>

        <Section title="Oncology Map"
                 refProp={elRef.current[4]}
                 idProp="oncology-map"
                 hType="h3">
          <SectionFlexLayout media={Map} mediaText="oncology map">
            <p>
              Patients will see the radiation oncology map after signing in. At the top, that is the waiting list
              feature telling a patient how many other patients are ahead of him/her. On the map, each doctor is
              represented by a pin with a unique color (e.g. Dr. A is red, Dr. B is green). If a doctor enters
              a room, his/her corresponding pin will be shown within the room boundaries (Note: pin locations are
              randomly generated within room boundaries). At the bottom, patients may scroll up/scroll down the
              floating panel to see the list of physicians present in the clinic, which serves as a reference
              point for which physician is represented by which pin color (e.g. Dr. Gan is green). This physician
              tracking feature serves to provide clinic transparency for patients.
            </p>
          </SectionFlexLayout>
          <Highlight title="Zoom In / Out" media={ZoomIn} mediaText="Oncology Map">
            <p>Patients may zoom in / zoom out the map to have a better vision of clinic rooms.</p>
            <p>Little curves at the border of each room signify door locations.</p>
          </Highlight>
          <Highlight title="Room Details" media={RoomDetails} mediaText="Room Details" mediaWidth={70}>
            <p>Patients may view details of some major treatment rooms by clicking
               the <code>Details</code> button in the top-right corner. If patients click on one of the
               highlighted rooms, they can take a peek of what the room looks like.</p>
          </Highlight>
        </Section>

        <Section title="Time Tracker"
                 refProp={elRef.current[5]}
                 idProp="time-tracking"
                 hType="h3">
          <SectionFlexLayout media={TimeTracking} mediaText="time tracking">
            <p>On the second tab, there is a clock as well as a text label that tells which room a patient
               is currently in. By default, if a patient is not in any of the rooms, the text will
              display <code>Private</code> and the timer is 0 min 0 sec. The clock will start running if
            a patient "checks-in" a room, and it will stop running if a patient "checks-out" a room.</p>
            <p>Each patient is assigned a unique QR code, which can be found at the Profile section.
            Patients will be using their QR codes to check-in, and check-out a room.</p>
          </SectionFlexLayout>
          <Highlight title="Check-in Procedures"
                     media={CheckInProcedure}
                     mediaText="Check-in Procedures"
                     mediaWidth={80}>
            <p>We place some types of tablet device, whether it's an Apple iPad or Samsung tablet, which
               serves as a QR code scanner at the front door of a treatment room. Tablets will be running
               our custom Dante Scanner (see Appendix for more details), which can scan in patient's
               unique QR code.</p>
            <p>When a patient is about to enter a room, <code>Linear Accelerator 1</code>, he/she will
               check-in at the iPad that runs the Dante Scanner app at the front door. Then, he/she
               accesses his/her unique QR code under the Profile section of the Dante Patient app and place
               it underneath the iPad's camera in order for the Dante Scanner app to check him/her in. </p>
            <p>Once the patient checks in, a confirmation will be displayed on the Dante Scanner app.
               The timer will start counting how much time has elapsed at this treatment room.</p>
          </Highlight>
          <Highlight title="Check-out Procedures"
                     media={CheckOutProcedure}
                     mediaText="Check-out Procedures"
                     mediaWidth={80}>
            <p>When a patient is about to leave a room, <code>Linear Accelerator 1</code>, he/she will pull
               out his/her unique QR code under Profile section and place it underneath the iPad's camera
               for the Dante Scanner app to check him/her out. Once the patient checks out, a confirmation
               will be displayed on the Dante Scanner app. The visual timer in Dante Patient will stop
               immediately and reset back to 00:00.</p>
            <p>Note: If a patient forgets to check out, but he/she checks-in in front of another room, the
               timer will still reset to 00:00 and start counting the time elapsed in the updated room.</p>
          </Highlight>
        </Section>

        <Section title="Time Tracking Statistics"
                 refProp={elRef.current[6]}
                 idProp="stats"
                 hType="h3">
          <SectionFlexLayout media={Date} mediaText={"date"}>
            <p>Patients can access all of their time-tracking data under the <code>Stats</code> tab, and data
            would be displayed in visual-appealing tables and/or graphs (see below for more details). The
            default time period shown to patients is Day (see image to the right). Clicking the top-most row
            would lead patients to another page for a detailed breakdown about their most recent visits.</p>
            <p>Note: All collected time tracking data would only help clinical staff improve their services
            (e.g. Why people on average wait more than 30 min?). The data would not be commercialized in
            any means.</p>
          </SectionFlexLayout>
          <Highlight title="Reading Stats by Day"
                     media={ByDay}
                     mediaText={"stats by day"}
                     mediaWidth={80}>
            <p>As a patient clicks on the top-most row (his/her most recent visit, visits are sorted in reverse
               chronological order), he/she will be directed to a page that gives a detailed breakdown about the
               visit (see middle image). The colors inside the graph are randomly generated. Whenever patient
               clicks <code>Refresh</code> on the top-right corner, not only it will update the time tracking data
               in real-time, but also generate a new set of colors. At the bottom, the patient can see the total
              visit time of a day.
            </p>
          <p>
            If a patient is very interested in seeing the timeline of a day’s visit, he can click
            on <code>Details</code>, which will lead to a page showing the timeline for a day,
            the <em>start time</em> and <em>end time</em> of each room. If he/she is currently inside a
            room, the <code>end time</code> of the room would be replaced by <code>Present</code>.
          </p>
          </Highlight>
          <Highlight title="Reading Stats by Week"
                     media={ByWeek}
                     mediaText={"stats by week"}
                     mediaWidth={80}>
            <p>After navigating to the <code>Date</code> interface, patients can also view time tracking
            statistics of a week. Assume Patient A has made two visits during September 15 to 21, if he clicks
            on the <code>Details</code> button to the right of the week label, he can see a breakdown of the
            time tracking results this week displayed in bar graphs (see middle image).
            </p>
            <p>Clicking on the <code>Refresh</code> button on the top-right corner will re-generate a new set
              of colors as well as updating the time tracking stats. If Patient A gets confused or very curious of
               how those averages are being calculated, he can click on the <code>info</code> icon, which will
               lead to a page that explains the math behind the scenes.
            </p>
          </Highlight>
          <Highlight title="Reading Stats by Month/Year"
                     media={ByMonth}
                     mediaText={"stats by month"}
                     mediaWidth={80}>
            <p>After navigating back to the <code>Date</code> interface, please see the image above and you may
               have noticed there's a <code>View Monthly</code> label at the very top-right corner of the screen.
              Patients may click on <code>View Monthly</code> to see the time tracking data by month.
            </p>
            <p>The <code>Month</code> table gives a brief overview of the average time per visit within a month.
              By clicking on one of the months, <code>Sep 2019</code>, a patient can see a breakdown in bar graphs
              of how much time he/she has spent at a treatment room on average during September 2019 (see middle
              image). The patient can see the calculated average visit time of September 2019 too. If the patient
              is curious about how these numbers are generated, he/she can click on the <code>info</code> icon
              for a detailed explanation.
            </p>
            <p>If the patient would like to see the time tracking results in a yearly span, they can navigate back
            to the <code>Month</code> table page and click on <code>View Yearly</code> at the very top-right corner.
            Display stats by <em>year</em> will follow the exact UI design as by <em>month</em>.</p>
          </Highlight>
        </Section>

        <Section title="User Profile"
                 refProp={elRef.current[7]}
                 idProp="profile"
                 hType="h3">
          <SectionFlexLayout
            media={Profile}
            alt="profile">
            <p>A patient can access his/her unique QR code (used in check-ins and check-outs) under
               the <code>Profile</code> tab. He can also log out the app by clicking the <code>log out</code> button.
               There will be some services listed here. Right now, the only service that we have is to
               provide feedback for developers on improving this app. Our development team will add more
               services as we see fits.</p>
          </SectionFlexLayout>
          <Highlight title="User Feedback"
                     media={UserFeedback}
                     mediaText={"survey page"}>
            <p>Clicking on the feedback will lead to a survey page asking for patient's opinions about this
               app. At the time the app is officially released to public, the survey objective is no longer about
               the app itself, rather, it will focus on the service quality of clinic staff. The submitted
               feedback from patients will be received by staff using Dante Staff (more details under
               Appendix).</p>
          </Highlight>
        </Section>

        <Section title="What's Next?"
                 refProp={elRef.current[8]}
                 idProp="future"
                 hType="h2">
          <p>Dante Patient, an app to enhance patient visit experience, is an ongoing project.
          So far, our development team has implemented real-time location tracking, time tracking, and graphical
          display of time tracking statistics. Our development team will add, remove, or enhance features when
             necessary. In our next development phase, we will focus on the following areas:</p>
          <ul>
            <li>continue to fine tune the Graph section</li>
            <li>3D image rendering of major treatment rooms (e.g. Linear Accelerator 1) to clear confusions and
              fears of first-time patients who will be treated</li>
            <li>3D image rendering to illustrate a patient's treatment progress (e.g. amount of dosages received
                and amount of dosages still needed)</li>
            <li>Android version of Dante Patient</li>
          </ul>
        </Section>

        <Section title="Appendix"
                 refProp={elRef.current[9]}
                 idProp="appendix"
                 hType="h2">
          <SectionFlexLayout media={QRScan} mediaText="QR Scan">
            <h4>Dante Scanner</h4>
            <p>An iOS app serves as a custom QR code scanner for the Department of Radiation Oncology. When patients
               place their QR codes underneath the tablet's cameras at the front door, the app will communicate with
               our server to keep track of patient's presence (at which room, how much time has elapsed at
               that room, etc.)</p>
          </SectionFlexLayout>
          <SectionFlexLayout media={DanteStaff} mediaText="Dante Staff">
            <h4>Dante Staff</h4>
            <p>An iOS app aimed to facilitate daily clinical operations. It's the "sister" of Dante Patient. Features in
            Dante Staff are inter-dependent to Dante Patient. The primary users would clinic staff instead of patients.
            Under this app, staff can see time tracking statistics for each patient as well as computed statistics
            averages of all patients. Staff can also see patients' location in real-time and how much time a patient
            has spent at each treatment room. In future versions, staff would be able to see submitted surveys
            from patients in Dante Staff. If you would like to read more about Dante Staff, please
               visit <a href="https://team-dante.github.io/dante-staff-docs/">https://team-dante.github.io/dante-staff-docs/</a> for
               more details.</p>
          </SectionFlexLayout>
        </Section>
      </div>

      <div className="footer-wrapper">
        <Footer/>
      </div>

    </div>
  );
};

export default Documentation;
