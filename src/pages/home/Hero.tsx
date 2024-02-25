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

  mobileViewer: {
    display: 'none', // Hide by default
    [theme.fn.smallerThan('sm')]: {
      display: 'block', // Only display on small screens
      height: '50vh',
      width: '100%',
    },
  },




  termsLink: {
    position: "fixed",
    bottom: theme.spacing.xs,
    right: theme.spacing.xs,
    backgroundColor: "blue",
    color: "white",
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.md,
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.fn.darken("blue", 0.1),
    },
  },

  content: {
    maxWidth: rem(500),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: "0.25 rem",
    },
  },

  title: {
    color: "#131313",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(300),
    lineHeight: 0.77,
    wordSpacing: rem(-150),

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(85),
      wordSpacing: rem(-15),
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
       <div className={classes.mobileViewer}>
        <ViewerPage height={"50vh"} viewOnly />
      </div>
      <div
        style={{
          position: "absolute",
          top: "2em",
          left: "2em",
          zIndex: "10000",
        }}
      >
        <Text lts={-0.04} style={{ fontWeight: 600, color: "blue" }} transform="uppercase" className={classes.title} size="xl">
          ON OUR TERMS
        </Text>

        <SimpleGrid lts={-0.04} spacing={80} cols={1} breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}>
          <div className={classes.content}>
            <Text style={{ fontFamily: "Helvetica, sans-serif" }} size="md">
              <br />
              The terms of service of major tech platforms give platform owners significant power, binding users to complex agreements that grant broad control over their data and content, with limited negotiation or consent. Users lack opt-out choices and remedies for breaches, revealing a system that prioritizes owner control over user rights. If the tech company's terms of service are a declaration of a particular power dynamic, then <i>On Our Terms</i> is a collaborative critical response, inviting tech companies to adopt terms defined by the user community.

            </Text>
          </div>
        </SimpleGrid>

        <Group lts={-0.04} mt={30} pb={40}>
          <Text size="sm">
            <a href="form"> WHAT ARE YOUR TERMS?</a>
          </Text>
        </Group>
      </div>

      <div className="desktop-only">
        <ViewerPage height={"98vh"} viewOnly />
      </div>
    </div>
  );
}
