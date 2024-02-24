import * as React from "react";
import { createStyles, SimpleGrid, Group, Text, rem } from "@mantine/core";
import { ViewerPage } from "../viewer/ViewerPage";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 5)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: "#131313",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    // fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function Hero() {
  const { classes } = useStyles();
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "15em",
          left: "2em",
          zIndex: "10000",
        }}
      >
        <Text transform="uppercase" className={classes.title}>
          ON OUR TERMS
        </Text>
        <Text mt="md">
          <br />
        </Text>
        <Text transform="uppercase" size="md">
          <b>we don't have the same terms</b>
        </Text>
        <SimpleGrid spacing={80} cols={1} breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}>
          <Text size="sm">
            <br />
            exploring the possibilities of rewriting terms <br />
            and conditions from a user-centric perspective, aiming to <br />
            redefine the relationship between individuals and the digital <br />
            services they engage with.
          </Text>
        </SimpleGrid>
        <Group mt={30}>
          <Text size="sm">
            <a href="form"> VIEW TERMS</a>
          </Text>
        </Group>
      </div>
      <div className="desktop-only" style={{ height: "calc(-51vh)", width: "100vw" }}>
        <ViewerPage viewOnly />
      </div>
    </div>
  );
}
