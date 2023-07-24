const mapping: Record<string, string> = {
  courses: 'course',
  enquiries: 'enquiry',
  institutes: 'institute',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
