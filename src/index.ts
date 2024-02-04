const navbar = document.createElement('nav');
const navbar_div = document.createElement('div');
navbar_div.className = 'topnav';

const navbar_title_container = document.createElement('div');

const navbar_title = document.createElement('p');
navbar_title.className = 'navbar-title';
navbar_title.innerHTML = 'Shopping List';

navbar_title_container.appendChild(navbar_title);
navbar_div.appendChild(navbar_title_container);

navbar.appendChild(navbar_div);
const main_el = document.getElementById('main');

const home = document.createElement('a');
home.setAttribute('href', '#home');
home.className = 'nav-item';
home.innerHTML = 'Home';

const about = document.createElement('a');
about.setAttribute('href', '#about');
about.className = 'nav-item';
about.innerHTML = 'About';

navbar_div.appendChild(home);
navbar_div.appendChild(about);

main_el.appendChild(navbar);

const div_container = document.createElement('div');
div_container.className = 'container';

const sidenav = document.createElement('div');
sidenav.className = 'sidenav';
// div_container.appendChild(sidenav);

const product_list_div = document.createElement('div');
product_list_div.className = 'product-list';
sidenav.appendChild(product_list_div);

const inner_product_list = document.createElement('div');
inner_product_list.id = 'productList';
product_list_div.appendChild(inner_product_list);

main_el.appendChild(div_container);

const inner_div_container = document.createElement('div');
inner_div_container.className = 'inner-div';
div_container.appendChild(inner_div_container);
div_container.appendChild(sidenav);

const row = document.createElement('div');
row.className = 'row';
inner_div_container.appendChild(row);

const layout_row1 = document.createElement('div');
layout_row1.className = 'col-lg-4';
layout_row1.style.border = 'solid';
row.appendChild(layout_row1);

const layout_row2 = document.createElement('div');
layout_row2.className = 'col-lg-4';
const selected_list = document.createElement('div');
selected_list.className = 'selected-list';
layout_row2.style.border = 'solid';
layout_row2.appendChild(selected_list);

const selected_header = document.createElement('h2');
selected_header.innerHTML = 'Selected Items';
selected_list.appendChild(selected_header);

const selected_ul = document.createElement('ul');
selected_ul.id = 'selectedItems';
selected_list.appendChild(selected_ul);

row.appendChild(layout_row2);

const layout_row3 = document.createElement('div');
layout_row3.className = 'col-lg-4';
layout_row3.style.border = 'solid';
row.appendChild(layout_row3);


