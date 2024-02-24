import React from "react";
import { createStyles, Header, Group, Text, Divider, Box, Burger, Drawer, ScrollArea, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useLocation } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: "#131313",
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      color: "#ffffff",
      backgroundColor: "#000000",
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      color: "#ffffff",
      backgroundColor: "#000000",
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`,
  },

  header: {
    backgroundColor: "#ffffff",
    borderBottom: 0,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  // a:hover {
  //   color: rgb(141, 107, 85);
  // }

  // a {
  //   color: #9b9974;
  // }

  titlelink: {
    color: "#131313",
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    // color: theme.colorScheme === "dark" ? theme.white : theme.black,
    // fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      color: "#131313",
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      color: "#ffffff",
      backgroundColor: "#000000",
    }),
  },
}));

export function HeaderNav() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const location = useLocation();

  return (
    <Box lts={-0.4} className="noselect">
      <Header className={classes.header} sx={{ borderBottom: 0 }} height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          {location.pathname !== "/" && (
            <Text fw={500}>
              <a href="../" className={classes.titlelink}>
                {"ON OUR TERMS"}
              </a>
            </Text>
          )}

          <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <a href="../form" className={classes.link}>
              WHAT ARE YOUR TERMS?
            </a>
            {/* <a href="../terms" className={classes.link}>
              VIEW OUR TERMS{" "}
            </a> */}
            {/* <a href="../about" className={classes.link}>
              ABOUT
            </a> */}
          </Group>
          <Burger color="#000000" opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer opened={drawerOpened} onClose={closeDrawer} size="100%" padding="md" zIndex={1000000}>
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Text size="xl">
            <a href="../" className={classes.titlelink}>
              ON OUR TERMS
            </a>
          </Text>
          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

          <Text size="sm">
            <a href="../form" className={classes.link}>
              WHAT ARE YOUR TERMS
            </a>
          </Text>
          {/* <Text size="sm">
            <a href="../terms" className={classes.link}>
              VIEW OUR TERMS
            </a>
          </Text> */}
          {/* <Text size="sm">
            <a href="../about" className={classes.link}>
              ABOUT
            </a>
          </Text> */}

          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
