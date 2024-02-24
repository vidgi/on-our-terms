import { TextInput, Text, Select, Textarea, Button, Group, Box, SimpleGrid, rem, createStyles } from "@mantine/core";
import { useState } from "react";
import * as React from "react";

export function DynamicTermsForm() {
  const [name, setName] = useState("");
  const [platformName, setPlatformName] = useState("");
  const [platformMission, setPlatformMission] = useState("");
  const [userExpectations, setUserExpectations] = useState("");
  const [platformExpectations, setPlatformExpectations] = useState("");
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
    <SimpleGrid lts={-0.4} spacing={80} cols={2} breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}>
      <Box sx={{ maxWidth: 500 }} mx="auto">
        <div>
          <Text transform="uppercase" className={classes.title}>
            WHAT ARE YOUR TERMS
          </Text>
        </div>
        <br></br> <br></br>
        <TextInput
          label="Your Name"
          placeholder="Enter Name"
          value={name}
          onChange={(event) => updateTemplate("name", event.currentTarget.value)}
          required
        />
        <Select
          label="Platform Name"
          placeholder="Select Platform"
          value={platformName}
          onChange={handlePlatformChange}
          data={Object.keys(missionStatements).map((key) => ({ value: key, label: key }))}
          required
        />
        <Textarea
          label="What I expect from you"
          placeholder="I expect..."
          value={userExpectations}
          onChange={(event) => updateTemplate("userExpectations", event.currentTarget.value)}
          minRows={3}
          required
        />
        <Textarea
          label="What you can expect from me"
          placeholder="You can expect..."
          value={platformExpectations}
          onChange={(event) => updateTemplate("platformExpectations", event.currentTarget.value)}
          minRows={3}
          required
        />
        <Textarea
          label="Privacy Policy"
          placeholder="My privacy policy is..."
          value={privacyPolicy}
          onChange={(event) => updateTemplate("privacyPolicy", event.currentTarget.value)}
          minRows={3}
        />
        <Group position="right" mt="md">
          <Button onClick={() => console.log("Form submitted")}>Submit</Button>
        </Group>
      </Box>

      <Box mt="md">
        <p>Dear {platformName || "[PLATFORM NAME]"},</p>
        <p>
          I know it’s tempting to skip these Terms of Service, but it’s important for you, {platformName || "[PLATFORM NAME]"}, to
          understand what I expect from you in order for me to continue using your platform. These terms reflect what I believe to be true.
          As a result, these Terms of Service help define our relationship as I interact with your services. For example, these terms
          include the following topics:
        </p>
        <ul>
          <li>
            What I expect from you, which describes how {platformName || "[PLATFORM NAME]"} should provide and develop their services.
          </li>
          <li>What you can expect from me, which establishes the information and content I am willing to provide.</li>
          <li>Understanding these terms is important because, by accessing my information and content, you’re agreeing to these terms.</li>
          <li>
            Besides these terms, I also have my own Privacy Policy. I encourage you to read it to better understand how I expect you to
            handle my information.
          </li>
        </ul>
        <p>Your mission is to {missionStatements[platformName] || "[INSERT PLATFORM MISSION STATEMENT]"}. </p>
        <p>Here's what I expect from you:</p>
        <p>
          {userExpectations ||
            "I expect you to empower me to freely express myself and communicate about topics important to me. You must prioritize the safety, security, and integrity of its platform. This includes implementing measures to combat harmful conduct, protect user privacy, and respond promptly to any misuse or violations."}
        </p>
        <p>Here’s what you can expect from me:</p>
        <p>{platformExpectations || "I will act in good faith. I’ll manage my account responsibly."}</p>
        {privacyPolicy && (
          <>
            <p>Privacy policy:</p>
            <p>{privacyPolicy}</p>
          </>
        )}
        <p>Updating these Terms...</p>
        <p>Sincerely,</p>
        <p>{name || "[USER NAME]"}</p>
      </Box>
    </SimpleGrid>
  );
}
