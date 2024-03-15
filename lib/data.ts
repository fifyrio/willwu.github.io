import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaHtml5, FaAppStoreIos } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/XYTemplateLayoutCell.png";
import aiPage1 from "@/public/hero-app.f3c4bbe7.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    type: "e",
    title: "Nanjing University of Science and Technology",
    location: "Jiangsu, CN",
    description: "Major in Electronic Science and technology",
    icon: React.createElement(LuGraduationCap),
    date: " August 2007 – May 2011",
  },
  {
    title: "Embedded Developer",
    location: "Nanjing Fire Protection Group Co., Ltd, Jiangsu, CN ",
    description: `
    work for stm32 microcomputer development. 
    • write development documents. 
    • fix bugs and version iteration.
    `,
    icon: React.createElement(CgWorkAlt),
    date: " 2011/07 –  2012/10",
  },
  {
    title: "Frontend Developer",
    location: "Mega Information Technology Co., Ltd, Shanghai, CN",
    description: `
    Developed and maintained a web application using css+html.
    • Collaborated with the UI/UX team to develop and maintain web user interfaces.
    • Created applications mobile-first with responsive designs.
    • Worked with the development team to troubleshoot and debug applications.
    
    `,
    icon: React.createElement(FaHtml5),
    date: "2013/01 - 2015/03",
  },
  {
    title: "iOS Developer",
    location: "KaiYing Network Technology Co., Ltd, Shanghai, CN",
    description: `    
    • Refactoring old with MVVM & RAC, the View consists of only visual elements, view controller only deals with UIKit stuff such as handling rotation, view loading, constraints, adding subviews, target actions, etc, and the view model deal with core business logic. So, by refactoring, now it's light and easy to test. 
    • Estimation of project development(discuss and think from the whole product to the details) 
    • Design common widget, such as HUD, loading animation, and label(CoreText). 
    • Refactor network module with AFNetworking, cache policy, asynchronous image downloader, render in background with CoreGraphics 
    • Debugging with Instruments, optimization tableView, reduce offscreen rendering
    `,
    icon: React.createElement(FaAppStoreIos),
    date: "2015/11 - 2018/04",
  },
  {
    title: "Senior iOS developer",
    location: "ANJUKE GROUP INC., Shanghai, CN",
    description: `    
    Responsible for new house business and proprietor business. 
    • Refactor proprietor page, split controller by factory pattern, and make page smooth. 
    • To solve compiling slowly, compile by inject dynamic library. 
    • Build a widget for rich text in FRP. 
    • Avoid unrecognized selector crash and track crash message by runtime.
    `,
    icon: React.createElement(FaAppStoreIos),
    date: "2018/04 - 2019/04",
  },
  {
    title: "Senior iOS developer",
    location: "Wind Information Technology Co., Ltd, Shanghai, CN",
    description: `    
    Design a middleware by using Target-Action with runtime, to realize objc and swift mixed programming 
    • The TRTC-based bypass live broadcast system realizes audio and video calls, screen sharing, and the content CDN bypass live broadcast; based on the AVPlayer package player, the live playback video m3u8 file is played. 
    • App slimming, removing useless resources through scripts, slimming executable files, and optimizing compilation options, using APPCode's Code Inspection to check, filter, and eliminate useless codes. 
    • Capture crash events by capturing Mach exceptions or Unix signals, and report to the server at the same time. 
    •  Use fishhook to go to the malloc_logger function of the Hook system to obtain memory allocation, monitor OOM and other memory problems. 
    • Through the hook system objc_msgSend method, to monitor all time-consuming OC methods in the App, reduce IO operations, and put time-consuming methods into asynchronous parallel queues, asynchronous serial queues, and idle asynchronous serial queues. 
    • Optimize the log system. It turned out to create a buffer in the memory and write it to the disk when appropriate, but it is easy to lose the log when it crashes or is killed. The MMAP memory mapping is used on the original basis, saving the copy of the kernel space and user process space At the same time, the kernel writes data to the disk according to a certain strategy, even if it encounters a crash, it can save the integrity of the log.
    `,
    icon: React.createElement(FaAppStoreIos),
    date: "2019/09 - 2021/08",
  },
  {
    title: "Senior iOS developer",
    location: "StubHub Inc, Shanghai, CN",
    description: `    
    Have good skills at using CI/CD tools such as Bitrise, Azure DevOps, building Pipelines with Bitrise. Also use Kotlin + Fastlane to automaticlly capture screen and release to AppStore. 
    • Use MVVM in iOS with SwiftUI, separate business logic from UI logic. 
    • Design common UI kits such as Clips, Buttons, Icons with SwiftUI, and communicate with UI/UX to achieve the best design effect. 
    • Encapsulating the network request library with Async / Await and UrlSession 
    • Integrate push notifications sdks such as Braze, Twilio. 
    • Performed functional Unit Tests using the XCTest framework
    `,
    icon: React.createElement(FaAppStoreIos),
    date: "2021/09 - 2022/07",
  },
  {
    title: "Senior iOS developer",
    location: "iHerb LLC, Shanghai, CN",
    description: `    
    Mainly responsible for prepay domain business, including home page, search page, product details page, product list page, and adding to shopping cart page. 
    • Design the URL Routing component which is based on 'Target-Action'. Also integrate deepLinks from Firebase, AppsFlyer, and iHerb domains, especially for the first-installed users which from big sales campaigns, which will open the previous deepLink after onboarding is finished. 
    • Use Cocoapods for component-based development to isolate standard components, and associate them with Jenkins pipeline to auto-update podfile. 
    • Handle CI/CD pipelines with Jenkins and Bitrise, such as pull request checking, unit test checking and coverage, and auto deploy to AppCenter and AppStore. 
    • Design a tool to detect memory leaks automatically, also use the Xcode memory graph debugger to detect retain cycles and memory leaks. 
    • Write high quality code and UnitTest, and write technical documents such as flow charts to clarify business logic and share with colleagues. 
    • Optimize page performance and reduce page latency, especially for pages with html, by parsing html tags
    `,
    icon: React.createElement(FaAppStoreIos),
    date: "2022/11-2023/11",
  },
  {
    title: "Senior iOS developer",
    location: "AI chatmentor(indie developer)",
    description: `    
    Independent development of APP + back-end interface development, official address: https://www.chatmentor.tech/ 
    • Integrate RevenueCat SDK and manage Apple’s subscription services, and use its templates and version loading functions to conduct A/B testing 
    • AdMob’s advertising integration, if you have subscribed to the PRO function of Apple subscription, the ads will be hidden 
    • Integrate Fastlane to solve packaging, upload to Testflight, submit to App Store review, batch download, upload meta information, automatic screenshots 
    • Use NodeJS to integrate and encapsulate OpenAI’s Chat completions API, and use the Swift AsyncSequence framework to parse the stream results. Use the express framework to return stream results to reduce the user's waiting time. At the same time, user authentication uses the JSON web token standard protocol to verify with the app segment. 
    • Support chat history and use SQLite to create, query, and delete chat results. 
    • Use SwiftUI+modifier to componentize the main design controls (Button, Text, etc.). Customized components can be easily used in various views of the entire app, enhancing reusability and code maintainability.
    `,
    icon: React.createElement(FaAppStoreIos),
    date: "2023/11 - To Present",
  },
  
] as const;

