import { createStyles, Container, Text, Group, SimpleGrid, rem } from "@mantine/core";
import * as React from "react";

// const image = require("../../data/computer_surfing_md_clr.gif");
const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(100),
    paddingBottom: rem(40),
  },

  title: {
    // fontWeight: 900,
    fontSize: rem(34),
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export function AboutPage() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div>
        <Text className={classes.title}>ABOUT</Text>
      </div>
      <br></br> <br></br>
      <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}>
        <div>
          <Group sx={{ height: "100%" }} spacing={20}>
            <Text size="sm">
              exploring the possibilities of rewriting terms and conditions from a user-centric perspective, aiming to redefine the
              relationship between individuals and the digital services they engage with.
            </Text>
          </Group>
        </div>
        {/* <Image src={image} className={classes.mobileImage} />
        <Image src={image} className={classes.desktopImage} /> */}
      </SimpleGrid>
      <Group mt={30}>
        <Text size="sm">
          <a href="https://arthackday.net/"> art hack day</a>
        </Text>
      </Group>
    </Container>
  );
}
