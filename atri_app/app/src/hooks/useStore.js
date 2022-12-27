import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Main_Container": {
      "callbacks": {}
    },
    "Header": {
      "callbacks": {}
    },
    "Nav_Items": {
      "callbacks": {}
    },
    "Logo_text": {
      "callbacks": {}
    },
    "Nav_links": {
      "callbacks": {}
    },
    "Img_container": {
      "callbacks": {}
    },
    "Text_container": {
      "callbacks": {}
    },
    "Buid_text": {
      "callbacks": {}
    },
    "sub_heading_text": {
      "callbacks": {}
    },
    "Open_source_text": {
      "callbacks": {}
    },
    "Info_Section": {
      "callbacks": {}
    },
    "Description_text": {
      "callbacks": {}
    },
    "Card1": {
      "callbacks": {}
    },
    "Feature1_text": {
      "callbacks": {}
    },
    "Feature1_img": {
      "callbacks": {}
    },
    "card3": {
      "callbacks": {}
    },
    "feature3_text": {
      "callbacks": {}
    },
    "feature3_img": {
      "callbacks": {}
    },
    "Card2": {
      "callbacks": {}
    },
    "feature2_text": {
      "callbacks": {}
    },
    "feature2_img": {
      "callbacks": {}
    },
    "Installation_guide": {
      "callbacks": {}
    },
    "Footer": {
      "callbacks": {}
    },
    "Footer_Texts": {
      "callbacks": {}
    },
    "Social_Container": {
      "callbacks": {}
    },
    "Flex44": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Links_Container": {
      "callbacks": {}
    },
    "Flex40": {
      "callbacks": {}
    },
    "Flex41": {
      "callbacks": {}
    },
    "Flex42": {
      "callbacks": {}
    },
    "Flex43": {
      "callbacks": {}
    },
    "Copyright": {
      "callbacks": {}
    },
    "Left_con": {
      "callbacks": {}
    },
    "Right_Con": {
      "callbacks": {}
    },
    "Form": {
      "callbacks": {}
    },
    "Form_text": {
      "callbacks": {}
    },
    "Form_elem": {
      "callbacks": {}
    },
    "Fixed_Component": {
      "callbacks": {}
    },
    "Link4": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Link1": {
      "custom": {
        "text": "Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atrilabs.com/Showcase",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "link2": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Link3": {
      "custom": {
        "text": "Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "LogoText": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "logo_img": {
      "custom": {
        "alt": "logo",
        "src": "/app-assets/atrilogo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Nav_btn": {
      "custom": {
        "text": "Get Started"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/category/getting-started/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Nav_github": {
      "custom": {
        "alt": "git..",
        "src": "/app-assets/github_darkmode.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Atri_gif": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/IntroGif.gif"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Bold_Desc": {
      "custom": {
        "text": "Build better apps faster"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Reg_desc": {
      "custom": {
        "text": "Fewer lines of code. Better code quality. Minimal learning curve."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Github_link_img": {
      "custom": {
        "alt": "img...",
        "src": "/app-assets/githubstrbtn.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "OPEN_SOURCE_txt": {
      "custom": {
        "text": "OPEN SOURCE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "semi_bold_text": {
      "custom": {
        "text": "A new approach to full-stack development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "custom": {
        "text": "Developer approved stack for the entire product team"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1": {
      "custom": {
        "text": "REDUCED DEVELOPMENT TIME"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "Access to productivity tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Get the best of both no-code and code worlds by using productivity tools such as visual editor and simultaneously writing custom React code"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "feature_1": {
      "custom": {
        "alt": "img",
        "src": "/app-assets/feature_1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "f3_text1": {
      "custom": {
        "text": "BETTER CODE QUALITY"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "f3_text2": {
      "custom": {
        "text": "Use something better than REST APIs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "f3_text3": {
      "custom": {
        "text": "Reduce compliance breaches by using our object model which serves as a single source of truth for both frontend and backend"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "f3_img": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/feature_3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "f2_text1": {
      "custom": {
        "text": "MINIMAL LEARNING CURVE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "f2_text2": {
      "custom": {
        "text": "Go beyond JavaScript world"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "f2_text3": {
      "custom": {
        "text": "Write backend in your favorite language, be it Python or NodeJS. Use our utility functions to speed up your development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "f2_img": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/feature_2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Install_text2": {
      "custom": {
        "text": "Get started with the full-stack Atri framework in three easy steps and follow our documentation to create your first Atri app"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Install_text1": {
      "custom": {
        "text": "Install and get started"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Install_img": {
      "custom": {
        "alt": "Img...",
        "src": "/app-assets/installation_figure.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Footer_desc": {
      "custom": {
        "text": "Full stack web development framework to build Progressive Web Apps faster"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Footer_logo": {
      "custom": {
        "alt": "img..",
        "src": "/app-assets/atrilogo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Footer_logo_text": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Footer_github_img": {
      "custom": {
        "alt": "img...",
        "src": "/app-assets/githubstrbtn.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Linkedin_icon": {
      "custom": {
        "alt": "Img...",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.linkedin.com/company/atri-labs",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Slack_Icon": {
      "custom": {
        "alt": " Img..",
        "src": "/app-assets/slack.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atricommunity.slack.com/signup#/domain-signup",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Youtube_Icon": {
      "custom": {
        "alt": "Img...",
        "src": "/app-assets/youtube.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.youtube.com/channel/UC1uR2Q5x_8olWS_Y4PdK1Bw",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Twitter_Icon": {
      "custom": {
        "alt": "Img..",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/atrilabs",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "F11_txt": {
      "custom": {
        "text": "SHOWCASE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "F12_txt": {
      "custom": {
        "text": "Repo traffic history"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Apps/traffic-history",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "F13_txt": {
      "custom": {
        "text": "Personal blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Apps/personal_blog",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "F14_txt": {
      "custom": {
        "text": "Ecommerce website"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Apps/full_stack_ecommerce_website",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "F21_txt": {
      "custom": {
        "text": "RESOURCES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "F22_txt": {
      "custom": {
        "text": "Docs "
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "F23_txt": {
      "custom": {
        "text": " Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "F24_txt": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "F31_txt": {
      "custom": {
        "text": "OPEN SOURCE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "F32_txt": {
      "custom": {
        "text": "Contribute"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine#how-to-contribute",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "F33_txt": {
      "custom": {
        "text": "Discussions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine/discussions",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "F41_txt": {
      "custom": {
        "text": "ABOUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "F42_txt": {
      "custom": {
        "text": "Conference talks"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/conferences",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Copyright_text": {
      "custom": {
        "text": "Copyright © 2022 Pulastya, Inc."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Privacy_Policy": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Terms_of_Use": {
      "custom": {
        "text": "Terms of Use"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Sub_text1": {
      "custom": {
        "text": "Subscribe to our free monthly newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Sub_Text2": {
      "custom": {
        "text": "Keep up to date with our new feature releases, blog posts on web development and our journey of creating a new web-development framework"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Form_button": {
      "custom": {
        "text": "Subscribe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Form_input": {
      "custom": {
        "value": "",
        "placeholder": "Enter your Email"
      },
      "callbacks": {}
    },
    "Made_With_Atri_logo": {
      "custom": {
        "alt": "Img...",
        "src": "/app-assets/made_with_atri_2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
