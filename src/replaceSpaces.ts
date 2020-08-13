import {Observable} from 'rxjs'

/***
 * RxJS operator which replaces space characters with the character provided
 * @param replacement a character or characters which replaces the space character
 *
 */
export default (replacement: string) => (source: Observable<string>) =>
    new Observable(observer => {
        return source.subscribe({
            next(value) {
                observer.next(
                    value.split(' ').join('_')
                )
            },
            error(err) {
                observer.error(err)
            },
            complete() {
                observer.complete()
            }
        })
    })

