import { RiDashboardFill } from "react-icons/ri";
import { HiMiniDocumentDuplicate, HiOutlineDocument } from "react-icons/hi2";
import { FaUserFriends } from "react-icons/fa";



const routesData =
    [
        {
            label: "Dashboard",
            path: "/dashboard",
            icon: RiDashboardFill
        },
        {
            label: "Profiles",
            path: "/profiles",
            icon: FaUserFriends
        },
        {
            label: "Reports",
            path: "/reports",
            icon: HiMiniDocumentDuplicate,
            child: [
                {

                    label: "Turnstyle Report",
                    path: "/turnstyle-report",
                    icon: HiOutlineDocument

                }
            ]
        },
    ];

export { routesData };