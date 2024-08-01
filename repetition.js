class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                    <a href="/" class="nav-home-btn">
                        <div class="nav-name">
                            <h1>EMILIANO</h1>
                            <h1>FRESNILLLO</h1>
                        </div>
                        <div >
                            <img class="nav-logo" src="./Logo.png" alt="">
                        </div>
                    </a>
                    <ul id="menu">
                        <li>
                            <a href="#" class="nav-menu-item dropdown">projects</a>
                            <ul>
                                <li><a href="/Architecture.html">architecure</a></li>
                                <li><a href="3D.html">3D art</a></li>
                                <li><a href="/Graphic Design.html">graphic design</a></li>
                            </ul>
                        </li>
                        <li class="nav-menu-item"><a href="/About.html">about</a></li>
                        <li class="nav-menu-item"><a href="/Contact.html">contact</a></li>
                    </ul>

                    <div id="hamburger">
                        <ul>
                            <li><a href="/Contact.html">contact</a></li>
                            <li><a href="/About.html">about</a></li>
                            <li><a href="/3D.html">3D art</a></li>
                            <li><a href="/Graphic Design.html">graphic design</a></li>
                            <li><a href="/Architecture.html">architecture</a></li>
                        </ul>
                    </div>

                    <span id="show" onclick="show()">&Congruent;</span>
                    <span id="hide" onclick="hide()">&times;</span> 
                </nav>
    `
    }
};

customElements.define ('my-header', MyHeader);
