import { createStyles, Container, Title, Text, SimpleGrid, rem } from "@mantine/core";

import * as React from "react";

// const image = require("../data/computer_surfing_md_clr.gif");
const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(40),
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

export function NotFoundPage() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}>
        <div>
          <Title className={classes.title}>page not found :(</Title>
          <br />
          <Text size="lg">
            aaaah! page you are trying to open does not exist at the moment!!! you might have mistyped the address or i moved things
            around...whoops
          </Text>
          <br />
          <Text size="sm">
            <a href="./">find your way home</a>
          </Text>
        </div>
        {/* <Image src={image} className={classes.mobileImage} /> */}
        {/* <Image src={image} className={classes.desktopImage} /> */}
      </SimpleGrid>
    </Container>
  );
}
