let aboutButton = document.querySelector('.about');
let skillsButton = document.querySelector('.skills');
let worksButtons = document.querySelector('.works');
let hobbyButtons = document.querySelector('.hobby');

let aboutButtonMob = document.getElementById('about');
let skillsButtonMob = document.getElementById('skills');
let worksButtonsMob = document.getElementById('works');
let hobbyButtonsMob = document.getElementById('hobby');


const toggleMoblBtn = document.querySelector('.toggle-menu_wrapper');
const menuIcon=document.querySelector('.menu-icon');
const mobileHeader=document.querySelector('.mobile-header');



let main = document.getElementById('main');

let aboutContent = " <div class=\"main-block_wrapper\">\n" +
    "            <img src=\"./img/content/MyFoto2.jpg\" class=\"main-block_foto\" alt=\"портретное фото\">\n" +
    "            <h3 class=\"main-block_about \"> I am a responsible and motivated developer with experience in creating a SPA\n" +
    "                using\n" +
    "                JS(TS), React, Angular, Next, Redux\n" +
    "                using CSS and SASS.<br> I like to make up, implement certain logic on the pages of the site,\n" +
    "                I always think about the end user for whom the use\n" +
    "                of the site or application should be intuitive. Now I am improving\n" +
    "                my skills by participating in startups in which I expand my knowledge by solving tasks.\n" +
    "                I spend my leisure time learning new skills and deepening existing ones, as well as improving my\n" +
    "                English.\n" +
    "                I easily adapt to any requirements of the company.\n" +
    "            </h3>\n" +
    "        </div>\n" +
    "        <div class=\"main-block_education\">\n" +
    "            <div class=\"main-block_title\"> Educations:</div>\n" +
    "            <ul class=\"main-block_list\">\n" +
    "                <li>IT-INCUBATOR 2021-2022\n" +
    "                    Front-end developer (React,Redux,JS,TS)\n" +
    "                </li>\n" +
    "                <li>HTML ACADEMY 2020-2021\n" +
    "                    website development with\n" +
    "                    HTML,CSS,JS\n" +
    "                </li>\n" +
    "                <li>BELORUSSIAN NATIONAL TECHNICAL\n" +
    "                    UNIVERSITY 2015\n" +
    "                    fitness coursess\n" +
    "                </li>\n" +
    "                <li>BOBRUISK NATIONAL COLLEGE OF\n" +
    "                    DECORATIVE AND APPLIED ARTS\n" +
    "                    1996-1999\n" +
    "                    graphic designe\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"main-block_contacts\">\n" +
    "            <div class=\"main-block_title\"> Contacts:</div>\n" +
    "            <ul class=\"main-block_contacts-list\">\n" +
    "                <li>\n" +
    "                    <svg class=\"place\" fill=\"currentColor\" height=\"30px\" width=\"30px\" id=\"Layer_1\"\n" +
    "                         xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
    "                         viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n" +
    "<path d=\"M256,0C149.3,0,64,85.3,64,192c0,36.9,11,65.4,30.1,94.3l141.7,215v0c4.3,6.5,11.7,10.7,20.2,10.7c8.5,0,16-4.3,20.2-10.7\n" +
    "\tl141.7-215C437,257.4,448,228.9,448,192C448,85.3,362.7,0,256,0z M256,298.6c-58.9,0-106.7-47.8-106.7-106.8\n" +
    "\tc0-59,47.8-106.8,106.7-106.8c58.9,0,106.7,47.8,106.7,106.8C362.7,250.8,314.9,298.6,256,298.6z M256,128c-35.4,0-64,28.6-64,64\n" +
    "\tc0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,156.6,291.4,128,256,128z\"/>\n" +
    "</svg>\n" +
    "                    <p>Belarus, city Minsk</p></li>\n" +
    "                <li> <a href=\"tel:+375445736732\">\n" +
    "                    <svg class=\"tel\"\n" +
    "                         height=\"40px\" width=\"40px\" version=\"1.1\" id=\"_x32_\" xmlns=\"http://www.w3.org/2000/svg\"\n" +
    "\t viewBox=\"0 0 512 512\"  xml:space=\"preserve\">\n" +
    "<style type=\"text/css\">\n" +
    "\t.st0 {\n" +
    "        fill: #ffffff;\n" +
    "    }\n" +
    "</style>\n" +
    "<g>\n" +
    "\t<path class=\"st0\" d=\"M130.344,129.778c-27.425,17.786-32.812,73.384-22.459,118.698c8.064,35.288,25.208,82.623,54.117,127.198\n" +
    "\t\tc27.196,41.933,65.138,79.532,94.069,101.286c37.151,27.934,90.112,45.688,117.537,27.902c13.868-8.994,34.47-33.567,35.41-37.976\n" +
    "\t\tc0,0-12.082-18.629-14.733-22.716l-40.516-62.47c-3.011-4.642-21.892-0.399-31.484,5.034\n" +
    "\t\tc-12.938,7.331-24.854,27.001-24.854,27.001c-8.872,5.125-16.302,0.019-31.828-7.126c-19.081-8.779-40.535-36.058-57.609-60.765\n" +
    "\t\tc-15.595-25.666-31.753-56.38-31.988-77.382c-0.192-17.09-1.824-25.957,6.473-31.967c0,0,22.82-2.858,34.79-11.681\n" +
    "\t\tc8.872-6.542,20.447-22.051,17.436-26.693l-40.515-62.47c-2.651-4.088-14.733-22.716-14.733-22.716\n" +
    "\t\tC175.05,111.994,144.211,120.784,130.344,129.778z\"/>\n" +
    "    <path class=\"st0\" d=\"M360.036,176.391c16.488-67.201-22.687-135.921-88.913-155.97L276.715,0\n" +
    "\t\tc77.488,23.14,123.308,103.517,103.742,181.983L360.036,176.391z\"/>\n" +
    "    <path class=\"st0\" d=\"M315.781,164.273c9.845-42.802-14.93-86.262-56.776-99.596l5.594-20.428\n" +
    "\t\tc53.106,16.435,84.524,71.548,71.61,125.618L315.781,164.273z\"/>\n" +
    "    <path class=\"st0\" d=\"M271.466,152.138c3.288-18.373-7.111-36.616-24.596-43.147l5.605-20.468\n" +
    "\t\tc28.724,9.694,45.751,39.564,39.459,69.22L271.466,152.138z\"/>\n" +
    "</g>\n" +
    "</svg>\n" +
    "                   </a></li>\n" +
    "                <li><a href=\"mailto:_svet_@tut.by\"><svg class=\"mail\" fill=\"#ffffff\" width=\"40px\" height=\"40px\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                    <path d=\"M14.608 12.172c0 .84.239 1.175.864 1.175 1.393 0 2.28-1.775 2.28-4.727 0-4.512-3.288-6.672-7.393-6.672-4.223 0-8.064 2.832-8.064 8.184 0 5.112 3.36 7.896 8.52 7.896 1.752 0 2.928-.192 4.727-.792l.386 1.607c-1.776.577-3.674.744-5.137.744-6.768 0-10.393-3.72-10.393-9.456 0-5.784 4.201-9.72 9.985-9.72 6.024 0 9.215 3.6 9.215 8.016 0 3.744-1.175 6.6-4.871 6.6-1.681 0-2.784-.672-2.928-2.161-.432 1.656-1.584 2.161-3.145 2.161-2.088 0-3.84-1.609-3.84-4.848 0-3.264 1.537-5.28 4.297-5.28 1.464 0 2.376.576 2.782 1.488l.697-1.272h2.016v7.057h.002zm-2.951-3.168c0-1.319-.985-1.872-1.801-1.872-.888\n" +
    "    0-1.871.719-1.871 2.832 0 1.68.744 2.616 1.871 2.616.792 0 1.801-.504 1.801-1.896v-1.68z\"/></svg></a></li>\n" +
    "<li>\n" +
