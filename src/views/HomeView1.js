import React from 'react';
import { Typography } from '@mui/material';
import CenteredView from "../components/CenteredView";

function HomeView1() {
    return (
        <CenteredView>
            <div>
                <Typography variant="h4">Vue de la Page d'Accueil 1</Typography>
                <Typography>Contenu de la Vue de la Page d'Accueil 1.</Typography>
            </div>
        </CenteredView>
    );
}

export default HomeView1;