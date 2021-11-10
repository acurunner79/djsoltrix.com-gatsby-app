import React from 'react'
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import Footer from '../components/Footer/Footer'
import { Carousel } from 'react-bootstrap'
import '../styles/bio.css'


const Bio = () => {

    return (
        <div>
            <TopNav />
            <Hamburger />
            <ScrollButton />
            <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png" alt="soltrix"/>
            {/* <h1 id="gig-header">Bio</h1> */}
            <div id="bio-container">
                <div id="bio-upper">
                    <img className="bio-images" src="https://lh3.googleusercontent.com/a6nrpjdkrfP4HF8MbMcbB0dzeed437vK2SXvQgjgf_aoxRlLEBusOhiMRvjPJmcrEDH07iI6HfGWxkbdrSsdwmQiA2RlD5YKdWzW7MWe2F16AbTH3edlWEKr0nE1rpqEW0h-XBzTtMtzOOYEHqgIYcYtggG5KM9MHi2_YUM6i0LksroxF43wFEcmVonGrztobSQXnY64UaxQ9TtN25H3BNOUo42RJofS7Bpki2q-Fg1pKz1X9OglmJXI5PQ03D01jFnTPIrS9oGdtl3j3Jh8XE_sikXgQDb7bVFHiWerSPZriog9zVd_7SILmyKl4J9gkuUppY3Oeqmh1zNsyKM5pHaqZ9cF5QU7NirglCjKC2MT3_L3yn28OuFPqQzSUGDeV94dC0Ezx_y4LhQ-wK7n7ZAjz3WWOpcbYhTGABK3_mvo5eyx96TO9-yzn1fc6r7ehq4majvfdJxiB9-N6mp2O-zEytFKnSnmWXDjvO_GisPidIUMAqlb4sbjv8NeneuNf4TEE4cnLVjZYivXi7yGEnex5KGskwHZ94ep91PhtViljINZoMWkGgsqichRS9GDwjYnB4ufcuGn4oxcCHDHxIGIzgMFOmUo76vwFvfnkAYB_Eqilz_AjQSg9i_xIUqCDLTU6ZUJ1rJPdBfQ630YXcBUNv7yIRqGDWgO5dLrCnnshjrHSz0dFiIpvlU9VR75OV9HAYxNVmfRpTm37wEEOis=w650-h974-no?authuser=0"/>
                    <div id="upper-paragraph">
                        <p className="bio-paragraph">David Rodriguez, known professionally as DJ Soltrix, is a Latin-American DJ and music producer from Tampa, FL. Born on December 2, 1985, he became interested in music at an early age because of his father's background in local radio and the influence of other DJs' mixes. His main inspiration, however, came from having full access to his father's production studio to practice creating his own mixes.</p>
                            <br/>
                        <p className="bio-paragraph">Throughout the 2000s, David answered his calling from spending hours and hours of bedroom DJing to eventually landing his first private event bookings and local nightclub residencies within the Tampa Bay area. It wasn't until 2008 when DJ Soltrix really became popular in his community after landing his first Latin radio mix-show on 92.5 Maxima FM (WYUU). As an official radio DJ now, his career continued blooming with success as he was mixing live every week at some of the most prestigious nightclubs in the city of Tampa. </p>
                            <br/>
                    </div>
                </div>
                <div id="bio-lower">
                    <div id="carousel-container">
                        <Carousel fade="true" pause="hover" variant="dark" controls="true">
                            <Carousel.Item >
                                <img className="bio-images" src="https://lh3.googleusercontent.com/OGddpTe9JojvYV4tE5hr9XHXGKqSbRSlVUQ47XgVqDk3vir-quKquMEDPVhJYVPd_kELgR3UD9H1qBtNtTr8hN6QO9L0Y01_doiHN8R0vGNP61Uh4MNwIOQzTg1J8Jvcxo7A1_yXyNz7IkYr0LSoPvnpHT3obrupiR4qJH6Dp3EDhdLNtY4DTh-QGuoasgDv-NBBWIqVXT-cYCCVmTpWdNWFlHq4fEqd77cVV_IBUUrEpWIRT3U3wvuGSolgrVI9hYwLK98lTmAa9yg6eDyS9GAg8hWVfHLiqGt9lOKfrVlQt-2GsFRj2wOpmW3OSqv2QFudmoGe9hZ-Wtf9rqSWNrXAFyX3sJ88Gb7Eu2Ou2R7cp-u401jX2ptVRHyXo0kb6BQwc9Q7VMl7-BEQhGuYjZ7zeAeQp-2s3ATKOa2TOnmM6XvVxY0gfgxhbNmi7PJQbo7panNQkB3QGhtngEWJ3aBdBSkLGKVELm9aEqh_jW41MR0umOVIHrbmZai0HOWtfJbybEnzitLkYPejhO-GnPT5AlOR0cNbB3zrFH_cScHeENyPyxba05GsyT1CE1UZvZVOAW1UyaKtQbY-eRA1qJkbtU3zSp3CWNIPKijRIBM7A1p3zqAq6L2EVRpEkhdbecQTvqVxPuGU-PghnAmB7OArez9T0nDCxPWzj26K_VZmM18mB0PWL9mwix5QuEjrU_AlsghNLw5vv6VMaR0XicI=w650-h974-no?authuser=0"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="bio-images" src="https://lh3.googleusercontent.com/yN687SycCFFnvirfKLid5CU0SMDIjLt_Cg3X5v1XuD944MnKBUiN9nlB4sUPUyBNqT1BvQpMaJmexitycEdTU3BM2y7iwZ-99AgV3kpVQxifewFErU9WRGXWx05aLcPKVm98j4omzc3EIbeCrexAW2PIq4fcptVRXUfcYzQpaJdwEqGb4zW4prqEFU-8FzSMUE0aF0JClWGyIJgUMbtbcvPWbOdgo0In-YNAly_2wxbdVP-i1jd50nhlaRs31FVo9qU2Op7xe-lEWi88EJv29GEKOKW4ix4flg_CqBsyhPjdsnXwigDSYKCYJodyvHIu3rSK71n6v0qLsuV7I8dXXDrPZ4qGDjvHXQpvKRSVrCFO9lm6u3RC-1SQz7gXFXvVKiS0kB5qwRxOmkYikdNHuBmMpZqVVyrTIA-rDVFjzPRj8rGErUD6lnLkj4vCQi7zSkB0JI0Lmk-2M3SxgtH4_EutuuBTE3qpDP87c9Ygk19-U1AbGDT2DQjwZSoOs6BbN4GJ_05tJkLM5xqhROmW_wBIeAJ-dfbppIfiz5py_BaNsikcj0QEukn596_sjN_dhaXzKIIQohBdaxHpd9RyTkesbXDCqG4SPX2evPACp349dKG6h0ZQKvGmihNNk20xv86HLDnFHs_iMA5d3kzN9lI4COc9SLc8ZVhAjpLrvP3CHCZ84Z5zJT6W2AfkDeHTeTYkZcMXThRWRwk33cpRN0M=w650-h974-no?authuser=0"/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div id="lower-paragraph">
                        <p className="bio-paragraph">Around this same timeframe, DJ Soltrix developed an interest in learning how to produce and he enrolled himself into The International Academy of Design & Technology (IADT). Using the knowledge he learned, it didn't take long for David to build a small production studio in his home and start creating his own music.</p>
                            <br/>
                        <p className="bio-paragraph">In 2013, DJ Soltrix produced his first bachata remixes which included his versions to "Clocks" by Coldplay and "Young & Beautiful" by Lana Del Rey. Both projects accelerated his popularity on a worldwide scale and it wasn't until the next year, in 2014, where he discovered the Latin dance community. Upon noticing the recognition given to him from the dance world, DJ Soltrix dedicated the next couple years to doing bachata remixes only for that community. By 2015, he released his bachata remixes to "Chivalry Is Dead" by Trevor Wesley, "Invincible" by Borgeous, "Faded" by ZHU, and many more that have made him successful.</p>
                            <br/>
                        <p className="bio-paragraph">Throughout the years after and to this present day, DJ Soltrix is widely regarded as the "father of bachata remixes" amongst his peers. While he continues to travel the world to play at Latin dance music festivals and various special events, he can only hope that his crowd feels the passion and dedication he's given to the work he has provided to each dancer.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Bio