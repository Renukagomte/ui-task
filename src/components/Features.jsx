import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import img1 from "../assets/Building.png"
import "./../css/features.css"
import img2 from "../assets/Group1429.png"
import img3 from "../assets/Group1430.png"
import img4 from "../assets/Group1608.png"
import img5 from "../assets/Group1610.png"
import img6 from "../assets/Group1657.png"

const Features = () => {
    const features = [
        {
            img: img1,
            title: "REAL ESTATE"
        },
        {
            img: img2,
            title: "INFRA AND ROADS"
        },
        {
            img: img3,
            title: "TRANSPORTERS"
        },
        {
            img: img6,
            title: "SUPPLIERS"
        },
        {
            img: img5,
            title: "CONSULTANTS"
        },
        {
            img: img4,
            title: "INDUSTRY"
        },
    ]
    const featureContent = features.map((item, i) => <Grid item xs={6} sm={4} md={2}     >
        <img src={item.img} alt="" style={{ maxWidth: "8vw" }} />
        <Typography color="#FFFFFF" sx={{ marginBottom: "2px" }}>{item.title}</Typography>
    </Grid>)
    return <>
        <Grid container className='feature' >

            {featureContent}

        </Grid>
    </>
}

export default Features