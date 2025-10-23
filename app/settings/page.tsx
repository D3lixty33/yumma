import { SidebarWrapper } from "@/components/sidebar-wrapper";

export const Settings = () => {
  return (
    <div className="flex flex-row">
      <div>
        <SidebarWrapper />
      </div>
      <div className="item-center justify-center w-full">
        <div className="flex items-center justify-center">Test</div>
      </div>
    </div>
  );
};

export default Settings;