export const projectsData = [
  {
    title: "UICollectionView-XYTemplateLayoutCell",
    description: `
    A custom templateLayoutCell for UICollectionView. 
    `,
    link: {
      type: "mobile",
      ios: "1",
      android: "3",
      web: "",
    },
    videoUrl: "https://github.com/fifyrio/UICollectionView-XYTemplateLayoutCell/blob/master/Screenshots/screenshots.gif",
    feats: `
    - Template auto layout cell for automatically UICollectionViewCell height calculating. 
    `,
    tags: [
      "Objective-C",      
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "AI chatmentor",
    description: `
    Elevate Your Writing to Art with AI ChatMentor
    `,
    link: {
      type: "mobile",
      ios: "https://chatmentor.onelink.me/pWJk/sbvf0d5v",
      android: "",
      web: "https://www.chatmentor.tech/",
    },
    videoUrl: "https://youtu.be/9UNh7ZUb1ik?si=1b2gn-yQKsPLv2zq",
    feats: `
    - 100 % SwiftUI
    - Native IOS
    - AppsFlyer SDK Added
    - Revenue Cat Subscribe Management
    - Markdown Support
    - Chat History Support
    - In App Purchase to Unlock PRO version
    - Admob Ads Integration
    - Page loading state`,
    tags: ["SwiftUI"],
    imageUrl: aiPage1,
  },
] as const;

export const skillsData = [
  "Swift",
  "Objective-C",
  "SwiftUI",
  "React Native",
  "MVVM",  
  "JavaScript",
  "Git",
  "Jenkins",
] as const;
