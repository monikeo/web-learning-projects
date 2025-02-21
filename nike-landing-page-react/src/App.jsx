
import {Hero,PopularProducts,SuperQuality,Services,SpecialOffer,CustomerReviews,Subscript,Footer} from "./sections";
import {Nav} from "./components";

const App = () => {
    return (
        <main className="w-screen">
            <Nav />
            <section className="padding">
                <Hero />
            </section>

            <section className="padding">
                <PopularProducts />
            </section>

            <section className="padding">
                <SuperQuality />
            </section>

            <section className="padding">
                <Services />
            </section>
            <section className="padding">
                <SpecialOffer />
            </section>
            <section className="padding">
                <CustomerReviews />
            </section>
            <section className="padding">
                <Subscript />
            </section>
            <section className="padding">
                <Footer />
            </section>
        </main>
    )
}

export default App
