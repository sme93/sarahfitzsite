import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import HikeImage from "../components/hikeImage"
import SEO from "../components/seo"

const HikingListPage = () => (
  <Layout>
    <SEO title="Hiking List Page" />
    <div className="title-grid">
      <div className="title-item title-photo-container">
        <div className="title-photo">
          <HikeImage className="test" />
        </div>
      </div>
      <div className="title-item">
        <h1>hiking</h1>
        <p className="intro-p">
          Rocky Mountain National Park and the surrounding areas
        </p>
      </div>
    </div>
    <div className="destinations-grid">
      <div className="destination-item">
        <StaticImage
          className="destination-image"
          height={250}
          width={250}
          src="https://lh3.googleusercontent.com/pw/ACtC-3fKEIKDChRKzpHl0UK1xPfiA8ONYYD5qIEVUnoiiwnnqnHQEoxt0wnydkMmvUJcNI_4dl1tQmpdC-NC_co2Q1tKbcDZ0TsY32N_RNhRSmqn_5nTnBgGvqhdyokdryTH7quxb7v5Ks6ibmfHwSzrp8U-Pg=w900-h1358-no"
          alt="Sky Pond, RMNP"
        />
        <Link className="destination-text" to="/skypond/">
          <div className="destination-title">Sky Pond</div>
          <div className="destination-date">January 2021</div>
        </Link>
      </div>
      <div className="destination-item">
        <StaticImage
          className="destination-image"
          height={250}
          width={250}
          src="https://lh3.googleusercontent.com/pw/ACtC-3e8E_AAHZ0QyvNAC_MxCdizbRlBh0NU8cXJmDX2hhp9dGgYolSzQiH0Ck6OoiPvU4w4__D0OjbcGR_S0GYNNhhHCe_MMomWiVci4vGPwPdUuBRLd4AQrUaBNBbaRCf40hpzUmMRuLX2XZ497LmJUFBgrQ=w2052-h1358-no?authuser=0"
          alt="Frozen Lake, RMNP"
        />
        <Link className="destination-text" to="/frozenlake/">
          <div className="destination-title">Frozen Lake</div>
          <div className="destination-date">October 2020</div>
        </Link>
      </div>
      <div className="destination-item">
        <StaticImage
          className="destination-image"
          height={250}
          width={250}
          src="https://lh3.googleusercontent.com/pw/AM-JKLUE9F2Yi7iugzxkjX4EgpHIlR2_qctW0yj9EyOM5DowPe6eVKDSvmUeEQnOzomaNVtEn4mskay8udx9MbLYqpkse-qysrUoDvmyouBfHZiRu-KNRjpnWfakrYcVAxn2RriVihPngEJcavw2z-JlIeuTBg=w1970-h1304-no?authuser=0"
          alt="Trail to Crystal Lake, RMNP"
        />

        <Link className="destination-text" to="/crystallake/">
          <div className="destination-title">Crystal Lakes</div>
          <div className="destination-date">July 2021</div>
        </Link>
      </div>
    </div>
    <div className="intro-box"></div>
  </Layout>
)

export default HikingListPage