"    <a href=\"https://t.me/SvetlanaShuncova\" target=\"_blank\">\n" +
    "   <svg class=\"tg\" width=\"40px\" height=\"40px\" viewBox=\"0 0 24 24\" fill=\"none\"\n" +
                "          xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "   <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n" +
               "       d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3583 9.38244C11.3857 9.787 9.44177 10.6243 6.52657 11.8944C6.05318 12.0827 5.8052 12.2669 5.78263 12.4469C5.74448 12.7513 6.12559 12.8711 6.64455 13.0343C6.71515 13.0565 6.78829 13.0795 6.86327 13.1038C7.37385 13.2698 8.06068 13.464 8.41773 13.4717C8.74161 13.4787 9.1031 13.3452 9.50219 13.0711C12.226 11.2325 13.632 10.3032 13.7202 10.2831C13.7825 10.269 13.8688 10.2512 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9738 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4246 12.9759 11.2534 13.135 11.2184 13.1714C11.14 13.2528 11.0601 13.3298 10.9833 13.4038C10.509 13.8611 10.1532 14.204 11.003 14.764C11.4114 15.0331 11.7381 15.2556 12.0641 15.4776C12.4201 15.7201 12.7752 15.9619 13.2347 16.2631C13.3517 16.3398 13.4635 16.4195 13.5724 16.4971C13.9867 16.7925 14.3589 17.0579 14.8188 17.0155C15.086 16.991 15.362 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.382 16.6352 8.80081C16.6484 8.66228 16.6318 8.48498 16.6185 8.40715C16.6051 8.32932 16.5773 8.21842 16.4761 8.13633C16.3563 8.03911 16.1714 8.01861 16.0886 8.02C15.7125 8.0267 15.1354 8.22735 12.3583 9.38244Z\"\n" +
