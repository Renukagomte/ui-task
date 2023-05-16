import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "../css/style.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import profile1 from "../assets/profile1.png"
import profile2 from "../assets/profile2.png"


const Carousel = () => {
    const feedback = [
        { img: "", title: '"Amazing Product and company"', desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo mollitia delectus fugiat praesentium eum non est quisquam ut debitis minus iure, deleniti eaque! Impedit animi exercitationem cumque similique doloribus non?", name: "" },
        { img: profile1, title: '"Amazing Product and company"', desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo mollitia delectus fugiat praesentium eum non est quisquam ut debitis minus iure, deleniti eaque! Impedit animi exercitationem cumque similique doloribus non?", name: "-Rahul", designation: "Software Engineer" },
        { img: profile2, title: '"Amazing Product and company"', desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo mollitia delectus fugiat praesentium eum non est quisquam ut debitis minus iure, deleniti eaque! Impedit animi exercitationem cumque similique doloribus non?", name: "-Rahul", designation: "Software Engineer" },
        { img: profile2, title: '"Amazing Product and company"', desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo mollitia delectus fugiat praesentium eum non est quisquam ut debitis minus iure, deleniti eaque! Impedit animi exercitationem cumque similique doloribus non?", name: "-Rahul", designation: "Software Engineer" },
        { img: profile2, title: '"Amazing Product and company"', desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo mollitia delectus fugiat praesentium eum non est quisquam ut debitis minus iure, deleniti eaque! Impedit animi exercitationem cumque similique doloribus non?", name: "-Rahul", designation: "Software Engineer" },

    ]
    const feedbackContent = feedback.map((item, i) => <Grid item xs={12} sm={6}  >
        <SwiperSlide style={{ padding: "30px" }}>
            <Card sx={{ maxWidth: 320, marginLeft: "60px", backgroundColor: "#DAF0EC", color: "#333333", border: "2px solid #75C5FF", borderRadius: "15px", height: "406px" }} >
                <CardMedia
                    sx={{ height: "60px ", width: "60px", margin: "30px" }}
                    image={item.img}

                />
                <CardContent sx={{ paddingLeft: "30px", paddingRight: "30px" }}  >
                    <Stack
                        direction="row"
                        justifyContent="center"
                    >
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "18px", fontWeight: 600, color: "#333333" }}>
                            {item.title}
                        </Typography>
                    </Stack>
                    <Typography variant="body2" color="#333333">
                        {item.desc}
                    </Typography>
                    <Stack justifyContent="center" alignItems="flex-end" direction="column">
                        <Box sx={{ width: "70%", textAlign: "center" }}>

                            <Typography variant="body2" color="#333333" sx={{ fontWeight: "600" }}>
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="#333333">
                                {item.designation}
                            </Typography>
                        </Box>
                    </Stack>
                </CardContent>

            </Card>
        </SwiperSlide>
    </Grid>)

    return <>
        <Stack
            direction="row"
            justifyContent="center"
            sx={{ paddingTop: "69px" }}>
            <Typography sx={{ fontSize: "24px", fontWeight: 600, lineHeight: "28.13px", marginRight: "59px" }}>Customers Feedback</Typography>
        </Stack>
        <div style={{ width: "100%" }}>
            <Swiper
                className='test'
                cssMode={true}
                width={400}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={100}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <Grid container sx={{ marginTop: "38px" }}  >
                    {feedbackContent}
                </Grid>

            </Swiper>

        </div>
    </>
}

export default Carousel