import About from '../src/components/about/about'
import Contact from './components/contact/Contact'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'
import Header from './components/Header/Header'
import Nav from './components/nav/nav'
import Portfolio from './components/portfolio/portfolio'
import Services from './components/services/services'
import Testimonials from './components/testimonials/testimonials'

const app = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default app