"         fill=\"#ffffff\"/>\n" +
"      </svg>\n" +
"     </a>\n" +
"   </li>\n" +
    "            </ul>\n" +
    "\n" +
    "        </div> ";
let skillsContent = " <ul class=\"icons-list\">\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\">\n" +
    "                    <img src=\"img/icons/angular.png\" class=\"icons-list_img\">\n" +
    "                    <span>Angular</span>\n" +
    "                </div>\n" +
    "                <div class=\"icons-list_back\"><p>Basic</p></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\"><img src=\"img/icons/api.png\" class=\"icons-list_img\"> <span>REST API</span>\n" +
    "                </div>\n" +
    "                <div class=\"icons-list_back\"><p>Axios, Fetch, Postman, Formik</p></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\"><img src=\"img/icons/atom.png\" class=\"icons-list_img\"> <span>React</span>\n" +
    "                </div>\n" +
    "                <div class=\"icons-list_back\"><p>Class components, Function components,Router, Next</p></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\"><img src=\"img/icons/book.png\" class=\"icons-list_img\">\n" +
    "                    <span>StoryBook</span></div>\n" +
    "                <div class=\"icons-list_back\"><p>Storybook  for building UI components and pages in isolation</p></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\"><img src=\"img/icons/css.png\" class=\"icons-list_img\"> <span>CSS </span>\n" +
    "                </div>\n" +
    "                <div class=\"icons-list_back\"><p>SASS, BEM, adaptive layout</p></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\"><img src=\"img/icons/figma.png\" class=\"icons-list_img\"> <span>Figma</span>\n" +
    "                </div>\n" +
    "                <div class=\"icons-list_back\"><p>Layout according to the layout of the site</p></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\"><img src=\"img/icons/git.png\" class=\"icons-list_img\"> <span>GIT</span>\n" +
    "                </div>\n" +
    "                <div class=\"icons-list_back\"><p>GitHab, work in a team, git merge</p></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\"><img src=\"img/icons/unit-testing.png\" class=\"icons-list_img\"> <span>Unit-testing</span>\n" +
    "                </div>\n" +
    "                <div class=\"icons-list_back\"><p>To test and determine whether a block of code works as intended.</p></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\"><img src=\"img/icons/ui.png\" class=\"icons-list_img\"> <span>Frameworks</span>\n" +
    "                </div>\n" +
    "                <div class=\"icons-list_back\"><p>Bootstrap, Material UI, Tailwind</p></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\"><img src=\"img/icons/typescript.png\" class=\"icons-list_img\"> <span>TypeScript</span>\n" +
    "                </div>\n" +
    "                <div class=\"icons-list_back\"><p>Strongly typed programming language </p></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\"><img src=\"img/icons/js.png\" class=\"icons-list_img\">\n" +
    "                    <span>JavaScript</span></div>\n" +
    "                <div class=\"icons-list_back\"><p>Asynchronous programming, functional programming</p></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\"><img src=\"img/icons/photoshop.png\" class=\"icons-list_img\">\n" +
    "                    <span>Photoshop</span></div>\n" +
    "                <div class=\"icons-list_back\"><p>Layout according to the layout of the site</p></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"icons-list_front\"><img src=\"img/icons/redux.png\" class=\"icons-list_img\"> <span>Redux</span>\n" +
    "                </div>\n" +
    "                <div class=\"icons-list_back\"><p>Redux-Thunk, Redux-Saga, Redux-Toolkit</p></div>\n" +
    "            </li>\n" +
    "\n" +
    "        </ul>"
