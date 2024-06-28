import { usePage } from "@inertiajs/react";
import SidebarMenuItem from "./SidebarMenuItem";
import {
    LayoutGrid,
    Pencil,
    ShieldCheck,
    UsersRound,
} from "lucide-react";

const SidebarMenu = () => {
    const {
        auth: {
            user: { role, permissions },
        },
    } = usePage().props;

    return (
        <nav className="grow flex flex-col gap-1.5 overflow-y-auto p-4">
            <SidebarMenuItem
                href={route("dashboard")}
                active={route().current("dashboard")}
                icon={<LayoutGrid className="size-[22px]" />}
                text="Dashboard"
            />
            {(role === "admin" || permissions.includes("view_users")) && (
                <SidebarMenuItem
                    href={route("users.index")}
                    active={route().current("users.index")}
                    icon={<UsersRound className="size-[22px]" />}
                    text="Users"
                />
            )}
            {role === "admin" && (
                <SidebarMenuItem
                    href={route("posts.index")}
                    active={route().current("posts.index")}
                    icon={<Pencil className="size-[22px]" />}
                    text="Posts"
                />
            )}
            {(role === "admin" ||
                permissions.includes("view_role_permissions")) && (
                <SidebarMenuItem
                    href={route("rolePermissions.index")}
                    active={route().current("rolePermissions.index")}
                    icon={<ShieldCheck className="size-[22px]" />}
                    text="Role Permissions"
                />
            )}
        </nav>
    );
};

export default SidebarMenu;
