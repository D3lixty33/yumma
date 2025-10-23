import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import clsx from "clsx";

// Menu items
const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Products", url: "/products", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "/settings", icon: Settings },
];

export const SidebarWrapper = () => {
  return (
    <SidebarProvider>
      <Sidebar className="h-screen bg-white dark:bg-neutral-950 border-r border-gray-200 dark:border-neutral-800 shadow-sm">
        <SidebarContent className="p-4 font-inter">
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Application
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={clsx(
                          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-150",
                          "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-neutral-800 dark:hover:text-white focus:outline-none"
                        )}
                      >
                        <item.icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 transition-colors duration-150" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
