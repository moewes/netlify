import { Router } from '@vaadin/router';

window.addEventListener('load', () => { 
    initRouter();
  });
  
  function initRouter() {
    const router = new Router(document.querySelector('#main')); 
    router.setRoutes([
      { path: '/',
        animate: true,
        component: 'my-component'},
      {
        path: '/',
        component: 'my-component'
      },
      {
        path: '/stats',
        component: 'my-component',
      } ,
      {
        path: '/fetch',
        component: 'fetch-element',
      }
    ]);
  }