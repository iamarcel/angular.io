System.register(['angular2/core', './crisis.service', '../dialog.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, crisis_service_1, dialog_service_1, router_1;
    var AddCrisisComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (crisis_service_1_1) {
                crisis_service_1 = crisis_service_1_1;
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AddCrisisComponent = (function () {
                function AddCrisisComponent(_service, _router, _dialog) {
                    this._service = _service;
                    this._router = _router;
                    this._dialog = _dialog;
                }
                AddCrisisComponent.prototype.routerCanDeactivate = function (next, prev) {
                    return !!this.editName.trim() ||
                        this._dialog.confirm('Discard changes?');
                };
                AddCrisisComponent.prototype.cancel = function () { this.gotoCrises(); };
                AddCrisisComponent.prototype.save = function () {
                    this._service.addCrisis(this.editName);
                    this.gotoCrises();
                };
                AddCrisisComponent.prototype.gotoCrises = function () {
                    this._router.navigate(['CrisisCenter']);
                };
                AddCrisisComponent = __decorate([
                    core_1.Component({
                        template: "\n  <h2>\"{{editName}}\"</h2>\n  <div>\n    <label>Name: </label>\n    <input [(ng-model)]=\"editName\" placeholder=\"name\"/>\n  </div>\n  <button (click)=\"save()\">Save</button>\n  <button (click)=\"cancel()\">Cancel</button>\n  ",
                        styles: ['input {width: 20em}']
                    }), 
                    __metadata('design:paramtypes', [crisis_service_1.CrisisService, router_1.Router, dialog_service_1.DialogService])
                ], AddCrisisComponent);
                return AddCrisisComponent;
            })();
            exports_1("AddCrisisComponent", AddCrisisComponent);
        }
    }
});
//# sourceMappingURL=add-crisis.component.js.map