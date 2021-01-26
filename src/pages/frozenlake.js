import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FrozenLakePage = () => (
    <Layout>
        <SEO title="Frozen Lake" />
        <h1>Hike to Frozen Lake</h1>
        <h3>11 miles/2,530 ft elevation gain</h3>
        <img src="https://lh3.googleusercontent.com/pw/ACtC-3e8E_AAHZ0QyvNAC_MxCdizbRlBh0NU8cXJmDX2hhp9dGgYolSzQiH0Ck6OoiPvU4w4__D0OjbcGR_S0GYNNhhHCe_MMomWiVci4vGPwPdUuBRLd4AQrUaBNBbaRCf40hpzUmMRuLX2XZ497LmJUFBgrQ=w2052-h1358-no?authuser=0" alt="colorful tundra" title="colorful tundra" />
        <div> 
            <div className="body-container">
                <section className="frozen-card">
                    <p className="p-one">We hiked up to Frozen Lake in early October of last year. It's a fairly ambitious hike,
                    but we knew what we were getting ourselves into because we had tried to get there the year
                    before and got lost up on the tundra. Unfortunately we forgot to bring the cooler that had our 
                    peanut butter and jelly sandwiches in it so we did the whole hike running on Rx bars and trail mix. It was
                    not ideal, and we were pretty sad by the time we were making our way back 
                    to the trailhead.</p>
                </section>
                
                <section className="hiking-pic">
                    <img src="https://lh3.googleusercontent.com/pw/ACtC-3cKbAo3Oif0Qdrb-SfvF6fKaQJ-01osokdCirFjv0dIXLEaYp2aI1imoODI1QZgAzghOL9qfoZOm1tbjuRsCIkJKE_YPaIBl-YOtxuOnnWjEX_4M7jXah3F_bk4NikSXx_0hDL6TK4bEXSmxGK5vXKxew=w900-h1358-no?authuser=0" alt="alpine lake" title="mills lake" />   
                </section>
            </div>

            <div className="body-container">
                <section className="hiking-pic">   
                    <img src="https://lh3.googleusercontent.com/pw/ACtC-3fr1a-a24WqXlhtslcSnmqVgA4fusE_RozuZAqmsy4MJgK6XbGwuzUYeLCXpd_UAClRiWC20nWTATNY1dENMXblhXfsVcN7vZ505lVD8Ks9RZKVgsFxr4yMSDSIMi2kt3jU1ROd-DISnHK8l1UnGoIAAw=w900-h1358-no?authuser=0" alt="alpine lake with mountains" title="black lake" />
                </section>
                <section className="frozen-card">
                    <p className="p-two">The hike starts at the Glacier Gorge trailhead, going up past Alberta Falls and 
                    following the trail to Mills Lake. Mills Lake is probably one of the prettiest places
                    to hang out in Rocky Mountian National Park, as long as it's not a windy day. If you keep 
                    going past the lake there is quite a long stretch of hiking until you make it to Black Lake. 
                    Continue to the right side of Black Lake and go straight up, climbing a small
                    trail next to a waterfall, to get to the tundra. From here I would recommend
                    having a trail map available because it's really hard to see a trail and it's very
                    easy to get lost. Just being up on the tundra is really cool, so even if you just hang out
                    here for a while before heading back it's an awesome trip. It gets harder to 
                    breathe once you are up on the tundra and doing the final ascent to Frozen Lake is tough.
                    It was windy and cold next to Frozen Lake, and we only hung out for a little while before heading back down.</p>
                </section>
            </div>
        </div> 

        <div>
            <section>
                <p>This is a fantastic, challenging hike. 10/10 would recommend to anyone comfortable with
                hiking at elevation.</p>
            </section>
        </div>
    
        <Link to="/hiking/">Go back to the hiking page</Link>
    </Layout>
)

export default FrozenLakePage
