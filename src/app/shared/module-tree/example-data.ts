/** Example file/folder data. */
export const files = [
  {
    name: 'Empresas',
    type: 'business',    
    children: [
      {
        name: 'Lista',
        type: '/empresas',
        
      },
      {
        name: 'Formulario',
        type: '/empresas/formulario',
       
      }
    ]
  },
  {
    name: 'Equipos',
    type: 'devices',
    children: [
      {
        name: 'Lista',
        type: '/equipos',
        
      },
      {
        name: 'Formulario',
        type: '/equipos/formulario',
       
      }
    ]
  },
  {
    name: 'Mantenimientos',
    type: 'build',
    children: [
      {
        name: 'Lista',
        type: '/mantenimientos',
        
      },
      {
        name: 'Formulario',
        type: '/mantenimientos/formulario',
        
      }
    ]
  },
  {
    name: 'Empleados',
    type: 'groups',
    children: [
      {
        name: 'Lista',
        type: '/empleados',
        
      },
      {
        name: 'Formulario',
        type: '/empleados/formulario',
        
      }
    ]
  }
];
