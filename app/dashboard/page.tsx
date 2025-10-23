import React from "react";
import { SidebarWrapper } from "@/components/sidebar-wrapper";
// Had to use const =() => export
// otherwise it doesn't load on the page
export const DashboardPage = () => {
  return (
    <>
      <SidebarWrapper />
    </>
  );
};

export default DashboardPage;
