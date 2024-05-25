export interface SidebarProps{
  role:string;
  handleTab:(tab:string)=>void
}


interface SidebarData {
  role: string;
  tabs: string[];
}
export const SIDEBARDATA: SidebarData[] = [
  {
    role: "superadmin",
    tabs: ["boards", "customers", "employees", "tickets", "reports"],
  },
  {
    role: "supervisor",
    tabs: ["boards", "customers", "workerdata", "tickets"],
  },
  {
    role: "field worker",
    tabs: ["all data", "add new data"],
  },
  {
    role: "boardadmin",
    tabs: ["boardsDashboard", "Reports", "archives"],
  },
  {
    role: "boardmember",
    tabs: ["customers"],
  },
  {
    role: "customer",
    tabs: ["customerDashboard"],
  },
];
