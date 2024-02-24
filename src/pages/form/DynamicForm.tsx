import { TextInput, Text, Select, Textarea, Button, Group, Box, SimpleGrid, rem, createStyles } from "@mantine/core";
import { useState } from "react";
import * as React from "react";

export function DynamicTermsForm() {
  const [name, setName] = useState("");
  const [platformName, setPlatformName] = useState("");
  const [platformMission, setPlatformMission] = useState("");
  const [userExpectations, setUserExpectations] = useState(
    "I expect you to empower me to freely express myself and communicate about topics important to me. You must prioritize the safety, security, and integrity of its platform. This includes implementing measures to combat harmful conduct, protect user privacy, and respond promptly to any misuse or violations."
  );
  const [platformExpectations, setPlatformExpectations] = useState("I will act in good faith. I will manage my account responsibly.");
  const [privacyPolicy, setPrivacyPolicy] = useState("");

  const missionStatements = {
    Instagram: "bring me closer to the people and things I love",
    Facebook: "give people the power to build community and bring the world closer together",
    TikTok: "inspire creativity and bring joy",
    "Twitter/X": "promote and protect the public conversation--to be the town square of the internet",
    Snapchat: "empower people to express themselves, live in the moment, learn about the world, and have fun together",
  };

  const useStyles = createStyles((theme) => ({
    root: {
      paddingTop: rem(100),
      paddingBottom: rem(40),
    },

    selectStyle: {
      "& div": {
        // fontSize: rem(100), // Increase the font size as needed
        textTransform: "uppercase",
      },
      "& input": {
        fontSize: rem(100), // Ensure the input matches the dropdown font size
        textTransform: "uppercase",
      },
      "& .mantine-Select-input, & .mantine-Select-filled, & .mantine-Select-outline": {
        height: rem(100),
        border: "none", // Remove the default border
        borderBottom: `2px solid ${theme.colors.gray[4]}`, // Apply an underline
        borderRadius: 0, // Remove border radius to avoid rounded corners at the bottom
      },
    },

    title: {
      color: "blue",
      fontWeight: 600,
      fontSize: rem(100),
      marginBottom: theme.spacing.md,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: 0.77,
      wordSpacing: rem(-20),

      [theme.fn.smallerThan("sm")]: {
        fontSize: rem(32),
        wordSpacing: rem(-5),
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
  const { classes } = useStyles();

  const updateTemplate = (templatePart, value) => {
    switch (templatePart) {
      case "name":
        setName(value);
        break;
      case "platformName":
        setPlatformName(value);
        break;
      case "platformMission":
        setPlatformMission(value);
        break;
      case "userExpectations":
        setUserExpectations(value);
        break;
      case "platformExpectations":
        setPlatformExpectations(value);
        break;
      case "privacyPolicy":
        setPrivacyPolicy(value);
        break;
      default:
        break;
    }
  };

  const handlePlatformChange = (value) => {
    setPlatformName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <Box lts={-0.04} sx={{ maxWidth: "100vw" }} mx="auto">
      <div>
        <Text transform="uppercase" className={classes.title}>
          {"WHAT ARE YOUR TERMS FOR "}
          <Select
            className={classes.selectStyle}
            placeholder="[PLATFORM NAME]"
            value={platformName}
            onChange={handlePlatformChange}
            data={Object.keys(missionStatements).map((key) => ({ value: key, label: key }))}
            required
          />
        </Text>
      </div>

      {platformName && (
        <>
          <p>Dear {platformName || "[PLATFORM NAME]"},</p>
          <p>
            I know it’s tempting to skip these Terms of Service, but it’s important for you, {platformName || "[PLATFORM NAME]"}, to
            understand what I expect from you in order for me to continue using your platform. These terms reflect what I believe to be
            true. As a result, these Terms of Service help define our relationship as I interact with your services. For example, these
            terms include the following topics:
          </p>
          <ul>
            <li>
              What I expect from you, which describes how {platformName || "[PLATFORM NAME]"} should provide and develop their services.
            </li>
            <li>What you can expect from me, which establishes the information and content I am willing to provide.</li>
            <li>
              Understanding these terms is important because, by accessing my information and content, you’re agreeing to these terms.
            </li>
            <li>
              Besides these terms, I also have my own Privacy Policy. I encourage you to read it to better understand how I expect you to
              handle my information.
            </li>
          </ul>
          <p>Your mission is to {missionStatements[platformName] || "[INSERT PLATFORM MISSION STATEMENT]"}. </p>
          <p>Here's what I expect from you:</p>
          <Textarea
            placeholder="[USER EXPECTATIONS]"
            value={userExpectations}
            onChange={(event) => updateTemplate("userExpectations", event.currentTarget.value)}
            minRows={3}
            required
          />
          <p>Here’s what you can expect from me:</p>
          <Textarea
            placeholder="[PLATFORM EXPECTATIONS]"
            value={platformExpectations}
            onChange={(event) => updateTemplate("platformExpectations", event.currentTarget.value)}
            minRows={3}
            required
          />
          <p>Updating these Terms</p>
          <p>
            As the user, I reserve the right to update my terms of conditions based on my needs and the protection of my interests. This
            includes any amendments or additions that I deem necessary for safeguarding my rights and privacy. It is understood that
            {platformName || "[PLATFORM NAME]"} shall adhere to these updated terms upon notification and acknowledgment of the changes.
          </p>
          <p>In Case of Issues</p>
          <p>
            In the event of any disputes, I expect {platformName || "[PLATFORM NAME]"} to handle them fairly and transparently. If there are
            any problems or disagreements, I trust that you'll provide me with ample notice and the opportunity to address the issue before
            taking any action.
          </p>
          <p>
            By agreeing to these terms, {platformName || "[PLATFORM NAME]"} acknowledges that it is bound by the commitments outlined above
            and agrees to abide by them in its use of my information and content.
          </p>

          <p>Sincerely,</p>
          <TextInput
            placeholder="[YOUR NAME]"
            value={name}
            onChange={(event) => updateTemplate("name", event.currentTarget.value)}
            required
          />
          <Group position="right" mt="md">
            <Button onClick={() => console.log("Form submitted")}>Submit</Button>
          </Group>
        </>
      )}
    </Box>
  );
}
