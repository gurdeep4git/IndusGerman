import { Categories, Services, Csr } from "./keys";

export const NavbarData = [
    {
        "title": "Home",
        "link": "/home",
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
            },
            {
                "title": `${Categories.category_13.title}`,
                "link": `/product/${Categories.category_13.key}`
            },
            {
                "title": `${Categories.category_14.title}`,
                "link": `/product/${Categories.category_14.key}`
            },
            {
                "title": `${Categories.category_15.title}`,
                "link": `/product/${Categories.category_15.key}`
            },
            {
                "title": `${Categories.category_16.title}`,
                "link": `/product/${Categories.category_16.key}`
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
            {
                "title": `${Services.service_3.title}`,
                "link": `/services/${Services.service_3.key}`
            },
        ]
    },
    {
        "title": "Clients",
        "link": "/clients",
        "subMenu": []
    },
    {
        "title": "CSR",
        "link": "/csr",
        "subMenu": [
            {
                "title": `${Csr.csr_1.title}`,
                "link": `/csr/${Csr.csr_1.key}`
            },
        ]
    },
    {
        "title": "Contact",
        "link": "/contact",
        "subMenu": []
    },
]