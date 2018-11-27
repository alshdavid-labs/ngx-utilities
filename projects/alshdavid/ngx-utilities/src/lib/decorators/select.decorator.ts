import { Subscription } from "rxjs";
import { Store } from '@ngrx/store'
import { AppInjector } from '../ngx-utilities.module';

export function Select<T = any>(value = '*'): PropertyDecorator {
    function DecoratorFactory(target: any, propertyKey: string) {
        let subscription: Subscription
        const targetNgOnDestroy = target.ngOnDestroy || function (){}
        const targetNgOnInit = target.ngOnInit || function (){}
        
        function ngOnInit(this): void {
            const store = AppInjector.get(Store)
            if (value === '*') {
                subscription = store.subscribe(v => target[propertyKey] = v)
            } else {
                subscription = store.select(value).subscribe(v => {
                    target[propertyKey] = v
                })
            }
            targetNgOnInit.apply(this)
        }

        function ngOnDestroy(): void {
            subscription.unsubscribe()
            targetNgOnDestroy.apply(this)
        }

        target.ngOnInit = ngOnInit
        target.ngOnDestroy = ngOnDestroy
    }

    return DecoratorFactory;
}
