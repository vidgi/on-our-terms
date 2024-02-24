import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Affix, Card, ActionIcon, createStyles, Grid, Image, Text, Container, Anchor, rem, Center, Tooltip } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import sampleData from "./samples.json";
import { NotFoundPage } from "../../components/NotFoundPage";

const zeroPad = (num: number, places: number) => {
  return String(num).padStart(places, "0");
};
const minSampleId = 1;
const maxSampleId = Object.keys(sampleData).length;

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(40),
    paddingBottom: rem(40),
  },

  card: {
    // height: "75vh",
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    // fontWeight: 200,
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
}));
function SampleDetailPage() {
  const { id } = useParams();
  const data = sampleData[id];
  const { classes } = useStyles();
  const currentNumericId = parseInt(id);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && currentNumericId > minSampleId) {
        window.location.href = `../term/${zeroPad(currentNumericId - 1, 3)}`;
      } else if (e.key === "ArrowRight" && currentNumericId < maxSampleId) {
        window.location.href = `../term/${zeroPad(currentNumericId + 1, 3)}`;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentNumericId]);
  return (
    <div>
      {data ? (
        <>
          <Container size="lg" className={classes.root}>
            <Grid>
              <Grid.Col sm={3}>
                <Anchor color="#9b9974" size="xs" href="../terms">
                  ← back to all terms
                </Anchor>
                <br />
                <br />

                <Text size={30} className={classes.title}>
                  {data.title}
                </Text>
                {/* <Text size="sm" transform="lowercase">
                  {data.description}
                </Text> */}
                <br />

                <Text size="xs" transform="lowercase">
                  term #{data.id}
                </Text>
                {/* <Text size="xs" transform="lowercase">
                  type: {data.type}
                </Text> */}
                <Text size="xs" transform="lowercase">
                  {data.date}
                </Text>
              </Grid.Col>
              <Grid.Col sm={1}>
                {currentNumericId > minSampleId ? (
                  <Center className={classes.hiddenMobile} maw={400} h={"100%"} mx="auto">
                    <Tooltip.Floating label="previous terms">
                      <ActionIcon component="a" href={"../term/" + zeroPad(currentNumericId - 1, 3)}>
                        <IconChevronLeft color="#9b9974" size={rem(30)} />
                      </ActionIcon>
                    </Tooltip.Floating>
                  </Center>
                ) : (
                  <></>
                )}
              </Grid.Col>
              <Grid.Col sm={4.5}>
                {data.type === "Image" ? (
                  // <Tooltip.Floating label={data.description}>
                  <Card key={id} p="md" radius="md" component="a" target="blank" className={classes.card}>
                    <Image src={data.file} />
                  </Card>
                ) : (
                  // {/* </Tooltip.Floating> */}
                  <></>
                )}
                {data.type === "Video" ? (
                  // <Tooltip.Floating label={data.description}>
                  <Card key={id} p="md" radius="md" component="a" target="blank" className={classes.card}>
                    <video loop muted autoPlay controls src={data.file}></video>
                  </Card>
                ) : (
                  // {/* </Tooltip.Floating> */}
                  <></>
                )}
                {data.type === "Audio" ? (
                  // <Tooltip.Floating label={data.description}>
                  <Card key={id} p="md" radius="md" component="a" target="blank" className={classes.card}>
                    <audio className="detail-audio" controls src={data.file}></audio>{" "}
                  </Card>
                ) : (
                  // </Tooltip.Floating>
                  <></>
                )}

                {/* </Card> */}
              </Grid.Col>
              <Grid.Col sm={1}>
                {currentNumericId < maxSampleId ? (
                  <Center className={classes.hiddenMobile} maw={400} h={"100%"} mx="auto">
                    <Tooltip.Floating label="next terms">
                      <ActionIcon component="a" href={"../term/" + zeroPad(currentNumericId + 1, 3)}>
                        <IconChevronRight color="#9b9974" size={rem(30)} />
                      </ActionIcon>
                    </Tooltip.Floating>
                  </Center>
                ) : (
                  <></>
                )}
              </Grid.Col>
            </Grid>
          </Container>
          {currentNumericId > minSampleId ? (
            <Affix className={classes.hiddenDesktop} position={{ top: rem(450), left: rem(20) }}>
              <Tooltip label="previous terms">
                <ActionIcon variant="default" radius="xl" component="a" href={"../term/" + zeroPad(currentNumericId - 1, 3)}>
                  <IconChevronLeft size={rem(30)} />
                </ActionIcon>
              </Tooltip>
            </Affix>
          ) : (
            <></>
          )}
          {currentNumericId < maxSampleId ? (
            <Affix className={classes.hiddenDesktop} position={{ top: rem(450), right: rem(20) }}>
              <Tooltip label="next terms">
                <ActionIcon variant="default" radius="xl" component="a" href={"../term/" + zeroPad(currentNumericId + 1, 3)}>
                  <IconChevronRight size={rem(30)} />
                </ActionIcon>
              </Tooltip>
            </Affix>
          ) : (
            <></>
          )}
        </>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
}
export default SampleDetailPage;
