import React from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ServiceAreas from './pages/ServiceAreas'
import ServiceAreaPage from './pages/ServiceAreaPage'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import HOAManagement from './pages/services/HOAManagement'
import CondoManagement from './pages/services/CondoManagement'
import TownhomeManagement from './pages/services/TownhomeManagement'
import LocateUs from './pages/LocateUs'
import PaymentOptions from './pages/PaymentOptions'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Accessibility from './pages/Accessibility'
import LegalDisclaimers from './pages/LegalDisclaimers'
import Sitemap from './pages/Sitemap'
import GeneralContact from './pages/GeneralContact'
import Resources from './pages/Resources'

// Import all area pages
import Addison from './pages/areas/Addison'
import Andersonville from './pages/areas/Andersonville'
import ArlingtonHeights from './pages/areas/ArlingtonHeights'
import Barrington from './pages/areas/Barrington'
import Bartlett from './pages/areas/Bartlett'
import BuffaloGrove from './pages/areas/BuffaloGrove'
import Bucktown from './pages/areas/Bucktown'
import Deerfield from './pages/areas/Deerfield'
import DesPlaines from './pages/areas/DesPlaines'
import DowntownChicago from './pages/areas/DowntownChicago'
import Edgewater from './pages/areas/Edgewater'
import ElkGroveVillage from './pages/areas/ElkGroveVillage'
import Elmhurst from './pages/areas/Elmhurst'
import ElmwoodPark from './pages/areas/ElmwoodPark'
import Evanston from './pages/areas/Evanston'

