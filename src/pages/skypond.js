import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SkyPondPage = () => (
    <Layout>
        <SEO title="Sky Pond" />
        <h1>Hike to Sky Pond</h1>
        <h3>8.5 miles/1,761 ft elevation gain</h3>
        <img src="https://lh3.googleusercontent.com/pw/ACtC-3fKEIKDChRKzpHl0UK1xPfiA8ONYYD5qIEVUnoiiwnnqnHQEoxt0wnydkMmvUJcNI_4dl1tQmpdC-NC_co2Q1tKbcDZ0TsY32N_RNhRSmqn_5nTnBgGvqhdyokdryTH7quxb7v5Ks6ibmfHwSzrp8U-Pg=w900-h1358-no" alt="cathedral spires" className="align-left" title="cathedral spires at Sky Pond" />
        <p>Sky Pond is one of our favorite hikes. <span className="emphasis">There is a very misleading sign
        right before you ascend the waterfall portion, leading many hikers to think
        that the lake at the top of the waterfall is Sky Pond.</span> It is not, it's the Lake of
        Glass. Continue up and to the right of the Lake of Glass and you will find
        the trail up to Sky Pond. The first two times we made it to the Lake of
        Glass we thought we had reached Sky Pond and stopped there. From Lake of Glass, it's an easy
        trek up to see the cathedral spires above Sky Pond.</p>
        <p>We decided to make our hike to Sky Pond our First Hike of the Year and headed
        up there on New Year's Day. The snow on the trail was packed, so we were fine going up with just
        microspikes. The ranger at the trailhead warned us that there was some danger of avalanche as you
        approach Timberline Falls, so we were wary on our way up, but it looked fine once we got there.
        The falls were completely frozen and the climb up was cold, but not wet. Once we got to the top of the falls
        we were able to walk across a frozen solid Lake of Glass and bypass some of the trail.
        Once we made it to Sky Pond we did some celebratory burpees on the ice and then headed back down. It
        was a beautiful, sunny day, and a great way to start off the new year.
        </p>
        <Link to="/hiking/">Go back to the hiking page</Link>
    </Layout>
)

export default SkyPondPage
