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
          top: "2em",
          left: "2em",
          zIndex: "10000",
        }}
      >
        <Text style={{ fontWeight: 600, color: "blue" }} transform="uppercase" className={classes.title} size="md">
          ON OUR TERMS
        </Text>

        <SimpleGrid spacing={80} cols={1} breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}>
          <div className={classes.content}>
            <Text style={{ fontFamily: "Helvetica, sans-serif" }} size="md">
              <br />
              The terms of service and user agreements for major tech platforms represent an imbalance of power between users and platform
              owners. Users must agree to lengthy and complex terms that grant platforms expansive rights to use, monetize, and share user
              data. Users have little ability to negotiate these agreements, which often change without their consent. The agreements are
              designed to limit platforms' liability, not to protect users. Users cannot opt out of key provisions and have few remedies if
              platforms violate terms. Overall, the technical and legal architecture of platforms serves to maximize owner control while
              restricting user rights. Users are reduced to passive participants under Terms of Service they likely haven't read or
              comprehended, but cannot avoid accepting. This stark contrast illustrates the subordinate position of users in the platform
              ecosystem, despite their critical role in creating value. Users are left with little power to address asymmetries embedded in
              platform governance.
              <br />
              <br />
              If the tech company terms of service is a declaration of a particular power dynamic, then On Our Terms is a collaborative
              critical response. By rewriting the terms of service from the perspective of a community of users, large tech companies are
              invited to agree to the users' terms. They need just sign on the dotted line!
            </Text>
          </div>
        </SimpleGrid>
        <Group mt={30}>
          <Text size="sm">
            <a href="form"> WHAT ARE YOUR TERMS?</a>
          </Text>
        </Group>
      </div>
      <div className="desktop-only" style={{ height: "calc(-51vh)", width: "100vw" }}>
        <ViewerPage viewOnly />
      </div>
    </div>
  );
}
