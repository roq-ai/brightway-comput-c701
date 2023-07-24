interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Institute Owner'],
  customerRoles: ['Student'],
  tenantRoles: ['Website Administrator', 'Institute Owner', 'Institute Manager', 'Course Coordinator'],
  tenantName: 'Institute',
  applicationName: 'Brightway Computers Website',
  addOns: ['file', 'notifications'],
};
