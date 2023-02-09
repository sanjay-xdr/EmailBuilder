import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export function ActionBar() {
    return (
        <div>
            <br />
            <Box sx={{ flexGrow: 50 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Stack direction="row" spacing={2} textAlign={'left'}>
                            {/* <Item> */}
                                <Typography variant="p">
                                    File Name:
                                </Typography>
                                <br/>
                                <Typography variant="p">
                                    Win Announcement
                                </Typography>
                            {/* </Item> */}
                        </Stack>
                    </Grid>
                    <Grid item xs={8}>
                        {/* <Item>xs=8</Item> */}
                        <Stack direction="row" spacing={2}>
                            <Button variant="outlined" color="warning" style={{ color: "black" }}>
                                <TextSnippetIcon></TextSnippetIcon>
                                Save in Draft
                            </Button>

                            <Button variant="outlined" style={{ color: "black" }} spacing={2} color="warning">
                                <QueryBuilderIcon></QueryBuilderIcon>
                                Schedule for Later
                            </Button>
                            <Button variant="contained" href="#contained-buttons" style={{ backgroundColor: "#FFB81C" }} >
                                <SendIcon></SendIcon>
                                Send
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}