// Import second batch of area pages
import ForestPark from './pages/areas/ForestPark'
import FranklinPark from './pages/areas/FranklinPark'
import GlenEllyn from './pages/areas/GlenEllyn'
import Glenview from './pages/areas/Glenview'
import Glencoe from './pages/areas/Glencoe'
import GoldCoast from './pages/areas/GoldCoast'
import HanoverPark from './pages/areas/HanoverPark'
import HarwoodHeights from './pages/areas/HarwoodHeights'
import HighlandPark from './pages/areas/HighlandPark'
import HoffmanEstates from './pages/areas/HoffmanEstates'
import HumboldtPark from './pages/areas/HumboldtPark'
import IndianHeadPark from './pages/areas/IndianHeadPark'
import LakeForest from './pages/areas/LakeForest'
import Lakeview from './pages/areas/Lakeview'
import LakeZurich from './pages/areas/LakeZurich'
import Libertyville from './pages/areas/Libertyville'
import LincolnPark from './pages/areas/LincolnPark'
import LincolnSquare from './pages/areas/LincolnSquare'
import Bellwood from './pages/areas/Bellwood'
import Bensenville from './pages/areas/Bensenville'
import Berwyn from './pages/areas/Berwyn'
import Bloomingdale from './pages/areas/Bloomingdale'
import Brookfield from './pages/areas/Brookfield'
import BurrRidge from './pages/areas/BurrRidge'
import CarolStream from './pages/areas/CarolStream'
import Cicero from './pages/areas/Cicero'
import ClarendonHills from './pages/areas/ClarendonHills'
import Crestwood from './pages/areas/Crestwood'
import Darien from './pages/areas/Darien'
import DownersGrove from './pages/areas/DownersGrove'
import Hinsdale from './pages/areas/Hinsdale'
import Justice from './pages/areas/Justice'
import Bronzeville from './pages/areas/Bronzeville'
import Burbank from './pages/areas/Burbank'
import Highwood from './pages/areas/Highwood'
import Lemont from './pages/areas/Lemont'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/general-contact" element={<GeneralContact />} />
          <Route path="/locate-us" element={<LocateUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/legal-disclaimers" element={<LegalDisclaimers />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
          {/* Service Pages */}
          <Route path="/hoa-management" element={<HOAManagement />} />
          <Route path="/condo-management" element={<CondoManagement />} />
          <Route path="/townhome-management" element={<TownhomeManagement />} />
          
          {/* Individual Area Pages */}
          <Route path="/property-management-addison" element={<Addison />} />
          <Route path="/property-management-andersonville" element={<Andersonville />} />
          <Route path="/property-management-arlington-heights" element={<ArlingtonHeights />} />
          <Route path="/property-management-barrington" element={<Barrington />} />
          <Route path="/property-management-bartlett" element={<Bartlett />} />
          <Route path="/property-management-buffalo-grove" element={<BuffaloGrove />} />
          <Route path="/property-management-bucktown" element={<Bucktown />} />
          <Route path="/property-management-deerfield" element={<Deerfield />} />
          <Route path="/property-management-des-plaines" element={<DesPlaines />} />
          <Route path="/property-management-downtown-chicago" element={<DowntownChicago />} />
          <Route path="/property-management-edgewater" element={<Edgewater />} />
          <Route path="/property-management-elk-grove-village" element={<ElkGroveVillage />} />
          <Route path="/property-management-elmhurst" element={<Elmhurst />} />
          <Route path="/property-management-elmwood-park" element={<ElmwoodPark />} />
          <Route path="/property-management-evanston" element={<Evanston />} />
          
          {/* Second batch of area pages */}
          <Route path="/property-management-forest-park" element={<ForestPark />} />
          <Route path="/property-management-franklin-park" element={<FranklinPark />} />
          <Route path="/property-management-glen-ellyn" element={<GlenEllyn />} />
          <Route path="/property-management-glenview" element={<Glenview />} />
          <Route path="/property-management-glencoe" element={<Glencoe />} />
          <Route path="/property-management-gold-coast" element={<GoldCoast />} />
          <Route path="/property-management-hanover-park" element={<HanoverPark />} />
          <Route path="/property-management-harwood-heights" element={<HarwoodHeights />} />
          <Route path="/property-management-highland-park" element={<HighlandPark />} />
          <Route path="/property-management-hoffman-estates" element={<HoffmanEstates />} />
          <Route path="/property-management-humboldt-park" element={<HumboldtPark />} />
          <Route path="/property-management-indian-head-park" element={<IndianHeadPark />} />
          <Route path="/property-management-lake-forest" element={<LakeForest />} />
          <Route path="/property-management-lakeview" element={<Lakeview />} />
          <Route path="/property-management-lake-zurich" element={<LakeZurich />} />
          <Route path="/property-management-libertyville" element={<Libertyville />} />
          <Route path="/property-management-lincoln-park" element={<LincolnPark />} />
          <Route path="/property-management-lincoln-square" element={<LincolnSquare />} />
          <Route path="/property-management-bellwood" element={<Bellwood />} />
          <Route path="/property-management-bensenville" element={<Bensenville />} />
          <Route path="/property-management-berwyn" element={<Berwyn />} />
          <Route path="/property-management-bloomingdale" element={<Bloomingdale />} />
          <Route path="/property-management-brookfield" element={<Brookfield />} />
          <Route path="/property-management-burr-ridge" element={<BurrRidge />} />
          <Route path="/property-management-carol-stream" element={<CarolStream />} />
          <Route path="/property-management-cicero" element={<Cicero />} />
          <Route path="/property-management-clarendon-hills" element={<ClarendonHills />} />
          <Route path="/property-management-crestwood" element={<Crestwood />} />
          <Route path="/property-management-darien" element={<Darien />} />
          <Route path="/property-management-downers-grove" element={<DownersGrove />} />
          <Route path="/property-management-hinsdale" element={<Hinsdale />} />
          <Route path="/property-management-justice" element={<Justice />} />
          <Route path="/property-management-indian-head-park" element={<IndianHeadPark />} />
          <Route path="/property-management-irving-park" element={<IrvingPark />} />
          <Route path="/property-management-itasca" element={<Itasca />} />
          <Route path="/property-management-lake-forest" element={<LakeForest />} />
          <Route path="/property-management-lakeview" element={<Lakeview />} />
          <Route path="/property-management-lake-zurich" element={<LakeZurich />} />
          <Route path="/property-management-libertyville" element={<Libertyville />} />
          <Route path="/property-management-lincoln-park" element={<LincolnPark />} />
          <Route path="/property-management-lincoln-square" element={<LincolnSquare />} />
          <Route path="/property-management-bellwood" element={<Bellwood />} />
          <Route path="/property-management-bensenville" element={<Bensenville />} />
          <Route path="/property-management-berwyn" element={<Berwyn />} />
          <Route path="/property-management-bloomingdale" element={<Bloomingdale />} />
          <Route path="/property-management-indian-head-park" element={<IndianHeadPark />} />
          <Route path="/property-management-irving-park" element={<IrvingPark />} />
          <Route path="/property-management-itasca" element={<Itasca />} />
          <Route path="/property-management-lake-forest" element={<LakeForest />} />
          <Route path="/property-management-lakeview" element={<Lakeview />} />
          <Route path="/property-management-lake-zurich" element={<LakeZurich />} />
          <Route path="/property-management-libertyville" element={<Libertyville />} />
          <Route path="/property-management-lincoln-park" element={<LincolnPark />} />
          <Route path="/property-management-lincoln-square" element={<LincolnSquare />} />
          <Route path="/property-management-mount-prospect" element={<MountProspect />} />
          <Route path="/property-management-bronzeville" element={<Bronzeville />} />
          <Route path="/property-management-burbank" element={<Burbank />} />
          <Route path="/property-management-highwood" element={<Highwood />} />
          <Route path="/property-management-lemont" element={<Lemont />} />
          <Route path="/property-management-little-italy" element={<LittleItaly />} />
          <Route path="/property-management-loop" element={<Loop />} />
          <Route path="/property-management-midlothian" element={<Midlothian />} />
          <Route path="/property-management-morton-grove" element={<MortonGrove />} />
          <Route path="/property-management-north-center" element={<NorthCenter />} />
          <Route path="/property-management-oak-forest" element={<OakForest />} />
          <Route path="/property-management-mundelein" element={<Mundelein />} />
          <Route path="/property-management-naperville" element={<Naperville />} />
          <Route path="/property-management-niles" element={<Niles />} />
          <Route path="/property-management-norridge" element={<Norridge />} />
          <Route path="/property-management-northbrook" element={<Northbrook />} />
          <Route path="/property-management-oak-lawn" element={<OakLawn />} />
          <Route path="/property-management-orland-park" element={<OrlandPark />} />
          <Route path="/property-management-palatine" element={<Palatine />} />
          <Route path="/property-management-park-ridge" element={<ParkRidge />} />
          
          {/* Dynamic Service Area Route - Handles ALL property-management-[area] URLs */}
          <Route path="/property-management-:area" element={<ServiceAreaPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App