import React from "react";
import { useAppState } from "@/useHooks/useAppState"; 
import { Grid, Button, Header } from "semantic-ui-react";
import CatImage from "@/components/CatImage";

export default function Gallery() {
    const appState = useAppState();

  console.log(appState);

  function changeName() {
    const titles = ['JAKE THE DOG', 'FIN THE HUMAN'];
    const randomTitleIndex = Math.floor(Math.random() * titles.length);

    appState.updateAppState({ user: titles[randomTitleIndex] });
  }

  return (
    <>
      <Grid columns={1}>
        <Grid.Column>
          <Header as='h1'>{appState.user}'s Favorites</Header>
        </Grid.Column>
        <Grid.Column>
          <Button content='Change Name' color='blue' icon='sync' onClick={changeName} />
        </Grid.Column>
        <Grid.Row columns='5'>
        {appState.favoriteCats.map((cat) => {
            return <CatImage key={cat.id} src={cat.url} />
        })}
        </Grid.Row>
        
      </Grid>
    </>
  );
}