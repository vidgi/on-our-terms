import * as React from "react";
import { createStyles, Image, SimpleGrid, Card, Text, Container, rem } from "@mantine/core";

import unshuffledData from "./samples.json";

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(120),
    paddingBottom: rem(40),
  },

  card: {
    // opacity: "0",
    height: "50vh",
    background: "rgba(255,255,255,20)",
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
  body: {
    color: "#545122",
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    // fontWeight: 200,
  },
}));

export function SampleGrid() {
  const { classes } = useStyles();

  const sampleData = shuffle(unshuffledData);

  const cards = Object.keys(sampleData)
    .reverse()
    .map((key, index) => (
      // <Tooltip.Floating key={key} label={sampleData[key].description}>
      <Card p="md" radius="md" component="a" href={"term/" + key} className={classes.card}>
        {sampleData[key].type === "Image" ? <Image height={"38vh"} src={sampleData[key].file} /> : <></>}
        {sampleData[key].type === "Video" ? (
          <video className="grid-video" loop muted autoPlay controls src={sampleData[key].file}></video>
        ) : (
          <></>
        )}
        {sampleData[key].type === "Audio" ? <audio className="grid-audio" controls src={sampleData[key].file}></audio> : <></>}
        <div
          style={{
            position: "absolute",
            bottom: "1em",
          }}
        >
          {" "}
          <Text className={classes.body} size="xs" transform="uppercase" mt="md">
            {sampleData[key].date}
          </Text>
          <Text className={classes.body} size="md" mt={5}>
            {sampleData[key].title}
          </Text>
        </div>
      </Card>
      // </Tooltip.Floating>
    ));

  return (
    <Container className={classes.root}>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "md", cols: 3 },
          { maxWidth: "sm", cols: 3 },
          { maxWidth: "xs", cols: 2 },
        ]}
      >
        {cards}
      </SimpleGrid>
    </Container>
  );
}
