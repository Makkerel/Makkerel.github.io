function main() {
    const nav_menu = document.querySelector(".nav_menu");
    function append_navmenu(heading, link) {
        const list_object = document.createElement("li");
        const heading_link = document.createElement("a");
        const list_text = document.createTextNode(heading);

        heading_link.appendChild(list_text);
        heading_link.setAttribute("href", `#${link}`);

        list_object.appendChild(heading_link);
        list_object.classList.add("nav_item");

        nav_menu.appendChild(list_object);
    }
    
    const main_body = document.querySelector("main");
    const headings = main_body.querySelectorAll("h2, h3");
    const title = main_body.querySelector("h1");
    
    main_title = title.innerText;
    append_navmenu(main_title, title.getAttribute("id"));
    
    for(let i = 0; i < headings.length; i++){
        const heading = headings[i];
        append_navmenu(heading.innerText, heading.getAttribute("id"));
    }
}

main();