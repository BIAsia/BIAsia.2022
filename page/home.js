import "../style/font/cabinet/css/cabinet-grotesk.css";
import "../style/style.less";

import img1 from '../resource/img1.png'

document.querySelector("#home").innerHTML = `
<div class="nav">
    <div class="logo">Ziye Lu</div>
    <div class="nav-items">
        <a href="">About me</a>
        <a href="">Blog</a>
        <a href="">Gallery</a>
    </div>
</div>
<div class="content-container">
<div class="title">
    <h1>Ziye Lu</h1>
</div>
<div class="col-container">
    <div class="col col-main section-list menu">
        <div class="section section-m menu__item">
            <h3 class="menu__item-textinner">Interaction Designer</h3>
            <p>worked at Sensetime/Tencent ISUX/Mobiuspace</p>
        </div>
        <div class="section section-m menu__item">
            <h3 class="menu__item-textinner">Website Designer & Developer</h3>
            <p>with Framer & Three.js</p>
            
        </div>
        <div class="section section-m menu__item">
            <h3 class="menu__item-textinner">Plugin Developer</h3>
            <p>for Figma & Adobe XD</p>
            
        </div>
    </div>
    <div class="col">
        <div class="comment">I AM ALSO A...</div>
        <div class="section-container">
            <div class="section section-s">
                <h3>Figma
                    Community
                    Contributor</h3>
                <p>Figma/@biasia</p>
            </div>
            <div class="section section-s">
                <h3>WebGL & 
                    GenerativeArt
                    Lover</h3>
                <p>Self-built
                    Generators</p>
            </div>
            <div class="section section-s">
                <h3>Translate
                    Assistant</h3>
                <p>How to Speak
                    Machine</p>
            </div>
            <div class="section section-s">
                <h3>Midjourney
                    Player</h3>
                <p>Gallery/
                    PlayWithAI</p>
            </div>
            <div class="section section-s">
                <h3>DDL-driven
                    Bloger</h3>
                <p>Blog</p>
            </div>
        </div>
        
    </div>
    <div class="col">
        <div class="comment">AND...</div>
        <div class="section-container">
            <div class="section section-s">
                <h3>Notion
                    Heavy User</h3>
                <p>Joined at 
                    2019</p>
            </div>
            <div class="section section-s">
                <h3>Minecraft
                    Crafter</h3>
                <p>houses 
                    & castles</p>
            </div>
            <div class="section section-s">
                <h3>FFXIV
                    Dragoon</h3>
                <p>Fighting in 
                    Pandæmonium</p>
            </div>
        </div>
    </div>
</div>
</div>


`;
