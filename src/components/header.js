import LogoFull from "../images/logo-full.png";
import LogoHalf from "../images/logo-half.png";

const renderHeader = (content) => {
    const header = document.createElement("header");
    content.appendChild(header);
    
    const nav = document.createElement("nav");
    header.appendChild(nav);
    
    const navItems = document.createElement("ul");
    navItems.classList.add("nav-items");
    nav.appendChild(navItems);

    const _renderLogo = () => {
        const logoContainer = document.createElement("li");
        logoContainer.id = "logo-li";
        logoContainer.classList.add("nav-item");
        const logo = new Image();
        logo.src = LogoHalf; 
        // TODO: change logo based on screen size
        logoContainer.appendChild(logo);

        return logoContainer;
    };

    const _renderSearchBar = () => {
        const searchBar = document.createElement("li");
        searchBar.id = "search-bar-li";
        searchBar.classList.add("nav-item");

        const searchInput = document.createElement("input");
        searchInput.id = "search";
        searchInput.type = "text";
        searchInput.placeholder = "Search..";
        searchBar.appendChild(searchInput);

        const searchIcon = document.createElement("i");
        searchIcon.classList.add("fas");
        searchIcon.classList.add("fa-search");
        searchBar.appendChild(searchIcon);

        return searchBar;
    }

    const _renderMenuToggle = () => {
        const menuToggle = document.createElement("li");
        menuToggle.id = "menu-toggle-li"; 
        menuToggle.classList.add("nav-item");

        const menuToggleIcon = document.createElement("i");
        menuToggleIcon.id = "menu-toggle-btn";
        menuToggleIcon.classList.add("fas");
        menuToggleIcon.classList.add("fa-bars");
        menuToggle.appendChild(menuToggleIcon);

        return menuToggle;
    }

    const logo = _renderLogo();
    navItems.appendChild(logo);

    const searchBar = _renderSearchBar();
    navItems.appendChild(searchBar);

    const menuToggle = _renderMenuToggle();
    navItems.appendChild(menuToggle);

    return header;
};

export { renderHeader }