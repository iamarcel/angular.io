System.register(['angular2/testing', '../app/app'], function(exports_1) {
    var testing_1, app_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            testing_1.describe('AppComponent', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should have correct text', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(app_1.AppComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        testing_1.expect(compiled).toContainText('My First Angular 2 App');
                        console.log('foo');
                        testing_1.expect(compiled.querySelector('h1')).toHaveText('My First Angular 2 App');
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=appComponent.spec.js.map