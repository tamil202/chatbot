export default [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/views.component').then(
        (components) => components.ViewsComponent
      ),
  },
  {
    path: 'web',
    loadComponent: () =>
      import('./pages/web/web.component').then(
        (components) => components.WebComponent
      ),
  },
];
