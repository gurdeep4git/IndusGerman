import { Categories, Services } from "./keys";

export const NavbarData = [
    {
        "title": "Home",
        "link": "/home",
        "subMenu": []
    },
    {
        "title": "About",
        "link": "/about",
        "subMenu": []
    },
    {
        "title": "Products",
        "link": "",
        "subMenu": [
            {
                "title": `${Categories.category_1.title}`,
                "link": `/product/${Categories.category_1.key}`
            },
            {
                "title": `${Categories.category_2.title}`,
                "link": `/product/${Categories.category_2.key}`
            },
            {
                "title": `${Categories.category_3.title}`,
                "link": `/product/${Categories.category_3.key}`
            },
            {
                "title": `${Categories.category_4.title}`,
                "link": `/product/${Categories.category_4.key}`
            },
            {
                "title": `${Categories.category_5.title}`,
                "link": `/product/${Categories.category_5.key}`
            },
            {
                "title": `${Categories.category_6.title}`,
                "link": `/product/${Categories.category_6.key}`
            },
            {
                "title": `${Categories.category_7.title}`,
                "link": `/product/${Categories.category_7.key}`
            },
            {
                "title": `${Categories.category_8.title}`,
                "link": `/product/${Categories.category_8.key}`
            },
            {
                "title": `${Categories.category_9.title}`,
                "link": `/product/${Categories.category_9.key}`
            },
            {
                "title": `${Categories.category_10.title}`,
                "link": `/product/${Categories.category_10.key}`
            },
            {
                "title": `${Categories.category_11.title}`,
                "link": `/product/${Categories.category_11.key}`
            },
            {
                "title": `${Categories.category_12.title}`,
                "link": `/product/${Categories.category_12.key}`
            }
        ]
    },
    {
        "title": "Services",
        "link": "",
        "subMenu": [
            {
                "title": `${Services.service_1.title}`,
                "link": `/services/${Services.service_1.key}`
            },
            {
                "title": `${Services.service_2.title}`,
                "link": `/services/${Services.service_2.key}`
            },
        ]
    }
]