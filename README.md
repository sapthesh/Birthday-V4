# 🎂 Birthday V4 - The Magical Storybook 🎂

<img src="https://img.shields.io/github/repo-size/sapthesh/Birthday-V4?style=for-the-badge&logo=github&color=ff69b4&logoColor=white" alt="Repo Size"> <img src="https://img.shields.io/github/last-commit/sapthesh/Birthday-V4?style=for-the-badge&logo=github&color=f4d03f&logoColor=white" alt="Last Commit"> 
<a href="https://hits.sh/github.com/sapthesh/Birthday-V4/"><img alt="Hits" src="https://hits.sh/github.com/sapthesh/Birthday-V4.svg?style=for-the-badge"/></a>
<a href="https://hits.sh/github.com/sapthesh/Birthday-V4/"><img alt="Hits" src="https://hits.sh/github.com/sapthesh/Birthday-V4.svg?view=today-total&style=for-the-badge&color=fe7d37"/></a>
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/Version-4.0-blue.svg?style=for-the-badge)]()

Welcome to Birthday V4, a premium, narrative-driven birthday web experience. This version is a complete departure from previous designs, focusing on a light, modern "glassmorphism" aesthetic and a highly creative, multi-step storybook reveal. It's designed to be a memorable and enchanting digital gift.

## ✨ V4 Features

* **Elegant & Modern Design:** A beautiful, light-themed design featuring soft pastel colors and "frosted glass" UI elements.
* **Dynamic Animated Background:** A gently shifting gradient background combined with subtle floating light particles creates a dreamy, magical atmosphere.
* **Five-Step Narrative Journey:** Takes the user on a story-like adventure:
    1.  **The Mysterious Gift:** Begins with an elegantly wrapped gift box.
    2.  **The Golden Key:** Unveils an animated key to unlock the next stage.
    3.  **The Magical Storybook:** The key unlocks a stunning 3D CSS storybook.
    4.  **Animated Page Turning:** The book opens and pages turn automatically, revealing short, sweet messages.
    5.  **The Grand Finale:** The final page transitions to a beautiful card with animated floral elements.
* **Advanced CSS & SVG Animations:**
    * **3D Page-Turning Effect:** Built with CSS 3D transforms for a realistic feel.
    * **SVG Path Animation:** The key and final floral designs are animated to "draw" themselves on screen.
* **Enchanting Music:** A new, royalty-free music track that complements the magical theme.
* **Fully Responsive:** The entire experience, including the complex 3D animations, is designed to work beautifully on all devices.

## 🚀 Getting Started

Setting up this project is simple.

### Prerequisites

* A modern web browser (the 3D animations work best on up-to-date browsers).
* An enchanting instrumental `.mp3` file for the background music.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/Birthday-V4.git](https://github.com/your-username/Birthday-V4.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Birthday-V4
    ```
3.  **Add your music file:**
    Place your chosen music track in the folder and name it `magical_music.mp3`. If you use a different name, be sure to update the `src` in the `<audio>` tag in `index.html`.
4.  **Open in Browser:**
    Simply open the `index.html` file in your browser to begin the experience.

***

## 🎮 How to Customize

Personalize the story for your loved one.

1.  **Recipient's Name:**
    * Open `index.html`.
    * Go to the "Step 5: The Grand Finale" section.
    * Change the name inside the `<h2 class="finale-name">` tag.
        ```html
        <h2 class="finale-name">YourFriend'sName!</h2>
        ```
2.  **Page Messages:**
    * In `index.html`, find the `.page` divs.
    * Edit the text inside the `.page-text` paragraphs to create your own short story.
3.  **Final Wish:**
    * In the "Step 5" section of `index.html`, edit the text within the `<p class="finale-wish">` tag.

***

## 🤝 Contributing

This project is a labor of love. If you have ideas for new chapters, animations, or design improvements, your contributions are very welcome!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewChapter`)
3.  Commit your Changes (`git commit -m 'Add a NewChapter'`)
4.  Push to the Branch (`git push origin feature/NewChapter`)
5.  Open a Pull Request

***

## 📜 License

Distributed under the MIT License. See the `LICENSE` file for more information.
