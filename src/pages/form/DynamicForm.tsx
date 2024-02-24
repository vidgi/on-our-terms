import { TextInput, Text, Select, Textarea, Button, Group, Box, SimpleGrid, rem, createStyles } from "@mantine/core";
import { useState } from "react";
import * as React from "react";

export function DynamicTermsForm() {
  const [name, setName] = useState("");
  const [platformName, setPlatformName] = useState("");
  const [platformMission, setPlatformMission] = useState("");
  const [userExpectations, setUserExpectations] = useState();
  const [platformExpectations, setPlatformExpectations] = useState();
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
        color: "blue",
        fontWeight: 600,
        textTransform: "uppercase",
      },
      "& input": {
        color: "blue",
        fontWeight: 600,

        fontSize: rem(100),
        textTransform: "uppercase",

        [theme.fn.smallerThan("sm")]: {
          fontSize: rem(32),
        },
      },
      "& .mantine-Select-input, & .mantine-Select-filled, & .mantine-Select-outline": {
        color: "blue",
        fontWeight: 600,
        height: rem(120),
        border: "none",
        borderBottom: `2px solid ${theme.colors.gray[4]}`,
        borderRadius: 0,
        [theme.fn.smallerThan("sm")]: {
          height: rem(40),
          paddingLeft: 0,
        },
      },
    },
    inputStyle: {
      "& input": {
        color: "blue",
      },
    },
    textareaStyle: {
      "& textarea": {
        // fontSize: rem(30),
        color: "blue",
      },
    },

    title: {
      fontWeight: 600,
      fontSize: rem(100),
      marginBottom: theme.spacing.md,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: 0.77,
      wordSpacing: rem(-20),

      [theme.fn.smallerThan("sm")]: {
        fontSize: rem(32),
        lineHeight: 1,
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
  const platformEmails = {
    Instagram: "support@instagram.com",
    Facebook: "support@fb.com",
    TikTok: "feedback@tiktok.com",
    "Twitter/X": "support@x.com",
    Snapchat: "support@snapchat.com",
  };

  const sendMessage = (recipientEmail, platform, sender, mission, userDemands, userConcessions, userPrivacyPolicy) => {

    // Build subject line
    const subject = "My Terms for " + platform + " - " + sender;

    // Determine whether the user has inputted a Privacy Policy
    var privacy = false;
    if (userPrivacyPolicy.trim() !== "") {
      privacy = true;
    }

    // Build the email body based on user inputs
    var emailBody = "Dear " + platform + ",\n\n" + "I know it's tempting to skip these Terms of Service, but it's important for you, " + platform + ", to understand what I expect from you in order for me to continue using your platform. These terms reflect what I believe to be true. As a result, these Terms of Service help define our relationship as I interact with your services. For example, these terms include the following topics:" + "\n" +
      "- What I expect from you, which describes how " + platform + " should provide and develop their services.\n" +
      "- What you can expect from me, which establishes the information and content I am willing to provide.\n" +
      "- Understanding these terms is important because, by accessing my information and content, you're agreeing to these terms.\n";
    
    if (privacy) {
      emailBody += "- Besides these terms, I also have my own Privacy Policy. I encourage you to read it to better understand how I expect you to handle my information.\n"
    }
    
    emailBody += "\nYour mission is to " + mission + ".\n\n" + "Here's what I expect from you:\n" + userDemands + "\n\n" + "Here's what you can expect from me:\n" + userConcessions + "\n\n"

    if (privacy) {
      emailBody += "Privacy Policy:\n" + userPrivacyPolicy + "\n\n"
    }

    emailBody += "Updating these Terms\n" + "As the user, I reserve the right to update my terms of conditions based on my needs and the protection of my interests. This includes any amendments or additions that I deem necessary for safeguarding my rights and privacy. It is understood that " + platform + " shall adhere to these updated terms upon notification and acknowledgment of the changes." + "\n\n" + "In Case of Issues\n" + "In the event of any disputes, I expect " + platform + " to handle them fairly and transparently. If there are any problems or disagreements, I trust that you'll provide me with ample notice and the opportunity to address the issue before taking any action." + "\n\n" + "By agreeing to these terms, " + platform + " acknowledges that it is bound by the commitments outlined above and agrees to abide by them in its use of my information and content." + "\n\n" + "Sincerely,\n" + sender;

    // Encode special characters in the email body
    var encodedBody = encodeURIComponent(emailBody);
    
    // Construct the mailto URL with recipient, subject, and body
    var mailtoLink = "mailto:" + recipientEmail + "?bcc=unitedusersguild@gmail.com&subject=" + subject + "&body=" + encodedBody;

    // Open the email client with the populated email
    window.location.href = mailtoLink;
  };


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
          <p>
            <b>Here's what I expect from you:</b>
          </p>
          <Textarea
            className={classes.textareaStyle}
            placeholder="I expect you to empower me to freely express myself and communicate about topics important to me. You must prioritize the safety, security, and integrity of its platform. This includes implementing measures to combat harmful conduct, protect user privacy, and respond promptly to any misuse or violations."
            value={userExpectations}
            onChange={(event) => updateTemplate("userExpectations", event.currentTarget.value)}
            minRows={3}
            required
          />
          <p>
            <b>Here’s what you can expect from me:</b>
          </p>
          <Textarea
            className={classes.textareaStyle}
            placeholder="I will act in good faith. I will manage my account responsibly."
            value={platformExpectations}
            onChange={(event) => updateTemplate("platformExpectations", event.currentTarget.value)}
            minRows={3}
            required
          />
          <p>
            <b>Privacy Policy:</b>
          </p>
          <Textarea
            className={classes.textareaStyle}
            placeholder="My privacy policy is..."
            value={privacyPolicy}
            onChange={(event) => updateTemplate("privacyPolicy", event.currentTarget.value)}
            minRows={3}
          />
          <p>
            <b>Updating these Terms</b>
          </p>
          <p>
            As the user, I reserve the right to update my terms of conditions based on my needs and the protection of my interests. This
            includes any amendments or additions that I deem necessary for safeguarding my rights and privacy. It is understood that{" "}
            {platformName || "[PLATFORM NAME]"} shall adhere to these updated terms upon notification and acknowledgment of the changes.
          </p>
          <p>
            <b>In Case of Issues</b>
          </p>
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
            className={classes.inputStyle}
            placeholder="YOUR NAME"
            value={name}
            onChange={(event) => updateTemplate("name", event.currentTarget.value)}
            required
          />
          <Group position="right" mt="md">
            <Button variant="transparent" onClick={() => sendMessage(platformEmails[platformName], platformName, name, missionStatements[platformName], userExpectations, platformExpectations, privacyPolicy)}>
              SUBMIT
            </Button>
          </Group>
        </>
      )}
    </Box>
  );
}
