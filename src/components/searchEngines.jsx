import React from 'react'
import "./../css/searchEngines.css"
import { Box, Button, Radio, Stack, TextField, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import Features from './Features'
const SearchEngines = () => {

    return <>

        <div className='bg-img'>
            <div className='backdrop'>
                <Typography className='search-engine'>
                    <Stack

                        direction="row"
                        justifyContent="end"
                        sx={{ marginTop: "41px", marginRight: "100px" }}>
                        <Button sx={{ borderRadius: 8, backgroundColor: "#46B19D" }} variant="contained"><PersonIcon />Log In</Button>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        sx={{ paddingTop: "217px" }}>
                        <Typography sx={{ marginBottom: "22px", color: "#fff", fontSize: "25px", fontWeight: "bold" }}>Search Engines Of Construction Industry</Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="center"
                    >
                        <Box className="searchBox">

                            <TextField className='input' sx={{ outline: "none", border: "none" }} type="text" placeholder='Search Anything Anywhere' >
                            </TextField>
                            <div className='search-btn'>
                                {/* Search */}
                                <SearchIcon />
                            </div>
                        </Box>
                    </Stack>
                    <Stack
                        marginTop={1}
                        color="white"
                        spacing={2}
                        textColor="primary"
                        direction="row"
                        justifyContent="center"
                    >

                        <Typography sx={{ fontSize: "12px" }} >Search By:</Typography>
                        <Stack
                            spacing={1}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <div className='circle'></div>
                            <Typography sx={{ fontSize: "12px" }}>Company Name</Typography>
                        </Stack>
                        <Stack
                            spacing={1}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <div className='circle'></div>
                            <Typography sx={{ fontSize: "12px" }}>Product/Services Name</Typography>
                        </Stack>
                        <Stack
                            spacing={1}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <div className='circle'></div>
                            <Typography sx={{ fontSize: "12px" }}>All Profile</Typography>
                        </Stack>

                    </Stack>
                </Typography>
                <Features />



            </div>
        </div>
    </>
}

export default SearchEngines