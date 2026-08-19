export function apiPagination(page=1,pageSize=25){return {page:Math.max(1,page),pageSize:Math.max(1,Math.min(500,pageSize))};}
