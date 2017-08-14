export class App {
    router = null;

    configureRouter(config, router) {
        config.title = 'Application Title';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'views/welcome/welcome', nav: true, title: 'Welcome' },
            { route: ['list'], name: 'list', moduleId: 'views/list/list', nav: true, title: 'List' },
            { route: ['work'], name: 'work', moduleId: 'views/work/work', nav: true, title: 'work' },
            { route: ['detail'], name: 'detail', moduleId: 'views/detail/detail', nav: true, title: 'detail' },
            { route: ['dtest'], name: 'dtest', moduleId: 'views/dtest/dtest', nav: true, title: 'dtest' },
            { route: ['md'], name: 'md', moduleId: 'views/md/md', nav: true, title: 'md' }
        ]);

        this.router = router;
    }
}