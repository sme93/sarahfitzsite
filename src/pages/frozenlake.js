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
        <p>We hiked up to Frozen Lake in early October of last year. It's a fairly ambitious hike,
            and luckily we knew what we were getting ourselves into because we had tried to get there the year
            before but got lost up on the tundra. Unfortunately we forgot to bring the cooler that had our 
            peanut butter and jelly sandwiches in it so we did the whole hike running on Rx bars and trail mix. It was
            not ideal, and we were pretty sad by the time we were making our way back 
            to the trailhead.</p>
        <p>The hike starts at the Glacier Gorge trailhead, going up past the falls and 
            following the trail to Mills Lake. Mills Lake is probably one of the prettiest places
            to hang out in Rocky Mountian National Park, as long as it's not a windy day. If you keep 
            going past the lake there is quite a long stretch of hiking until you make it to Black Lake. 
            Continue to the right side of Black Lake and go straight up, climbing a small
            trail next to a waterfall, to get to the tundra. From here I would recommend
            having a trail map available because it's really hard to see a trail and it's very
            easy to get lost. Just being up on the tundra is really cool, so even if you just hang out
            here for a while before heading back it's an awesome trip. It gets harder to 
            breathe once you are up on the tundra and doing the final ascent to Frozen Lake is tough.
            It was windy and cold next to Frozne Lake, and we only hung out for a little while before heading back down.</p>
        <p>This is fantastic, challenging hike. 10/10 would recommend to anyone comfortable with
            hiking at elevation.</p>
        <Link to="/hiking/">Go back to the hiking page</Link>
    </Layout>
)

export default FrozenLakePage
