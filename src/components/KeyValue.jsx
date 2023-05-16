import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Group5 from "../assets/Group1543.png"
import Group2 from "../assets/Group1547.png"
import Group6 from "../assets/Group1550.png"
import Group3 from "../assets/Group1551.png"
import Group4 from "../assets/Group1553.png"
import Group1 from "../assets/Group1558.png"


const KeyValue = () => {
    const card = [
        { img: Group1, title: "Get noticed by right customer", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis voluptates optio, dolores nam aut libero recusandae consequuntur veniam quidem." },
        { img: Group2, title: "Get noticed by right customer", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis voluptates optio, dolores nam aut libero recusandae consequuntur veniam quidem." },
        { img: Group3, title: "Increase chances of deal closure", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis voluptates optio, dolores nam aut libero recusandae consequuntur veniam quidem." },
        { img: Group4, title: "Profile visitors analytics", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis voluptates optio, dolores nam aut libero recusandae consequuntur veniam quidem." },
        { img: Group5, title: "Technology trends of industry", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis voluptates optio, dolores nam aut libero recusandae consequuntur veniam quidem." },
        { img: Group6, title: "Search analytics", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis voluptates optio, dolores nam aut libero recusandae consequuntur veniam quidem." },
    ]
    const cardContent = card.map((item, i) => <Grid item xs={12} sm={4}  >
 
        <Box sx={{marginLeft:"40px", textAlign: "center", maxWidth: 350,  backgroundColor: "transparent", color: "#eee", marginTop: "60px", marginBottom:"42px"}} >
            <Box
                sx={{ textAlign: "center", padding: "1rem" }}
            >
                <img src={item.img} alt="" />

            </Box>
            <CardContent>
                <Stack
                    direction="row"
                    justifyContent="center"
                >
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "18px", fontWeight: "500px" }}>
                        {item.title}
                    </Typography>
                </Stack>
                <Typography variant="body2" color="#ccc">
                    {item.desc}
                </Typography>
            </CardContent>

        </Box>
    </Grid>)
    return <>
        <div style={{ backgroundColor: "#2B2B2B" }}>
            <Stack

                direction="row"
                justifyContent="center"
                sx={{ paddingTop: "69px" }}>
                <Typography sx={{ color: "#fff", fontSize: "24px", fontWeight: "600px", lineHeight: "28.13px" }}>Our Key Value</Typography>
            </Stack>

            <Grid container  sx={{textAlign:"center", padding:"0 50px"}} >
                {cardContent}
            </Grid>
          

        </div>
    </>
}

export default KeyValue