let sliderMyFoto = "  <div class=\"sliders-container_title\"> My hobby:</div>" +
    "<div class=\"sliders-container\">\n" +
    "            <div\n" +
    "                    class=\"slide foto1\"\n" +
    "   \"\n" +
    "    >\n" +
    "                <h3>We're great</h3>\n" +
    "            </div>\n" +
    "            <div\n" +
    "                    class=\"slide foto2\"\n" +
    "        \"\n" +
    "            >\n" +
    "                <h3>Kawasaki for the soul</h3>\n" +
    "            </div>\n" +
    "            <div\n" +
    "                    class=\"slide foto3\"\n" +
    "        \"\n" +
    "            >\n" +
    "                <h3> The atmosphere of the apocalypse</h3>\n" +
    "            </div>\n" +
    "            <div\n" +
    "                    class=\"slide foto4\"\n" +
    "        \"\n" +
    "            >\n" +
    "                <h3>Beautiful buildings</h3>\n" +
    "            </div>\n" +
    "            <div\n" +
    "                    class=\"slide foto5 active\"\n" +
    "        \"\n" +
    "            >\n" +
    "                <h3>Different locations</h3>\n" +
    "            </div>\n" +
    "        </div>\n"
const workContent = "<div class=\"works-gallery\">\n" +
    "            \n" +
    "            <ul class=\"project-img\">\n" +
    "                <li> <span class=\"works-gallery_tool-tip\">\n" +
    "                    Click on the screen to go to the project page.\n" +
    "                </span></li>\n" +
    "                <li><a href=\"https://megamoto.by/\" target=\"_blank\"> <img class=\"project-img_img active\"\n" +
    "                                                         src=\"./img/content/imgWorks/Megamoto.jpg\"\n" +
    "                                                         alt=\"обложка сайта мегамото\"></a></li>\n" +
    "                <li><a href=\" https://sveta-confeta.github.io/my-todolist/#/login \" target=\"_blank\"><img class=\"project-img_img \" src=\"./img/content/imgWorks/todo.jpg\" alt=\"обложка сайта мегамото\"></a></li>\n" +
    "                <li><a href=\"https://sveta-confeta.github.io/todolists-angular/login\" target=\"_blank\"><img class=\"project-img_img\" src=\"./img/content/imgWorks/todoAngImg.jpg\" alt=\"обложка сайта с тодолистами\"></a></li>\n" +
    "                <li><a href=\"https://sveta-confeta.github.io/educational-project/\" target=\"_blank\"><img class=\"project-img_img\"  src=\"./img/content/imgWorks/learnCard.jpg\" alt=\"обложка сайта с тодолистами\"></a></li>\n" +
    "                <li><a href=\"https://sveta-confeta.github.io/sellers-hab/\" target=\"_blank\"><img class=\"project-img_img\"  src=\"./img/content/imgWorks/seller.jpg\" alt=\"обложка лендинга\"></a></li>\n" +
    "                <li><a href=\"https://sveta-confeta.github.io/Scandi/\" target=\"_blank\"><img class=\"project-img_img\" src=\"./img/content/imgWorks/scandi.jpg\" alt=\"обложка лендинга\"></a></li>\n" +
     "                <li><a href=\"https://simple-notes-app-pearl.vercel.app/\" target=\"_blank\"><img class=\"project-img_img\"  src=\"./img/content/imgWorks/notes.jpg\" alt=\"обложка сайта заметок\"></a></li>\n" +
    "            </ul>\n" +
    "            <div class=\"tabs\">\n" +
    "                <button type=\"button\" class=\"prev  disabled\">prev</button>\n" +
    "                <button type=\"button\" class=\"next\">next</button>\n" +
    "            </div>\n" +
    "        </div>"
