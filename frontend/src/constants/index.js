
import {
    coverbus,
    coverdriver,
    coverroute,
    plus,
    ayush,
    amit,
    divesh,
    drsunilsir,
    coverstops,
    delete1,
    file,
} from '../assets';

export const teamMembers = [
    {
        name: "Ayush Gupta (Me)",
        role: "Full-Stack Developer",
        image: ayush,
    },
    {
        name: "Amitsingh Tanwar",
        role: "Backend Developer",
        image: amit,
    },
    {
        name: "Divesh Achhra",
        role: "Mobile App Developer",
        image: divesh,
    },
    {
        name: "Dr. Sunil Rathod",
        role: "Project Guide",
        image: drsunilsir,
    },
];

export const navLinks = [
    {
        id: "controls",
        title: "Controls",
        link: "controls"
    },

    {
        id: "help",
        title: "Help",
        link: "help"
    },

    {
        id: "about-us",
        title: "About Us",
        link: "about-us"
    },
];

export const actions = [
    {
        id: "view",
        title: "View",
        image: file,
        link: "view"
    },
    {
        id: "add",
        title: "Add",
        image: plus,
        link: "add"
    },

    {
        id: "delete",
        title: "Delete",
        image: delete1,
        link: "delete"
    },
];

export const operations = [
    {
        id: "managedrivers",
        title: "Driver",
        description: [
            "View all Drivers",
            "Add a new driver",
            "Delete a driver",
        ],
        link: "/manage-driver",
        image: coverdriver
    },
    {
        id: "managebus",
        title: "Bus",
        description: [
            "View all Buses",
            "Add a new bus",
            "Delete a bus",
        ],
        link: "/manage-bus",
        image: coverbus
    },
    {
        id: "manageroutes",
        title: "Route",
        description: [
            "View all Routes",
            "Add a new route",
            "Delete a route",
        ],
        link: "/manage-route",
        image: coverroute
    },
    {
        id: "managestops",
        title: "Stops",
        description: [
            "View all stops",
            "Add a new stop",
            "Delete a stops",
        ],
        link: "/manage-stops",
        image: coverstops
    },
];
