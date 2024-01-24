---
path: "/project/"
date: 21/01/2024
title: "Async Messaging"
skills: ["Flutter", "GCP", "SonarQube", "Android Studio", "NodeJS", "Cloud Computing", "Twilio"]
thumbnail: "../images/mobileapp.jpg"
featured: true
weblink: "https://gitlab.com/hyridex/digital-fgd-tool"
---

Working with IFRC to deliver focus group discussions, built an asynchronous mobile conferencing app, inspired by TikTok.

IFRC needed a reliable way of carrying out focus group discussions (FGDs) in remote, hard-to-reach areas. FGDs are a way of surveying the conditions and needs of a population before IFRC can form a strategy to target pain points in the community. The discussions are usually carried out in-person with local volunteers, however, covid has proven the need to transfer some processes online for convenience. 

The people living in some areas where FGDs are carried out may have limited internet so a continuous, group video call with everyone may be difficult. My team decided on an asynchronous discussion strategy where recorded video and audio messages are saved until there is internet availability before uploading or downloading their contributions. Discussions of participants can be viewed by swiping through a list of videos, like TikTok.

We developed the app using Flutter as it is compatible with both Android and iOS devices. Our backend is hosted by Firebase Cloud Functions with NodeJS, Google Firestore and Firebase Storage. 

## Features
There are two user types: participants and facilitators. Facilitators are responsible for hosting and managing multiple discussions. Participants can only join and contribute to one discussion. Facilitators can send invites to participants to join a discussion, this will send an email to each participant with their login details. 

Participants can login after receiving their invite, choose a profile icon and begin contributing. For participants who prefer to maintain some anonimity of hiding their face, the can contribute through recording audio messages. A video recording functionality is also available for participants who are more open to using this technology. If no internet is available, the recorded contribution is first saved to cache, there is a button for downloading and uploading contributionsfor when internet becomes available. Contributions posted by a participant is first sent to a facilitator to be screened for sensitive content before being released into the discussion area where it can be seen by other participants.

Facilitators are also able to contribute to discussions through posting video or audio messages. They have the additional privilege of starting sessions and ending sessions. Each discussion group has several sessions which contain different topics of discussion. The facilitator can also highlight or delete contributions they find interesting or offensive, respectively. For each contribution, the facilitator can fill in a transcript of the message so that a report can be generated at the end containing all information of the discussion.

After a discussion is over, a report is automatically generated containing all participant data, transcipt of messages sent and session information during the discussion. The original files of the participants' contributions are deleted after 30 days as according to GDPR regulations.