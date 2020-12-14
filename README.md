# SOMA Post Production Audio Services
## Code Institute: Milestone Project 2 - Jamie Rolls
---
![Desktop](add link here to res website shot "responsive-project-screenshot")

SOMA Audio Services are a fictional business, who conduct post production audio services within the West Midlands, UK. The business is based on a real world service and is closely linked to my interests and professional qualifications. I have developed a website to showcase the business services to potential clients, using a range of interactive elements and a sharp focus on UX design throughout.

#### **Project Requirements:**
Build an interactive front-end website that responds to user actions and alters the way the site displays data/information.

Required Technologies : HTML - CSS3 - JavaScript
Optional: Include use of JQuery, and other Javascript libraries.

A live version of the site is available [here.](insert link here to live site)

# Table of Contents

1.  [Strategy & Scope](#strategy-and-scope)
    * [UX](#ux)
        * [Business Objectives](#business-objectives)
        * [User Objectives](#user-objectives)
        * [Project goals](#project-goals)
        * [User Stories](#user-stories)
2.  [Structure](#structure)
    * [Design Process](#design-process)
        * [Page Structure](#page-structure)
            * [Home](#home)
            * [Contact](#contact)
            * [FAQ](#faq)
            * [Mastering landing page](#mastering-landing-page)
            * [Mastering & Mixing Services](#mastering-and-mixing-services)
            * [Rates](#rates)
            * [Service Finder](#service-finder)
3.  [Skeleton](#skeleton)
    * [Wireframe Designs](#wireframe-designs)
    * [Responsive Design](#responsive-design)
    * [Changes In Functionality / Design](#changes-in-functionality-and-design)
4.  [Surface](#surface)
    * [Colors](#colours)
    * [Fonts](#fonts)
5.  [Features](#features)
    * [Sitewide](#sitewide)
        * [Modal](#get-a-quote-form)
        * [Navbar](#nav-bar)
        * [Contact Information](#contact-information)
    * [Homepage](#home-page)
        * [Testimonials](#testimonials)
        * [Hero Image Buttons](#hero-image-buttons)
    * [About Page](#about-page)
        * [Google Map Feature](#google-map-feature)
    * [Contact Page](#contact-page)
        * [Contact Us Form](#contact-us-form)
6.  [Future Features](#future-features)
7.  [Technologies Used](#technologies-used)
    * [Languages](#languages)
    * [Libraries](#libraries)
    * [Tools](#tools)
8.  [Testing](#testing)
    * [Testing User Stories](#testing-user-stories)
    * [Testing Features](#testing-features)
    * [Testing Responsiveness](#testing-responsiveness)
    * [Testing Different Browsers](#testing-different-browsers)
    * [Validating Code](#validating-the-html-and-css-code)
    * [Issues Found](#issues-found)
9. [Deployment](#deployment)
    * [Hosting on GitHub Pages](#hosting-on-github-pages)
    * [Cloning](#cloning)
10. [Credits](#credits)
    * [Content](#content)
    * [Media](#media)
        * [Images](#images)
    * [Acknowledgements](#acknowledgements)
        * [Sites used](#sites-used-for-information-and-support)
        * [Advice & Support](#i-received-advice-and-support-from)


# Strategy and Scope
## UX

#### Business Objectives

- The site will contain all information about the services offered by the business, including rates and audio examples of previous work.
- The site should be easy to navigate, have a design which compliments a modern business that aims to make the customer journey a top priority.
- The site will have an interactive 'service-finder'. Which supports the potential client to understand which service could benefit them most. This component of the site will provide a price estimate to its user by asking a series of questions to gather key information and tailor a response accordingly.
- The user should be able to easily contact the business, using a contact form. An automated email response should be sent to confirm receipt of the message.
- The user will be able to join the business mailing list easily from every page. An automated email confirming subscribtion to this will be sent on completion.

#### User Objectives

- Seeking post production services to be completed on a personal / commercial audio project. Comparing services offered to competitors.
- Curious about the services offered, would like to learn more about what is best suited to their projects. Key pages to user: Service Pages, Service-Finder
- Seeking a price estimate for known services. Key pages: Rates Page, Service-Finder.

#### Project Goals

- Create a clear, well designed website for the user to navigate with ease.
- Use a consistent, clear theme throughout the site.
- Consider appropriate pages/layout and content to fulfill business/user objectives.
- Embed interactive elements to the site, which will add real value to both the business and the user experience. Providing user with useful and valid information based on choices.

#### User Stories

1. As a visitor to the site, I want to easily identify the business offer/purpose and be able to easily navigate the site to learn more if desired.
2. As a visitor to the site, I want to learn more about the services offered and listen to some of the work previously completed by the business.
3. As a potential client, I know what service I require and would like to see the business rates.
4. As a potential client, I want to speak to somebody at the company to discuss a more bespoke service.
5. As a potential client, I'm not sure which service would benefit my project the most. I need some support finding the right one.

# Structure

## Design Process

#### Page Structure

* The site is designed to remain simple and stylish throughout, providing users with the information they require / wish to view. To support this design ambition, service pages and the rates page will only display information chosen by the user.

* All pages will adopt a similar page structure with main page content following a page header(if applicable) - the header will detail to the user which page they are currently viewing. This design choice supports the user experience, makes it easier to navigate the site and provides visual feedback to the user.

* Research was conducted to understand how similar businesses present themselves on the internet, this information was used to aid my decisions when deciding the site layout, fonts, colours and general look and feel of the site.

* I began to outline the content requirements for the site and thought about the best way for a user to navigate through this content.

* The following pages were chosen to be created: 
    - Home(index)
    - Contact
    - FAQ 
    - Mastering landing page
    - Mastering Service
    - Stem-Mastering Service
    - Mixing Service
    - Rates
    - Service-Finder

* A top nav bar containing links to a contact page, faq page and 'join mailing list' modal will be present at the top of each page.

* A responsive navbar will embedded within a page header at the top of each page, just below the top navigation links - it will contain links services and rates pages. This navbar will collapse on the smallest screens - and justify centrally on the page between smallest and largest breakpoints.

#### Home

* The Homepage features two areas of content. 

    1. The first section contains a carousel of images related to the business services, with overlaid text highlighting business attributes. 
    
    2. The second section highlights the three main audio services offered by the business - mastering, stem-mastering, mixing.

    Modal: A modal automatically appears after 5 seconds of loading the page. This prompts the user to try out the 'service-finder' feature, it can be closed or the user can choose to follow the link embedded within the modal - to open the service finder in the current tab/window.


#### Contact

* The Contact page will contain a single form, with contact detailed within. The form will capture name, email, subject and a message from the user. Once submitted, the user will recieve an email to the provided email address, this will contain a copy of their message and confirmation their message has been recieved. There will also be a mailto: link, should the user wish to send an email directly to the support team.

#### FAQ

* The FAQ page will display common questions and corresponding answers relating to the business services. The page will have one main section, questions will be displayed in full. To view an answer the user must click/tap the question or '+' icon on the related question. The text element will expand and the icon will change to a '-'. The user may wish to collapse this back to a question only at any point. This results in a much cleaner page design, displaying only the content the user wishes to view.

#### Mastering Landing Page

* This page will simply present the user a choice of two links, displayed in captions, overlaying an image related to an audio service. The links will take the user to either the 'Mastering Service' or 'Stem-Mastering Service' page. This page was created to keep the main site nav-bar simple with only three links. This page acts as a bridge between two similar services, accessible from a single nav-bar link.

#### Mastering and Mixing Services 

* All of the main service pages will contain three sections. The main purpose of these pages is to provide the user with key information about the service offered, as well as price estimates and audio examples of previous work.

    1. Section one will hold the key service information for the user to read and the business to showcase.

    2. Section two will hold a select menu, of service variations. Engaging with this will provide a price estimate to its user, which will update on the page automatically.

    3. Section three will showcase some audio examples of previous work, these will be embedded into the page using the Soundcloud widget. 

#### Rates

* The rates page will contain tables of information, detailing the pricing structure for all main services offered by the business. 
* A clean design will be adopted, displaying only information of interest to its user, based on the users input.
* In total there will be four tables of content. 

    1. Standard Mastering.
    2. Stem-Mastering.
    3. Timed-Mastering.
    4. Mixing.

* On initial visit to the page, no rates table will be displayed. A select menu at the top of the page, will trigger a corresponding table to be displayed below it. Page content will update according to how the user engages with the select menu. 

#### Service Finder

* The service finder page will host an interactive expereience for the site user. Its aimw is to provide a bespoke response to each user based on information gathered throughout a series of choices and inputs. 

* The purpose of this is to support potential clients in finding an appropriate service based on their project requirements. It provides automated feedback to potential clients, reducing the need for the direct interaction with the business. 

* This service is always active, therefore it has potential to present financial benefits the business, through suggesting services and engaging customers. As well as providing a support role to users outside of business hours.

* The page content will update, display and hide content based on user input. A flow chart has been developed to explain how the user journey will present itself:

* ![FLOW DIAGRAM](https://github.com/jamie120/MS2-Soma-Post-Production-Services/blob/master/assets/images/service-helper-flowchart.png "Desktop - Wireframe screenshot")



# Skeleton

## Wireframe designs

* Wireframes were designed using using Balsamiq, for three primary breakpoints. Desktop, Tablet and Mobile. 


- Desktop Wireframes.

![Desktop - ](https://github.com/jamie120/MS2-Soma-Post-Production-Services/blob/master/assets/images/balsamiq-wireframes/soma-desktop-wireframe.png "Desktop - Wireframe screenshot")

- Tablet Wireframes.

![Tablet - ](https://github.com/jamie120/MS2-Soma-Post-Production-Services/blob/master/assets/images/balsamiq-wireframes/soma-mobile-wireframe.png "Tablet - Wireframe screenshot")

- Mobile Wireframes.

![Mobile - ](https://github.com/jamie120/MS2-Soma-Post-Production-Services/blob/master/assets/images/balsamiq-wireframes/soma-tablet-wireframe.png "Mobile - Wireframe screenshot")

* Furthermore theme design was mocked up using Figma. This was completed for the desktop design and the styles/colors will be adopted throughout responsively.

Full workspace & diagrams hosted on figma.com can be found here: [Figma.com - Jamie Rolls - MS1](https://www.figma.com/file/imQzaWMTA9Faz6ezvda34b/MS1-Jamie-Rolls-D-R-Plastering-Services?node-id=0%3A1)

<!--
## Responsive Design

Once all the wireframes were developed for viewing on a larger desktop sized display. I worked to create separate wireframes for both tablet and mobile screen sizes. 
This required me to decide how best the content should be displayed on smaller devices. I ensured to keep the 'user' at the heart of any design choices. Making decisions on content order was important, as less content is viewable on smaller screen sizes without the need to scroll. To ensure engagement was maintained and users are able to find key content quickly, some content was shifted or even removed on smaller screens, using responsive design.


## Changes In Functionality and Design

It was decided that the 'get a quote' form was to be different from the contact us form. As they serve two different purposes.
I have since decided to use a modal for the pop up form (Get a Quote), as opposed to the contact form originally developed using wireframes.

Multiple Testimonials were added to the home page - using a Bootstrap carousel - this will support user confidence in the business, by providing more examples.


# Surface

## Colours

A palette of four colours was chosen for use across the site. Each colour compliments each other and the images used to display purpose to the business. The colours can be used to create contrast between each other and continuity between pages.

Colour Palette - Three main obvious colours compliment the design of the site. These are displayed below:

- ![#b89f91](https://via.placeholder.com/15/b89f91/000000?text=+) `#b89f91` - Logo & Buttons
- ![#dca518](https://via.placeholder.com/15/dca518/000000?text=+) `#dca518` - Page breaks and footer
- ![#707070](https://via.placeholder.com/15/707070/000000?text=+) `#707070`- Page header

Various other shades of grey are used appropriately, to highlight, surround and drop shadows on elements to support the sign design and ease of navigation.

## Fonts

Roboto was chosen as the font to be used site wide, due to its clean professional look. It was imported from 'Google Fonts', I applied the font-family directly to the body, with a fall-back font of sans-serif.

# Features

## Sitewide

### Get a Quote Form

* A modal form is viewable upon clicking the 'get a quote' button on any page it is present. The modal form was achieved by using supporting code from the MD Bootstrap library. https://mdbootstrap.com/docs/jquery/modals/forms/
* The buttons slightly grow in size when hovered upon. 
* Although not functioning as a form and actually submitting data, for design purposes and to demonstrate the user journey it is linked to a response page.

### Nav Bar

* The site uses Bootstrap to create a collapsed navbar on small devices. This enables users to view more relevant content on smaller screens, with the option to expand the navbar if required.

* The navbar and logo banner becomes fixed to the top of all pages if a user scrolls down to see more content on a page.

* Links to social media are fixed to the navbar - with a hover effect to indicate a user can interact with the icons.

### Contact Information

* Users can engage with the contact information across the site in two ways:
    * Firstly the phone icon can be clicked to obtain a contact name and number presented in a pop-up modal.
    * Secondly the 'email us' text + icon can be clicked to open the users default mail app to contact the business by email, if a webserver a new tab will be opened.

## Home Page

### Testimonials 

* An automated scrolling testimonial section is displayed on the home page. This is achieved using supporting code from the Bootstrap carousel component. https://getbootstrap.com/docs/4.0/components/carousel/

### Hero Image Buttons

* A user can easily navigate to the services page by clicking on the first of the hero-image overlaid buttons. This provides a quick and easy way to navigagte to what is expected to be one of the most visited pages on the website.
* The second button, when clicked, opens a the get a quote modal. The function of this button was also chosen in anticipation that requesting a quote will one of the most conducted tasks by users of the site.
* Both buttons animate when hovered upon - they increase in scale by 10% - drawing attention of the user.

## About Page
### Google Map Feature

* An embedded Google map on the about page, indicates a fixed area in which the business operates. This is a nice touch to the website and provides the website user with a clear view of the business operating area. This map was embedded using code from the following site: https://www.embedgooglemap.net/en/?gclid=CjwKCAjwmMX4BRAAEiwA-zM4JoyJB_AMMTM8hXyyqUkgRPOhXRWv6NyhWXqxULExeMFMwcGrFYMOzRoCLf0QAvD_BwE

## Contact Page

### Contact Us Form

* A user may wish to make a general enquiry, as opposed to requesting a quote. Therefore a general contact form is available on the contact page. It forwards the user to a response page once the form is submitted, providing visual feedback to the user.

# Future Features

* I would like to add functionality for the business to be able to update their Gallery images themselves, with newly completed projects. This would need to be via an intuitive user friendly approach, with no knowledge of coding and would require other technologies not currently used in this project.

* I would also like to add more functionality to the services page, enabling the user to click the images on the services page to view more images which have been filtered only to display those related to that specific service.

* I also wish to animate the buttons used throughout the site, to provide visual feedback to users when they are interacting with button elements.


# Technologies Used

## Languages

* HTML - base language used for this project.
* CSS - used for styling HTML code site wide.

## Libraries

* [Bootstrap](https://getbootstrap.com/) (4.5.2) - with supporting JS Script and tooltips. Used for the responsive grid system, styling elements and navbar creation.
* [FontAwseome](https://fontawesome.com/) (5.15.1) - used for all icons on the site.
* [MD Bootstrap](https://mdbootstrap.com) (4.19.1) - with supporting JS Script.
* [Google Fonts](https://fonts.google.com/) - used for the Roboto fonts.
* [Hover.css](https://ianlunn.github.io/Hover/) - used for animation effects on social icons and various buttons throughout the site.
* [Adobe Stock](https://stock.adobe.com/uk/) - used for images on homepage and services pages - License purchased for the project by Jamie Rolls.
* [JQuery](https://jquery.com/) (3.5.1) - used in conjunction with the Bootstrap library.

## Tools

* [Gitpod](https://www.gitpod.io) - used as IDE for this project.
* [Git](https://git-scm.com/) - used for version control.
* [Github](https://github.com/) - used to host repository and live website.
* [Figma](https://www.figma.com/) - used for creation of wireframes.
* [Am I Responsive](http://ami.responsivedesign.is/) - used for testing purposes and for the screenshot at the top of my README filed to display the web pages on different devices.
* [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - used for testing and debugging.
* [w3 html validator](https://validator.w3.org/) - used to test and validate my html code.
* [w3 css validator](https://jigsaw.w3.org/) - used to test and validate my css code.

# Testing

## Testing User Stories
* **As a visitor to the site, I want to easily be able to navigate the site and engage with the business if desired.**
    * The site is easy to navigate, there are multiple ways to engage with the business easily available to the user.

* **As a visitor to the site, I want to learn more about the services offered and view some of the work previously completed by the business, so that I can establish if what I require is offered.**
    * The services page was easily located, services offered are clear. Gallery was easily located, photos of completed work is clear to me.

* **As a potential client, I want to leave a message/query but I would rather not call.** 
    * I was able to easily find the contact page, where a form is available for me to use. Alternatively there are 'email' links around the site, which open my mailbox to write an email if desired.

* **As a potential client, I want to easily be able to contact somebody directly - so that I can arrange to receive a quote.**
    * Upon visiting the site, it was clear that I could request to get a quote very easily. I was able to locate a direct phone number, or I could send a message using a form. Alternatively I could email directly.

* **As a potential client, I want to easily find the contact details of the business, as I would rather speak to somebody directly.**
    * On each page I was able to locate a direct phone number with ease.

## Testing Features

- All the features detailed in the [Features](#features) section have been thoroughly tested for functionality.
    * The navbar was tested to collapse at the correct breakpoint.
    * The forms were both tested for validation of inputted data and that the user is forwarded to the response page once submitted.
    * Both modals were tested for functionality on various screen sizes.
    * Checks completed to ensure mailto links open in a new browser tab.
    * All buttons and nav links were checked for correct forwarding address.
    * Testimonials were checked to ensure carousel effect is animating correctly on all devices and browsers.

Further testing was completed by a friend,. With no information prior to the visiting the site of the purpose / business. They provided feedback on functionality and look and feel.
Feedback received was positive and various user stories were able to be conducted with no issues.

## Testing responsiveness

- I used Google Developer Tools within Chrome to view the project on responsively on all screen sizes, down to < 300px width.

## Testing different browsers

I manually tested the website on the following web browsers:
- Google Chrome 
- Safari
- Mozilla Firefox 

## Validating the HTML and CSS code

All of my code passed the following validation tests:
- HTML: [W3C Markup Validation Service](https://validator.w3.org/)
- CSS: [W3C Markup Validation Service](https://jigsaw.w3.org/css-validator/)

Screenshots of validations for each page of code can be found [here](https://github.com/jamie120/ms1_d_r_plastering/blob/master/assets/images/testing)


## Issues found

* There were various HTML validation issues to resolve. These mainly referred to formatting my code and were easily fixable across the site.

* I found various issues with responsiveness whilst testing across various screen sizes. This led me to change my media-queries to be more reactive at smaller screen sizes. Initially I utilized three main breakpoints where most changes would occur to layout and adjustments in font sizes. In the final deployment, I have made more incremental changes to enable a better user experience.

* Due to the site not translating on iPad, I made changes to accommodate a better user experience on devices at this size.

* I had overflow issues when my site was first posted on the peer-code-review forum on the Code Institute Slack community. Fellow students highlighted this to me whilst testing reviewing my code. I was able to resolve this issue by making changes to my grid and adjusting various parameters.

* Nav Bar links were found not to be active on the relevant pages - this was an easy fix to implement upon receiving the feedback.

* An ongoing visual bug to resolve occurs on Safari browsers using an Apple iMAC. Where the footer and quote button overlay some site content if the browser is resized in a particular way (screenshot provided below). This issue does not occur in other browsers and will rarely affect the user expereience. Although it does requires further research debugging to resolve, something I would look to resolve in future deployments of the site.
#### Screenshot 1 - 

![Bug - Screenshot](https://github.com/jamie120/ms1_d_r_plastering/blob/master/assets/images/readme/bug-screenshot-safari-1.png "bug-screenshot")

#### Screenshot 2 -

![Bug - Screenshot-2](https://github.com/jamie120/ms1_d_r_plastering/blob/master/assets/images/readme/bug-screenshot-safari-2.png "bug-screenshot-2")

# Deployment

* The site was developed in GitPod and pushed to the following remote GitHub repository - [REPO](https://github.com/jamie120/ms1_d_r_plastering)
    * The following GIT commands were used throughout deployment:
        * **git status** ------ used to check the status of files and any changes made / untracked.
        * **git add**   ------ to stage files ready to commit.
        * **git commit -m " "**  ------ to commit the files.
        * **git push** ------ to push the files to the master branch of the GitHub repo.

    * NOTE : commit text on this project was written in 'past tense' up until 4th November 2020.
    * All future commits from 4th November date are written in present tense - following action suggested by my mentor.

### Hosting on GitHub Pages

* This site is hosted using GitHub pages, deployed directly from the master branch. - [LIVE SITE](https://jamie120.github.io/ms1_d_r_plastering/index.html)
    * The following steps were taken to complete the hosting process.
        1. Log into GitHub.
        2. Choose the relevant repository. [D R Plastering](https://github.com/jamie120/ms1_d_r_plastering).
        3. Go to settings.
        4. Scroll down to GitHub Pages section.
        5. Select as a source **master branch**.
        6. The page is now automatically refreshed and the project is deployed.

    * In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html
    * The deployed site on GitHub pages will update automatically upon new commits to the master branch.


    ##### For more detailed information regarding GitHub Pages deployment click [here](https://pages.github.com/).

### Cloning

To run this code locally, you can clone this repository directly into the editor of your choice by following the steps below:

1. Open Terminal.
2. Change the current working directory to the location when you want the cloned directory.
3. Type the following into your Terminal:  
    git clone https://github.com/jamie120/ms1_d_r_plastering.git
4. Press Enter to create a local clone.

* To cut ties with this GitHub repository, type git remote rm origin into the terminal.

##### For more information regarding cloning of a repository click [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

# Credits

## Content

All the content of the website was written by me. Certain content was consulted with the company ' D R Plastering ' to ensure accuracy.

## Media

### Images

* All Gallery images were provided by 'D R Plastering' - some of these images are also used throughout the site elsewhere.
* The following images were purchased with license to use - from Abode Stock:
    * home-image.jpeg
    * experience-left.jpeg
    * experience-right.jpeg
    * service-plastering.jpeg

## Acknowledgements
   
### Sites used for information and support

* [W3C](https://www.w3.org/)
* [Stack overflow](https://stackoverflow.com/)
* [W3schools](https://www.w3schools.com/)
* [CSS-Tricks](https://css-tricks.com/)


#### I received advice and support from
   * Seun Owonikoko (my mentor)
   * Code Institute - Slack Community (various students, tutors and mentors)