
import { Grid } from '@material-ui/core';

//components

import Banner from './Banner';
import LeftContainer from './LeftContainer';
import Posts from './Posts';

const Home = () => {
    return (
        <>
            <Banner />
            <Grid container>
                <Grid item lg = {2} xs = {12} sm = {2}>
                    <LeftContainer />
                </Grid>
                <Grid item container lg = {10} xs = {12} sm = {10}>
                    <Posts />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;