import { createStyles, Container, Text, Group, SimpleGrid, rem } from "@mantine/core";
import * as React from "react";
import { DynamicTermsForm } from "./DynamicForm";

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

export function FormPage() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div>
        <Text transform="uppercase" className={classes.title}>
          Decide Your Terms
        </Text>
      </div>
      <br></br> <br></br>
      <DynamicTermsForm />
      {/* <Image src={image} className={classes.mobileImage} />
        <Image src={image} className={classes.desktopImage} /> */}
    </Container>
  );
}
