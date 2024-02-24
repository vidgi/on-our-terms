import { TextInput, Select, Textarea, Button, Group, Box, SimpleGrid } from "@mantine/core";
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
    
    emailBody += "\nYour mission is to " + mission + ".\n\n" + "*Here's what I expect from you:*\n" + userDemands + "\n\n" + "*Here's what you can expect from me:*\n" + userConcessions + "\n\n"

    if (privacy) {
      emailBody += "*Privacy policy:*\n" + userPrivacyPolicy + "\n\n"
    }

    emailBody += "*Updating these Terms*\n" + "As the user, I reserve the right to update my terms of conditions based on my needs and the protection of my interests. This includes any amendments or additions that I deem necessary for safeguarding my rights and privacy. It is understood that " + platform + " shall adhere to these updated terms upon notification and acknowledgment of the changes." + "\n\n" + "*In Case of Issues*\n" + "In the event of any disputes, I expect " + platform + " to handle them fairly and transparently. If there are any problems or disagreements, I trust that you'll provide me with ample notice and the opportunity to address the issue before taking any action." + "\n\n" + "By agreeing to these terms, " + platform + " acknowledges that it is bound by the commitments outlined above and agrees to abide by them in its use of my information and content." + "\n\n" + "Sincerely,\n" + sender;

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
    <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}>
      <Box sx={{ maxWidth: 500 }} mx="auto">
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
          <Button onClick={() => sendMessage(platformEmails[platformName], platformName, name, missionStatements[platformName], userExpectations, platformExpectations, privacyPolicy)}>Submit</Button>
        </Group>
      </Box>

      <Box mt="md">
        <p>Dear {platformName || "[PLATFORM NAME]"},</p>
        <p>
          I know it's tempting to skip these Terms of Service, but it's important for you, {platformName || "[PLATFORM NAME]"}, to
          understand what I expect from you in order for me to continue using your platform. These terms reflect what I believe to be true.
          As a result, these Terms of Service help define our relationship as I interact with your services. For example, these terms
          include the following topics:
        </p>
        <ul>
          <li>
            What I expect from you, which describes how {platformName || "[PLATFORM NAME]"} should provide and develop their services.
          </li>
          <li>What you can expect from me, which establishes the information and content I am willing to provide.</li>
          <li>Understanding these terms is important because, by accessing my information and content, you're agreeing to these terms.</li>
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
        <p>Here's what you can expect from me:</p>
        <p>{platformExpectations || "I will act in good faith. I'll manage my account responsibly."}</p>
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
