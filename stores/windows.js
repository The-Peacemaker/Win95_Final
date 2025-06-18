import { defineStore } from "pinia";

export const useWindowsStore = defineStore("windows", {
  state: () => ({
    // Height of Fullscreen Window
    // fullscreenWindowHeight: window.innerHeight + "px",

    activeWindow: "",

    // Active Windows Array State
    activeWindows: [],

    // Z-index State
    zIndex: 2,

    windows: [
      {
        windowId: "BiographyWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Biography", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "bio", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "bio.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "ResumeWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Résumé", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "resume", // Window Content (used under slots)
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "10vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "resume.png", // Window Icon Image
        altText: "Résumé", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "ImagePreviewWindow",
        windowState: "close",
        displayName: "Media Viewer",
        windowComponent: "ImagePreviewWindow",
        windowContent: "",
        windowContentPadding: {
          top: "1px",
          right: "10px",
          bottom: "10px",
          left: "10px",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "file.png",
        altText: "Photos",
        fullscreen: false,
        showInAppGrid: false,
        showInNavbar: false,
        // imagePreview: file.src
      },
      {
        windowId: "ProjectsWindow",
        windowState: "close",
        displayName: "Project",
        windowComponent: "window",
        windowContent: "projects",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "projects.png",
        altText: "PROJECT App",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
    //   {
    //     windowId: "TestBlogWindow",
    //     windowState: "close",
    //     displayName: "Blog",
    //     windowComponent: "window",
    //     windowContent: "testblog",
    //     windowContentPadding: {
    //       top: '0px',
    //       right: '0px',
    //       bottom: '0px',
    //       left: '0px',
    //     },
    //     position: "absolute",
    //     positionX: "6vw",
    //     positionY: "12vh",
    //     iconImage: "noss.webp",
    //     altText: "Blog",
    //     fullscreen: false,
    //     showInAppGrid: true,
    //     showInNavbar: true,
    //   },
    /*
    {
        windowId: "MemoriesWindow",
        windowState: "close",
        displayName: "Memories",
        windowComponent: "window",
        windowContent: "memory",
        windowContentPadding: {                                     //MEMORY WINDOW FOR FUTURE USE
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "4vw",
        positionY: "12vh",
        iconImage: "memories.png",
        altText: "MEMORY APP",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      
      {
        windowId: "MusicWindow",
        windowState: "close",
        displayName: "Music",
        windowComponent: "window",
        windowContent: "music",
        windowContentPadding: {                                    //MUSIC WINDOW FOR FUTURE USE
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "4vw",
        positionY: "12vh",
        iconImage: "music.png",
        altText: "MUSIC APP",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      */
      {
        windowId: "MailWindow",
        windowState: "close",
        displayName: "Mail",
        windowComponent: "mail",
        windowContent: "",
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "mail.png",
        altText: "Mail",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "PhotosWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Photos", // Display Name (title under icon)
        windowComponent: 'FilesWindow', // Window Component (can be changed to use modified windows)
        windowContent: '', // Window Content (used under slots)
        windowContentPadding: {
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "10vh", // Window Position Y (when first opened)
        positionXLarge: "23vw",
        positionYLarge: "7%",
        iconImage: "photos.png", // Window Icon Image
        altText: "Photos", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInNavbar: true,

        // COMING SOON
        folderContent: [
            {
              id: 0,
              title: "CERTIFICATES",
              content: [
                {
                  id: 0,
                  title: "AI-LAB.JPG",
                  type: "photo",
                  src: "https://cdn.jsdelivr.net/gh/The-Peacemaker/Win95_Final@main/public/photos/Hack2skill-Certificate.png",
                  altText: "AI-LAB.JPG",
                  size: 2477506,
                },
                {
                  id: 1,
                  title: "HTBVJC.PNG",
                  type: "photo",
                  src: "https://cdn.jsdelivr.net/gh/The-Peacemaker/Win95_Final@main/public/photos/HTBVJC.png",
                  altText: "HTBVJC.JPG",
                  size: 1265051,
                },
                {
                  id: 2,
                  title: "HTB.JPG",
                  type: "photo",
                  src: "https://cdn.jsdelivr.net/gh/The-Peacemaker/Win95_Final@main/public/photos/HTB.png",
                  altText: "HTB.JPG",
                  size: 1366527,
                },
                {
                  id: 3,
                  title: "GDSC-Certificate.JPG",
                  type: "photo",
                  src: "https://cdn.jsdelivr.net/gh/The-Peacemaker/Win95_Final@main/public/photos/GDSC-Certificate.png",
                  altText: "GDSC-Certificate.JPG",
                  size: 1265051,
                },
                {
                  id: 4,
                  title: "TechMind-GDSC.JPG",
                  type: "photo",
                  src: "https://cdn.jsdelivr.net/gh/The-Peacemaker/Win95_Final@main/public/photos/TechMind-GDSC.png",
                  altText: "TechMind-GDSC.JPG",
                  size: 1366527,
                },
                {
                  id: 5,
                  title: "YESS-Certificate.JPG",
                  type: "photo",
                  src: "https://cdn.jsdelivr.net/gh/The-Peacemaker/Win95_Final@main/public/photos/YESS-Certificate.png",
                  altText: "YESS-Certificate.JPG",
                  size: 1265051,
                },
                {
                  id: 6,
                  title: "Ethical-Hacking.JPG",
                  type: "photo",
                  src: "https://cdn.jsdelivr.net/gh/The-Peacemaker/Win95_Final@main/public/photos/Ethical-Hacking-Certificate.png",
                  altText: "Ethical-Hacking.JPG",
                  size: 1366527,
                },
                {
                  id: 7,
                  title: "IEEE.JPG",
                  type: "photo",
                  src: "https://cdn.jsdelivr.net/gh/The-Peacemaker/Win95_Final@main/public/photos/IEEE-CERTIFICATE.png",
                  altText: "IEEE.JPG",
                  size: 1366527,
                },
                {
                  id: 8,
                  title: "Applied-Gen-AI.JPG",
                  type: "photo",
                  src: "https://cdn.jsdelivr.net/gh/The-Peacemaker/Win95_Final@main/public/photos/Applied-Gen-AI.png",
                  altText: "Applied-Gen-AI.JPG",
                  size: 1366527,
                },
              ],
              size: 5109084,
              type: "folder",
              altText: "CERTIFICATE_FOLDER", 
            },
        ],
      /*
              content: [
                {
                  id: 0,
                  title: "Q-3.JPG",
                  type: "photo",
                  src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica Q/Q-3.JPG",
                  altText: "Q-3.JPG",
                  size: 2477506,
                },
                {
                  id: 1,
                  title: "Q-2.JPG",
                  type: "photo",
                  src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica Q/Q-2.JPG",
                  altText: "Q-2.JPG",
                  size: 1265051,
                },
                {
                  id: 2,
                  title: "Q-1.JPG",
                  type: "photo",
                  src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica Q/Q-1.JPG",
                  altText: "Q-1.JPG",
                  size: 1366527,
                },
              ],
              size: 5109084,
              type: "folder",
              altText: "Leica Q",  
            },
            {
              id: 1,
              title: "Yashica FX-7",
              content: [
                {
                  id: 0,
                  title: "FX7-8.JPG",
                  type: "photo",
                  src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Yashica FX-7/FX7-8.JPG",
                  altText: "FX7-8.JPG",
                  size: 2705525,
                },
                {
                  id: 1,
                  title: "FX7-1.JPG",
                  type: "photo",
                  src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Yashica FX-7/FX7-1.JPG",
                  altText: "FX7-1.JPG",
                  size: 3285824,
                },
                {
                  id: 2,
                  title: "FX7-2.JPG",
                  type: "photo",
                  src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Yashica FX-7/FX7-2.JPG",
                  altText: "FX7-2.JPG",
                  size: 2524860,
                },
              ],
              size: 18318406,
              type: "folder",
              altText: "Yashica FX-7",
            },
            {
              id: 2,
              title: "Canon FTb",
              content: [
                {
                  id: 0,
                  title: "FTb-3.JPG",
                  type: "photo",
                  src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Canon FTb/FTb-3.JPG",
                  altText: "FTb-3.JPG",
                  size: 1853391,
                },
                {
                  id: 1,
                  title: "FTb-2.JPG",
                  type: "photo",
                  src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Canon FTb/FTb-2.JPG",
                  altText: "FTb-2.JPG",
                  size: 294620,
                },
                {
                  id: 2,
                  title: "FTb-1.JPG",
                  type: "photo",
                  src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Canon FTb/FTb-1.JPG",
                  altText: "FTb-1.JPG",
                  size: 832777,
                },
              ],
              size: 2980788,
              type: "folder",
              altText: "Canon FTb",
            },
            {
              id: 3,
              title: "Rolleiflex K4A",
              content: [
                {
                  id: 0,
                  title: "K4A-1.JPG",
                  type: "photo",
                  src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Rolleiflex K4A/K4A-1.JPG",
                  altText: "K4A-1.JPG",
                  size: 4533313,
                },
                {
                  id: 1,
                  title: "K4A-2.JPG",
                  type: "photo",
                  src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Rolleiflex K4A/K4A-2.JPG",
                  altText: "K4A-2.JPG",
                  size: 2715035,
                },
                {
                  id: 2,
                  title: "K4A-3.JPG",
                  type: "photo",
                  src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Rolleiflex K4A/K4A-3.JPG",
                  altText: "K4A-3.JPG",
                  size: 3321761,
                },
              ],
              size: 16608265,
              type: "folder",
              altText: "Rolleiflex K4A",
            },
          ],
        folderSize: 300000  */
    },
    ], 
  }),

  getters: {
    getFullscreenWindowHeight() {
      let height = "0px";
      if (typeof window !== "undefined") {
        height = window.innerHeight + "px";
      }
      return height;
    },
  },

  actions: {
        getWindowById(windowId) {
            return this.windows.find((window) => window.windowId === windowId)
        },

        getWindowFullscreen(windowId) {
            return this.windows.find((window) => window.windowId === windowId).fullscreen
        },

        getActiveWindow() {
            return this.activeWindow
        },

        setActiveWindow(windowId) {
            this.activeWindow = windowId
        },

        setFullscreen(payload) {
            const getArrItem = () => {
                return this.windows.find(
                    (windows) => windows.windowId === payload.windowId
                );
            }
            const window = getArrItem();
            window.fullscreen = payload.fullscreen;
        },

        zIndexIncrement(windowId) {
            this.zIndex++
            if (document.getElementById(windowId)) {
                document.getElementById(windowId).style.zIndex = this.zIndex
            }
        },

        // Push Active Window
        pushActiveWindow(window) {
            this.activeWindows.push(window)
        },

        // Pop Active Window
        popActiveWindow(window) {
            const windowIndex = this.activeWindows.indexOf(window)
            if (windowIndex !== -1) {
                this.activeWindows.splice(windowIndex, 1)
            }
        },

        pushNewWindow(window) {
            this.windows.push(window)
        },

        setPhotoFolderContent(payload) {
            this.photoFolderContent = payload
        },

        setWindowState(payload) {
            // payload = {'windowState': 'open', 'windowId': 'WindowOne'}

            const getArrItem = () => {
                return this.windows.find(
                    (windows) => windows.windowId === payload.windowId
                );
            }

            const window = getArrItem();

            let preventAppendingOpenWindow = false;
            if (window.windowState == "open" || window.windowState == "minimize") {
                preventAppendingOpenWindow = true;
            }

            if (payload.windowState == "open") {
                window.windowState = payload.windowState;
                setTimeout(() => {
                    this.zIndexIncrement(payload.windowId);
                }, 0);
                setTimeout(() => {
                    this.setActiveWindow(payload.windowId);
                }, 0);
                if (preventAppendingOpenWindow == false) {
                    this.pushActiveWindow(window);
                }
            } else if (payload.windowState == "close") {
                setTimeout(() => {
                    window.windowState = payload.windowState;
                }, 0);
                setTimeout(() => {
                    this.popActiveWindow(window);
                }, 0)
                setTimeout(() => {
                    this.setActiveWindow("nil");
                }, 0)
            } else if (payload.windowState == "minimize") {
                setTimeout(() => {
                    window.windowState = payload.windowState;
                }, 0)
                setTimeout(() => {
                    this.setActiveWindow("nil");
                }, 0)
                
            } else {
                console.log("Error: windowState not found or invalid");
            }
        },
    }
});
