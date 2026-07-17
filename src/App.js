import { Fragment } from 'react';
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Header from 'components/header';
import HomePage from 'pages/home';
import Footer from 'components/footer';
import GraphicsDesigning from 'pages/services/graphicsDesigning';
import Photography from 'pages/services/photography';
import SmsMarketing from 'pages/services/smsMarketing';
import SocialMediaMarketing from 'pages/services/socialMediaMarketing';
import Website from 'pages/services/website';
import EmailMarketing from 'pages/services/emailMarketing';
import SEO from 'pages/services/seo';
import Advertisements from 'pages/services/advertisements';
import Domain from 'pages/services/domain';
import ContentWriting from 'pages/services/contentWriting';
import ComapanyInfo from 'pages/companyInfo';
import Contact from 'pages/contact';
import Services from 'pages/services';
import Events from 'pages/events';
import Academy from 'pages/academy';
import StartupSupport from 'pages/startupSupport';
import Partner from 'pages/partner';
import PrivacyPolicy from 'pages/legal/privacyPolicy';
import TermsOfUse from 'pages/legal/termsOfUse';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Fragment>

<Helmet>
<meta property="og:title" content="Merin Entertainment"/>
<meta property="og:description" content="Empowering entrepreneurs through digitization — marketing, creative, and IT solutions."/>
<meta property="og:image" content= {`${window.location.origin}/android-chrome-512x512.png`}/>
<meta property="og:image:alt" content="Merin Entertainment"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/> 
<meta property="og:type" content="website"/>
<meta property="og:url" content={`${window.location.origin}`}/>
            </Helmet>

      <Header />
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/graphics-designing" element={<GraphicsDesigning />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/sms-marketing" element={<SmsMarketing />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/webisite" element={<Website />} />
        <Route path="/email-marketing" element={<EmailMarketing />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/advertisements-postboost" element={<Advertisements />} />
        <Route path="/domain-webhost" element={<Domain />} />
        <Route path="/content-writing" element={<ContentWriting />} />

        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/startup-support" element={<StartupSupport />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/company-info" element={<ComapanyInfo />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