// const mobileHeaderContent=" <header class=\"mobile-header \">\n" +
//     "            <h1 class=\"mobile-header_name\">Shunkova <br/>Svetlana</h1>\n" +
//     "            <h2 class=\"mobile-header_title\"> Frontend-developer</h2>\n" +
//     "            <nav>\n" +
//     "                <ul class=\"header_list\">\n" +
//     "                    <li>\n" +
//     "                        <button class=\"button  active\"  id=\"about\">\n" +
//     "                            <div class=\"bottom\">About me</div>\n" +
//     "                            <div class=\"top\">\n" +
//     "                                <div class=\"button-border button-border-left\"></div>\n" +
//     "                                <div class=\"button-border button-border-top\"></div>\n" +
//     "                                <div class=\"button-border button-border-right\"></div>\n" +
//     "                                <div class=\"button-border button-border-bottom\"></div>\n" +
//     "                            </div>\n" +
//     "                        </button>\n" +
//     "                    </li>\n" +
//     "                    <li>\n" +
//     "                        <button class=\"button skills\" id=\"skills\">\n" +
//     "                            <div class=\"bottom\">Мy skills</div>\n" +
//     "                            <div class=\"top\">\n" +
//     "                                <div class=\"button-border button-border-left\"></div>\n" +
//     "                                <div class=\"button-border button-border-top\"></div>\n" +
//     "                                <div class=\"button-border button-border-right\"></div>\n" +
//     "                                <div class=\"button-border button-border-bottom\"></div>\n" +
//     "                            </div>\n" +
//     "                        </button>\n" +
//     "                    </li>\n" +
//     "                    <li>\n" +
//     "                        <button class=\"button works\" id=\"works\">\n" +
//     "                            <div class=\"bottom\">Мy projects</div>\n" +
//     "                            <div class=\"top\">\n" +
//     "                                <div class=\"button-border button-border-left\"></div>\n" +
//     "                                <div class=\"button-border button-border-top\"></div>\n" +
//     "                                <div class=\"button-border button-border-right\"></div>\n" +
//     "                                <div class=\"button-border button-border-bottom\"></div>\n" +
//     "                            </div>\n" +
//     "                        </button>\n" +
//     "                    </li>\n" +
//     "                    <li>\n" +
//     "                        <button class=\"button hobby\" id=\"hobby\">\n" +
//     "                            <div class=\"bottom\">Мy hobby</div>\n" +
//     "                            <div class=\"top\">\n" +
//     "                                <div class=\"button-border button-border-left\"></div>\n" +
//     "                                <div class=\"button-border button-border-top\"></div>\n" +
//     "                                <div class=\"button-border button-border-right\"></div>\n" +
//     "                                <div class=\"button-border button-border-bottom\"></div>\n" +
//     "                            </div>\n" +
//     "                        </button>\n" +
//     "                    </li>\n" +
//     "                </ul>\n" +
//     "            </nav>\n" +
//     "        </header>";
let addSliderListner = () => {
    const slides = document.querySelectorAll('.slide');
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()

            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

function WorkSlider() {
    const images = document.querySelectorAll('.project-img_img')
    const btnPrev = document.querySelector('.prev')
    const btnNext = document.querySelector('.next')
    let ind = 0;

    showSliders(ind);

    function showSliders(n) {
        if (n < 1) {
            ind = ++ind;
        } else if (n > images.length) {
            ind = 0

        }

        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('active')
        }
        images[ind - 1].classList.add('active')
    }

    function plusSlide(n) {
        showSliders(ind += n)
    }

    btnNext.addEventListener('click', () => {
        btnPrev.classList.remove('disabled')
        plusSlide(1)
    })
    btnPrev.addEventListener('click', () => {
        plusSlide(-1)
    })

}

const getActiveClassWatcher = (elementsArr, activeClassName) => {
    return (elemThis) => {
        elementsArr.forEach((element) => {
            element.classList.remove(activeClassName)
        })
        elemThis.classList.add(activeClassName)
    }
}

const toggleActive = getActiveClassWatcher([
        skillsButton,
        aboutButton,
        worksButtons,
        hobbyButtons
    ],
    'active'
)

const toggleActiveMob = getActiveClassWatcher([
        skillsButtonMob,
        aboutButtonMob,
        worksButtonsMob,
        hobbyButtonsMob
    ],
    'active'
)

skillsButton.addEventListener('click', function () {
    toggleActive(this)
    this.classList.add('active');
    main.innerHTML = skillsContent;
})
aboutButton.addEventListener('click', function () {
    toggleActive(this)
    main.innerHTML = aboutContent;
})
worksButtons.addEventListener('click', function () {
    toggleActive(this)
    main.innerHTML = workContent;
    WorkSlider();
})
hobbyButtons.addEventListener('click', function () {
    toggleActive(this)
    main.innerHTML = sliderMyFoto;
    addSliderListner();
})

skillsButtonMob.addEventListener('click', function () {
    toggleActiveMob(this)
    this.classList.add('active');
    main.innerHTML = skillsContent;
    mobileHeader.classList.remove('mobile-header_active');
})
aboutButtonMob.addEventListener('click', function () {
    toggleActiveMob(this)
    main.innerHTML = aboutContent;
    mobileHeader.classList.remove('mobile-header_active');
})
worksButtonsMob.addEventListener('click', function () {
    toggleActiveMob(this)
    main.innerHTML = workContent;
    WorkSlider();
    mobileHeader.classList.remove('mobile-header_active');
})
hobbyButtonsMob.addEventListener('click', function () {
    toggleActiveMob(this)
    main.innerHTML = sliderMyFoto;
    addSliderListner();
    mobileHeader.classList.remove('mobile-header_active');
})





toggleMoblBtn.addEventListener('click', function(){
    menuIcon.classList.toggle('menu-icon-active');
    mobileHeader.classList.toggle('mobile-header_active');

})


