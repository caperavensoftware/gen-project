export class App {
    router = null;

    configureRouter(config, router) {
        config.title = 'Application Title';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'views/welcome/welcome', nav: true, title: 'Welcome' },
            { route: ['list'], name: 'list', moduleId: 'views/list/list', nav: true, title: 'List' }
        ]);

        this.router = router;
    }
}